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
      { name: "Vue", icon: "vue" },
      { name: "Angular", icon: "angular" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
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
      { name: "Java", icon: "java" },
      { name: "PHP", icon: "php" },
      { name: "Go", icon: "go" },
      { name: "Django", icon: "django" },
      { name: "Express", icon: "express" },
      { name: "Laravel", icon: "laravel" },
    ],
  },
  {
    name: "Mobile",
    icon: "mobile",
    iconColor: "#00A3FF",
    skills: [
      { name: "Flutter", icon: "flutter" },
      { name: "React Native", icon: "reactnative" },
      { name: "Swift", icon: "swift" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Dart", icon: "dart" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    name: "Data & Cloud",
    icon: "cloud",
    iconColor: "#00A3FF",
    skills: [
      { name: "AWS", icon: "aws" },
      { name: "GCP", icon: "gcp" },
      { name: "Azure", icon: "azure" },
      { name: "Docker", icon: "docker" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    name: "CMS & eCommerce",
    icon: "cms",
    iconColor: "#00A3FF",
    skills: [
      { name: "WordPress", icon: "wordpress" },
      { name: "WooCommerce", icon: "woocommerce" },
      { name: "Shopify", icon: "shopify" },
      { name: "Elementor", icon: "elementor" },
      { name: "Webflow", icon: "webflow" },
      { name: "GoHighLevel", icon: "ghl" },
    ],
  },
  {
    name: "Tools & Design",
    icon: "tool",
    iconColor: "#00A3FF",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Figma", icon: "figma" },
      { name: "Premiere Pro", icon: "premiere" },
      { name: "After Effects", icon: "aftereffects" },
      { name: "Photoshop", icon: "photoshop" },
      { name: "Illustrator", icon: "illustrator" },
      { name: "Canva", icon: "canva" },
    ],
  },
];
