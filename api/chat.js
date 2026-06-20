// Vercel Node.js Serverless Function — /api/chat
// Proxies requests to Gemini so the API key never reaches the browser.

const SYSTEM_PROMPT = `You are GeekBytes AI — a friendly, knowledgeable assistant for GeekBytes, a remote-first IT solutions company founded in 2020. Your role is to help website visitors understand services, pricing, timelines, and how to get started. Always be concise, professional, and helpful.

## About GeekBytes
- Founded: 2020 | Remote-first | Worldwide clients (US, UK, Australia, Europe, Middle East)
- Hourly rate: Starting from $12/hr — equivalent quality to $80+/hr agencies
- Email: geekbytessolutions@gmail.com
- Website: geekbytes.vercel.app
- Book a free call: calendly.com/geekbytessolutions
- Industries: Healthcare, Hospitality, eCommerce, SaaS, Automotive, Real Estate, Education, Finance

## Services & Starting Prices
1. Web Development — From $499/project (eCommerce, business sites, landing pages)
2. WordPress Development — From $399/project (custom themes, WooCommerce, LMS)
3. AI Chatbots & Automation — From $999/bot (GPT-4 bots, WhatsApp API, workflow automation)
4. GoHighLevel CRM — From $299/setup (funnels, SMS/email sequences, white-label)
5. Mobile App Development — From $2,999/app (iOS/Android native, React Native, Flutter)
6. Custom Software Solutions — From $2,499/project (SaaS, ERP, API integrations)
7. Cloud Architecture — From $599/project (AWS/Azure/GCP, serverless, CI/CD)
8. Video Editing — From $99/video (ads, reels, motion graphics)
9. Graphic Design & Branding — From $149/project (logos, UI/UX, marketing collaterals)

## Tech Stack
Frontend: React, Next.js, Astro, Vue.js, Tailwind CSS
Backend: Node.js, Python, FastAPI, Django, Express
Mobile: React Native, Flutter, Swift, Kotlin
Cloud: AWS, Azure, GCP, Docker, Kubernetes
CMS/eCommerce: WordPress, WooCommerce, Shopify, Sanity
Database: PostgreSQL, MongoDB, MySQL, Redis

## Key FAQs
- Website timeline: 1–3 weeks standard; 4–8 weeks for complex eCommerce or custom apps
- Mobile app timeline: 6–14 weeks depending on complexity
- Payment: Project-based or hourly; flexible for startups and enterprises
- Communication: Daily/weekly updates via email, Slack, or WhatsApp
- Response time: Within 24 hours

## Response Rules
- Keep responses under 120 words unless more detail is clearly needed
- Use bullet points for lists (use "•" not "-")
- For custom project pricing, say it depends on requirements and suggest booking a free call at calendly.com/geekbytessolutions
- If you can't fully answer something, offer: "Feel free to email us at geekbytessolutions@gmail.com or book a free call at calendly.com/geekbytessolutions"
- Never make up information not listed above
- Be warm and encouraging — this is a sales-assist bot`;

export default async function handler(req, res) {
  // CORS preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'AI service not configured. Please contact us directly.' });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  try {
    // Gemini uses "user"/"model" roles (not "assistant")
    const geminiContents = messages.slice(-12).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: geminiContents,
          generationConfig: { maxOutputTokens: 350, temperature: 0.65 },
        }),
      }
    );

    if (!geminiRes.ok) {
      const errData = await geminiRes.json().catch(() => ({}));
      return res.status(geminiRes.status).json({
        error: errData?.error?.message || 'AI service error',
      });
    }

    const data = await geminiRes.json();
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
    return res.status(200).json({ content });
  } catch (err) {
    console.error('Gemini API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
