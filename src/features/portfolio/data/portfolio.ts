import {
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDocker, SiExpress, SiMongodb, SiNodedotjs, SiPython } from "react-icons/si";

export const profile = {
  name: "Yuvraj Singh Rathore",
  initials: "YR",
  location: "Udaipur, Rajasthan, India",
  email: "yuvrajrathore1203@gmail.com",
  github: "https://github.com/Yuvraj1203",
  linkedin: "https://linkedin.com/in/yuvraj1203",
  resume: "/resume.pdf",
};

export const navItems = [
  "about",
  "experience",
  "skills",
  "projects",
  "contact",
] as const;

export const metrics = [
  { value: "3+", label: "years" },
  { value: "37+", label: "tenants" },
  { value: "80%", label: "setup" },
  { value: "70%", label: "onboarding" },
];

export const skills = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "Tailwind CSS",
      "SASS/SCSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "RESTful APIs",
      "Axios",
      "TanStack Query",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "SQL", "MongoDB", "Mongoose", "Beanie"],
  },
  {
    title: "Tools",
    items: ["Docker", "Git", "GitHub", "Azure Pipelines", "CI/CD", "Postman"],
  },
];

export const stack = [
  { name: "Next.js", icon: RiNextjsFill },
  { name: "React", icon: BiLogoReact },
  { name: "TypeScript", icon: BiLogoTypescript },
  { name: "JavaScript", icon: BiLogoJavascript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: BiLogoPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Python", icon: SiPython },
];

export const projects = [
  {
    title: "Fynancial",
    category: "Finance App",
    description:
      "A personal finance app for tracking expenses, budgets, and savings goals.",
    tags: ["Next.js", "REST API"],
    impact: "Personal project",
    image: "/fynancialGif.gif",
    featured: true,
  },
  {
    title: "Grading",
    category: "Academic Tool",
    description:
      "A grading platform for tracking and managing student performance.",
    tags: ["Next.js", "REST API"],
    impact: "Personal project",
    image: "/graddingGif.gif",
    featured: true,
  },
  {
    title: "SK5 Marketing",
    category: "Marketing Website",
    description: "A marketing website built for lead generation and outreach.",
    tags: ["Next.js", "Tailwind CSS"],
    impact: "Client project",
    image: "/Sk5Gif.gif",
    featured: false,
  },
];

export const timeline = [
  {
    year: "Dec 2024 — Present",
    title: "Associate - Applications, Kansoft",
    body: "Built a reusable Next.js SaaS starter template that cut project setup time by 80%, led a legacy ASP.NET migration to Next.js supporting 37+ tenants, and shipped a Next.js + FastAPI + MongoDB tenant automation platform that reduced onboarding time by 70% with Azure Pipelines CI/CD. Also migrated a multi-tenant Ionic app to React Native for the production Amanda Fitness app, and received an Award of Appreciation for outstanding contribution.",
  },
  {
    year: "Jun 2024 — Dec 2024",
    title: "Frontend Developer (Next.js), Cognus Technology",
    body: "Translated Figma designs into production-ready Next.js interfaces and reusable components, integrated REST APIs, and built a real-time chat system with file attachments and dashboards — resolving critical bugs and cutting delivery timelines by 30%.",
  },
  {
    year: "Feb 2024 — Jun 2024",
    title: "Software Developer Intern, Lakebrains Technologies",
    body: "Built cross-browser extensions with JavaScript, HTML, and CSS, and React.js web applications backed by REST APIs — reducing load time by 30% across 3+ client projects.",
  },
];
