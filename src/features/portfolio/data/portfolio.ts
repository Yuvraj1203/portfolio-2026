import {
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";

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

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  accent: string;
  media: { type: "web" | "mobile"; src: string | string[]; alt: string };
  featured?: boolean;
  live?: string;
  github?: string;
  metrics?: { k: string; v: string }[];
};

export const projects: Project[] = [
  {
    title: "Fynancial",
    category: "Finance App",
    description:
      "The easiest way to engage clients, unify your technology, and grow organically. All on your RIA's very own branded app.",
    tags: ["Next.js", "REST API"],
    accent: "from-emerald-400/25 via-cyan-400/10 to-transparent",
    media: {
      type: "mobile" as const,
      src: "/project/fynancial.PNG",
      alt: "Fynancial app preview",
    },
    featured: true,
  },
  {
    title: "Gradding",
    category: "Academic Tool",
    description:
      "A grading platform for tracking and managing student performance.",
    tags: ["Next.js", "REST API"],
    accent: "from-amber-400/25 via-orange-400/10 to-transparent",
    media: {
      type: "web" as const,
      src: "/project/gradding.png",
      alt: "Grading app preview",
    },
    featured: false,
  },
  {
    title: "SK5 Marketing",
    category: "Marketing Website",
    description: "A marketing website built for lead generation and outreach.",
    tags: ["Next.js", "Tailwind CSS"],
    accent: "from-fuchsia-400/25 via-violet-400/10 to-transparent",
    media: {
      type: "web" as const,
      src: "/project/sk5.png",
      alt: "SK5 Marketing preview",
    },
    featured: false,
  },

  {
    title: "Client Portfolio",
    category: "Graphic Designer Portfolio",
    description:
      "A Graphic Designer portfolio to show case their work by uploading their images and show casing them",
    tags: ["Next.js", "Tailwind CSS"],
    accent: "from-blue-400/25 via-cyan-400/10 to-transparent",
    media: {
      type: "web" as const,
      src: "/project/clientPortfolio.png",
      alt: "Client Portfolio preview",
    },
    featured: false,
  },
  {
    title: "Stable Manager",
    category: "Booking App",
    description:
      "A React Native booking app for managing stable slots and schedules, with real-time push notifications for reservations.",
    tags: ["React Native", "Zustand", "Notifee"],
    accent: "from-blue-400/25 via-indigo-400/10 to-transparent",
    media: {
      type: "mobile" as const,
      src: ["/project/stable1.PNG", "/project/stable2.PNG"],
      alt: "Stable Manager app preview",
    },
    featured: true,
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
