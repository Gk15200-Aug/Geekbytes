export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  iconColor: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "monitor",
    iconColor: "#00A3FF",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind", icon: "tailwind" },
    ],
  },
  {
    name: "Backend",
    icon: "server",
    iconColor: "#00A3FF",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Python", icon: "python" },
      { name: "PHP", icon: "php" },
    ],
  },
  {
    name: "Mobile",
    icon: "mobile",
    iconColor: "#00A3FF",
    skills: [
      { name: "Flutter", icon: "flutter" },
      { name: "React Native", icon: "reactnative" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    name: "Cloud & Data",
    icon: "cloud",
    iconColor: "#00A3FF",
    skills: [
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    name: "CMS & eCommerce",
    icon: "cms",
    iconColor: "#00A3FF",
    skills: [
      { name: "WordPress", icon: "wordpress" },
      { name: "WooCommerce", icon: "woocommerce" },
      { name: "GoHighLevel", icon: "ghl" },
    ],
  },
  {
    name: "Tools & Design",
    icon: "tool",
    iconColor: "#00A3FF",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Figma", icon: "figma" },
      { name: "Canva", icon: "canva" },
    ],
  },
];
