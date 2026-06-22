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
  email: "info@geekbytestech.com",
  phone: "8217720086",
  location: "Remote Worldwide",
  social: {
    linkedin: "https://linkedin.com/company/geekbytes-solutions/",
    twitter: "#",
    instagram: "https://www.instagram.com/_geekbytes",
  },
  meta: {
    title: "GeekBytes — Modern IT Solutions & Software Development",
    description: "GeekBytes delivers web development, AI chatbots, mobile apps & cloud solutions. Scalable, secure IT for businesses worldwide.",
    ogImage: "/images/og-image.png",
  },
};
