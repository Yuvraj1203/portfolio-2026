import {
  BiLogoAws,
  BiLogoFigma,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export const profile = {
  name: "Yuvraj Singh Rathore",
  initials: "YR",
  location: "India",
  email: "hello@yuvraj.dev",
  github: "https://github.com/yuvrajsinghrathore",
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
  { value: "4+", label: "years" },
  { value: "28", label: "projects" },
  { value: "99", label: "lighthouse" },
  { value: "12", label: "systems" },
];

export const skills = [
  {
    title: "Interface Engineering",
    items: [
      "React Server Components",
      "Design systems",
      "Motion UI",
      "Accessibility",
    ],
  },
  {
    title: "Product Architecture",
    items: [
      "Feature modules",
      "State machines",
      "Typed contracts",
      "Performance budgets",
    ],
  },
  {
    title: "Delivery",
    items: [
      "CI quality gates",
      "Observability",
      "API integration",
      "Documentation",
    ],
  },
];

export const stack = [
  { name: "Next.js", icon: RiNextjsFill },
  { name: "React", icon: BiLogoReact },
  { name: "TypeScript", icon: BiLogoTypescript },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "Node", icon: BiLogoNodejs },
  { name: "Postgres", icon: BiLogoPostgresql },
  { name: "AWS", icon: BiLogoAws },
  { name: "Figma", icon: BiLogoFigma },
  { name: "JavaScript", icon: BiLogoJavascript },
];

export const projects = [
  {
    title: "Fynancial",
    category: "Mobile App",
    description:
      "A composable commerce cockpit with server-rendered dashboards, role-aware workflows, and sub-second filtering.",
    tags: ["React Native", "RSC", "Zustand", "i18n"],
    impact: "41% faster task completion",
    image: "/fynancialGif.gif",
    // image:
    //   "linear-gradient(135deg, rgba(14,165,233,.9), rgba(16,185,129,.8) 48%, rgba(15,23,42,.95))",
    featured: true,
  },
  {
    title: "Pulse AI Studio",
    category: "AI Operations",
    description:
      "A polished control plane for prompt experiments, evaluation runs, and model cost telemetry.",
    tags: ["TypeScript", "Zustand", "Motion", "Zod"],
    impact: "2.8x release confidence",
    image: "/graddingGif.gif",
    // image:
    //   "linear-gradient(135deg, rgba(244,114,182,.85), rgba(99,102,241,.85) 52%, rgba(2,6,23,.96))",
    featured: true,
  },
  {
    title: "Northstar Design Kit",
    category: "Design System",
    description:
      "An accessible component library with token governance, typed variants, and visual regression coverage.",
    tags: ["shadcn/ui", "Tailwind v4", "Storybook", "A11y"],
    impact: "63 reusable primitives",
    image: "/Sk5Gif.gif",
    // image:
    //   "linear-gradient(135deg, rgba(251,191,36,.8), rgba(236,72,153,.76) 50%, rgba(17,24,39,.95))",
    featured: false,
  },
];

export const timeline = [
  {
    year: "2026",
    title: "Principal Frontend Systems",
    body: "Building product surfaces that blend visual craft with measurable delivery outcomes.",
  },
  {
    year: "2024",
    title: "Design Engineering Lead",
    body: "Scaled component architecture, motion patterns, and accessibility standards across teams.",
  },
  {
    year: "2022",
    title: "Full-stack Product Engineer",
    body: "Shipped customer-facing platforms with typed APIs, resilient state, and fast rendering.",
  },
];

export const githubFallback = {
  stars: "1.8k",
  repositories: "64",
  commits: "3.2k",
  languages: ["TypeScript", "React", "CSS", "Node"],
};
