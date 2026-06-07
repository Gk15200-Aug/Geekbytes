export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  social: {
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "GeekBytes",
  tagline: "Empowering businesses with modern, scalable, and secure technology solutions. Your trusted IT partner.",
  email: "geekbytessolutions@gmail.com",
  phone: "8217720086",
  location: "Remote Worldwide",
  social: {
    linkedin: "https://linkedin.com/company/geekbytes-solutions/",
    twitter: "#",
    instagram: "https://www.instagram.com/_geekbytes",
  },
  meta: {
    title: "GeekBytes — Modern IT Solutions & Software Development",
    description: "GeekBytes delivers scalable, secure technology solutions — WordPress, AI chatbots, mobile apps, custom software & cloud architecture. Your trusted IT partner.",
    ogImage: "/images/og-image.png",
  },
};
