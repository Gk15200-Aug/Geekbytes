// Script to pre-fetch website screenshots and save them locally
// Run: node scripts/fetch-screenshots.js

import { writeFileSync, mkdirSync, existsSync } from 'fs';

const projects = [
  { slug: "ori-beleza", url: "https://www.oribeleza.com/" },
  { slug: "tedxnuremberg", url: "https://tedxnuremberg.com/" },
  { slug: "hardens", url: "https://www.hardens.com/" },
  { slug: "speciality", url: "https://www.speciality.co.in/" },
  { slug: "the-palm", url: "https://www.thepalm.com/" },
  { slug: "zum-wildbach", url: "https://www.zum-wildbach.de/" },
  { slug: "sushiya", url: "https://www.sushiya.in/" },
  { slug: "van-seat-covers", url: "https://www.vanseatcoversuk.co.uk/" },
  { slug: "truck-wreckers-sa", url: "https://www.truckwreckerssa.com.au/" },
  { slug: "tobe-jewelry", url: "https://tobejewelry.com/" },
  { slug: "vaporfi", url: "https://www.vaporfi.com/" },
  { slug: "varma-steels", url: "https://varmasteels.com/" },
  { slug: "vic-recyclers", url: "https://www.vicrecyclers.com.au/" },
  { slug: "nailashes", url: "https://www.nailashes.in/" },
  { slug: "ecocar-wreckers", url: "https://ecocarwreckers.com.au/" },
  { slug: "map-dental", url: "https://mapdentalcenter.com/" },
  { slug: "one-aesthetics", url: "https://oneaesthetics.ca/" },
  { slug: "dr-granoth", url: "https://drgranoth.co.il/" },
  { slug: "diamond-labs", url: "https://diamond-labs.net/" },
  { slug: "collabdiary", url: "https://collabdiary.com/" },
  { slug: "ht-business-group", url: "https://htbusinessgroup.com/" },
  { slug: "faber-israel", url: "https://www.faber-isr.com/" },
  { slug: "vouge-flix", url: "https://vougeflix.com/" },
  { slug: "ernest-sturm", url: "https://erneststurm.com/" },
  { slug: "pacific-connect", url: "https://play.google.com/store/apps/details?id=com.invent.pacificConnect" },
  { slug: "auto-reply-bot", url: "https://play.google.com/store/apps/details?id=com.tools.autoreplybot.app" },
  { slug: "irestore-pdm", url: "https://play.google.com/store/apps/details?id=com.irestore.pdm" },
  { slug: "whitelms-school", url: "https://play.google.com/store/apps/details?id=com.zenanvibe.whitelms_public_school" },
];

const outputDir = 'public/images/projects';
if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

async function fetchScreenshot(project) {
  const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url&type=png&viewport.width=1280&viewport.height=720`;
  try {
    const res = await fetch(apiUrl, { redirect: 'follow' });
    if (res.ok && res.headers.get('content-type')?.includes('image')) {
      const buffer = Buffer.from(await res.arrayBuffer());
      writeFileSync(`${outputDir}/${project.slug}.png`, buffer);
      console.log(`✓ ${project.slug}`);
    } else {
      console.log(`✗ ${project.slug} — status ${res.status}`);
    }
  } catch (e) {
    console.log(`✗ ${project.slug} — ${e.message}`);
  }
}

console.log('Fetching screenshots...');
for (const project of projects) {
  await fetchScreenshot(project);
  // Small delay to avoid rate limiting
  await new Promise(r => setTimeout(r, 2000));
}
console.log('Done!');
