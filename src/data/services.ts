export interface Service {
  icon: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

export const services: Service[] = [
  {
    icon: "web",
    title: "Web Development",
    description: "Build fast, responsive, and scalable websites and web applications — from eCommerce stores to corporate portals and landing pages.",
    bulletPoints: [
      "eCommerce & Online Stores",
      "Business & Portfolio Websites",
      "Landing Pages & Lead Gen",
    ],
  },
  {
    icon: "wordpress",
    title: "WordPress Development",
    description: "We craft high-performance WordPress websites tailored to your brand, from custom themes and plugins to fully functional e-commerce and learning platforms.",
    bulletPoints: [
      "Custom Theme & Plugin Dev",
      "WooCommerce Stores",
      "LMS & Membership Sites",
    ],
  },
  {
    icon: "ai-bot",
    title: "AI Chatbots & Automation",
    description: "Leverage cutting-edge AI to automate customer interactions, streamline workflows, and deliver 24/7 intelligent support across all channels.",
    bulletPoints: [
      "GPT-4 Powered Chatbots",
      "WhatsApp Business API",
      "Workflow Automation",
    ],
  },
  {
    icon: "crm",
    title: "GoHighLevel CRM",
    description: "Maximize your sales pipeline with GoHighLevel CRM setup, automation sequences, and white-label solutions designed for agencies and businesses.",
    bulletPoints: [
      "Pipeline & Funnel Setup",
      "SMS/Email Sequences",
      "White-Label Agency Setup",
    ],
  },
  {
    icon: "mobile",
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
    bulletPoints: [
      "iOS (Swift) & Android (Kotlin)",
      "React Native / Flutter",
      "App Store Optimization",
    ],
  },
  {
    icon: "software",
    title: "Custom Software Solutions",
    description: "From SaaS platforms to enterprise dashboards, we engineer custom software solutions that solve complex business challenges at scale.",
    bulletPoints: [
      "SaaS Product Development",
      "ERP / Internal Dashboards",
      "API Design & Integration",
    ],
  },
  {
    icon: "cloud",
    title: "Cloud Architecture",
    description: "Design and deploy robust cloud infrastructure on AWS, Azure, or GCP with microservices, serverless patterns, and automated CI/CD pipelines.",
    bulletPoints: [
      "AWS / Azure / GCP",
      "Microservices & Serverless",
      "CI/CD & DevOps Pipelines",
    ],
  },
  {
    icon: "video",
    title: "Video Editing",
    description: "Professional video editing services for promotional content, social media reels, explainer videos, and brand storytelling that captivates your audience.",
    bulletPoints: [
      "Promotional & Ad Videos",
      "Social Media Reels & Shorts",
      "Motion Graphics & Intros",
    ],
  },
  {
    icon: "design",
    title: "Graphic Design & Branding",
    description: "Create a strong visual identity with custom logos, brand guidelines, marketing collaterals, and UI designs that leave a lasting impression.",
    bulletPoints: [
      "Logo & Brand Identity",
      "Marketing Collaterals",
      "UI/UX Design",
    ],
  },
];
