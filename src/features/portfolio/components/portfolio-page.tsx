"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Download,
  Languages,
  Mail,
  Moon,
  Search,
  Sparkles,
  Sun,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaLinkedin } from "react-icons/fa";
import { localeLabels, locales, type Locale } from "@/i18n/messages";
import { AmbientBackground } from "@/shared/components/effects/app-effects";
import { Reveal, SectionShell } from "@/shared/components/effects/reveal";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { usePreferencesStore } from "@/store/preferences";
import {
  metrics,
  navItems,
  profile,
  projects,
  skills,
  stack,
  timeline,
  type Project,
} from "../data/portfolio";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(12),
});

type ContactValues = z.infer<typeof contactSchema>;

export function PortfolioPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen overflow-hidden text-zinc-950 dark:text-white">
      <AmbientBackground />
      <SiteHeader />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <StackAndGithub />
      <Contact />
      <Footer />
      <a
        href="#home"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-zinc-200/70 bg-white/75 text-zinc-950 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 dark:border-white/10 dark:bg-zinc-950/70 dark:text-white"
      >
        <ArrowDown className="h-4 w-4 rotate-180" />
      </a>
      <span className="sr-only">{t("hero.status")}</span>
    </main>
  );
}

function SiteHeader() {
  const t = useTranslations("nav");
  const { locale, setLocale, theme, setTheme } = usePreferencesStore();
  const nextTheme =
    theme === "dark" ? "light" : theme === "light" ? "system" : "dark";

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/70 px-3 shadow-[0_18px_80px_rgba(15,23,42,.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/60">
        <a
          href="#home"
          className="flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-zinc-950 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold sm:inline">
            {profile.name}
          </span>
        </a>
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="rounded-full px-4 py-2 text-sm text-zinc-600 transition hover:bg-zinc-950/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {t(item)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <div className="hidden rounded-full border border-zinc-200/80 bg-white/60 p-1 dark:border-white/10 dark:bg-white/5 sm:flex">
            {locales.map((item) => (
              <button
                key={item}
                type="button"
                aria-label={`Switch language to ${item}`}
                onClick={() => setLocale(item)}
                className={cn(
                  "h-8 rounded-full px-3 text-xs font-semibold transition",
                  locale === item
                    ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                    : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
                )}
              >
                {localeLabels[item as Locale]}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Cycle theme"
            onClick={() => setTheme(nextTheme)}
            className="grid h-10 w-10 place-items-center rounded-full text-zinc-600 transition hover:bg-zinc-950/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {theme === "dark" ? (
              <Moon className="h-4 w-4" />
            ) : theme === "light" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Sparkles className="h-4 w-4" />
            )}
          </button>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="grid h-10 w-10 place-items-center rounded-full bg-zinc-950 text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-zinc-950"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const t = useTranslations("hero");
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-10"
    >
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/60 px-3 py-1.5 text-sm text-zinc-600 shadow-sm backdrop-blur-xl dark:border-cyan-300/20 dark:bg-white/5 dark:text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.9)]" />
          {t("status")}
        </div>
        <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
          {t("eyebrow")}
        </p>
        <AnimatePresence mode="wait">
          <motion.h1
            key={t("title")}
            className="mt-5 max-w-5xl text-balance text-5xl font-semibold tracking-tight sm:text-7xl lg:text-[5.7rem] lg:leading-[.92]"
            initial={
              reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(12px)" }
            }
            animate={
              reduceMotion
                ? undefined
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            exit={
              reduceMotion
                ? undefined
                : { opacity: 0, y: -18, filter: "blur(12px)" }
            }
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="bg-gradient-to-br from-zinc-950 via-zinc-700 to-cyan-700 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-cyan-200">
              {t("title")}
            </span>
          </motion.h1>
        </AnimatePresence>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          {t("body")}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href="#projects">
              {t("primary")}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href="#contact">{t("secondary")}</a>
          </Button>
        </div>
      </Reveal>
      <Reveal delay={0.14}>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
          <motion.div
            className="absolute inset-0 rounded-[2rem] border border-white/60 bg-white/45 p-3 shadow-[0_30px_110px_rgba(15,23,42,.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative h-full overflow-hidden rounded-[1.45rem] bg-zinc-950">
              <Image
                src="/globe.svg"
                alt=""
                width={420}
                height={420}
                className="absolute right-[-4rem] top-8 h-80 w-80 opacity-20 invert"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_18%,rgba(14,165,233,.45),transparent_28%),linear-gradient(145deg,rgba(8,13,28,.55),rgba(2,6,23,.98))]" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="mb-5 grid h-24 w-24 place-items-center rounded-3xl bg-white text-3xl font-semibold text-zinc-950 shadow-2xl">
                  {profile.initials}
                </div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">
                  {profile.location}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                  {profile.name}
                </h2>
                <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-300">
                  Full-stack development, multi-tenant SaaS architecture, and
                  API integration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}

function About() {
  const t = useTranslations();

  return (
    <SectionShell id="about" eyebrow={t("nav.about")} title={t("about.title")}>
      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_.85fr]">
        <Reveal className="rounded-3xl border border-zinc-200/70 bg-white/65 p-7 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            {t("about.body")}
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 0.05}
              className="rounded-3xl border border-zinc-200/70 bg-white/65 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="text-3xl font-semibold">{metric.value}</div>
              <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                {t(`labels.${metric.label}`)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function Experience() {
  const t = useTranslations();

  return (
    <SectionShell
      id="experience"
      eyebrow={t("labels.timeline")}
      title={t("sections.experience")}
    >
      <div className="mt-12 grid gap-5">
        {timeline.map((item, index) => (
          <Reveal key={item.year} delay={index * 0.06}>
            <article className="group grid gap-5 rounded-3xl border border-zinc-200/70 bg-white/65 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/70 dark:border-white/10 dark:bg-white/5 sm:grid-cols-[12rem_1fr]">
              <div className="text-base font-semibold text-cyan-700 dark:text-cyan-300 sm:text-lg">
                {item.year}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-300">
                  {item.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function Skills() {
  const t = useTranslations();

  return (
    <SectionShell
      id="skills"
      eyebrow={t("nav.skills")}
      title={t("sections.skills")}
    >
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {skills.map((skill, index) => (
          <Reveal key={skill.title} delay={index * 0.08}>
            <article className="h-full rounded-3xl border border-zinc-200/70 bg-white/65 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <div className="mt-6 space-y-3">
                {skill.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 text-emerald-600 dark:text-emerald-300">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function useImageCycle(count: number, intervalMs = 3200) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (count < 2) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs]);

  return [index, setIndex] as const;
}

function PreviewDots({
  count,
  index,
  onSelect,
}: {
  count: number;
  index: number;
  onSelect: (index: number) => void;
}) {
  if (count < 2) return null;
  return (
    <div className="flex justify-center gap-1.5 py-2">
      {Array.from({ length: count }).map((_, dotIndex) => (
        <button
          key={dotIndex}
          type="button"
          aria-label={`Show screenshot ${dotIndex + 1}`}
          onClick={() => onSelect(dotIndex)}
          className={cn(
            "h-1.5 rounded-full transition-all",
            dotIndex === index
              ? "w-4 bg-cyan-600 dark:bg-cyan-300"
              : "w-1.5 bg-zinc-300 dark:bg-white/20",
          )}
        />
      ))}
    </div>
  );
}

function WebPreview({ src, alt }: { src: string | string[]; alt: string }) {
  const images = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useImageCycle(images.length);

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/60 dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center gap-1.5 border-b border-zinc-200/70 px-3 py-2 dark:border-white/10">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={images[index]}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={images[index]}
              alt={alt}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <PreviewDots count={images.length} index={index} onSelect={setIndex} />
    </div>
  );
}

function MobilePreview({ src, alt }: { src: string | string[]; alt: string }) {
  const images = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useImageCycle(images.length);

  return (
    <div className="flex flex-col items-center py-2">
      <div className="w-[200px] rounded-[2rem] border border-zinc-200/70 bg-white/60 p-2 shadow-xl dark:border-white/10 dark:bg-white/5">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.5rem]">
          <AnimatePresence mode="sync">
            <motion.div
              key={images[index]}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Image
                src={images[index]}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <PreviewDots count={images.length} index={index} onSelect={setIndex} />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isFeaturedMobile = project.featured && project.media.type === "mobile";

  const preview =
    project.media.type === "web" ? (
      <WebPreview src={project.media.src} alt={project.media.alt} />
    ) : (
      <MobilePreview src={project.media.src} alt={project.media.alt} />
    );

  const meta = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>
        {project.featured ? (
          <span className="shrink-0 rounded-full border border-zinc-200/70 bg-white/70 px-2.5 py-1 text-[10px] uppercase tracking-widest text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
            Featured
          </span>
        ) : null}
      </div>
      <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-200/70 px-3 py-1 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.metrics?.length ? (
        <div className="mt-4 flex flex-wrap gap-4">
          {project.metrics.map((metric) => (
            <span key={metric.k} className="text-xs">
              <span className="text-zinc-500 dark:text-zinc-400">
                {metric.k}:{" "}
              </span>
              <span className="font-semibold text-cyan-700 dark:text-cyan-300">
                {metric.v}
              </span>
            </span>
          ))}
        </div>
      ) : null}
      {project.live || project.github ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2 text-xs font-medium text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-zinc-950"
            >
              Live preview <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/70 px-4 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-950/5 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10"
            >
              <FaGithub className="h-3.5 w-3.5" /> Source
            </a>
          ) : null}
        </div>
      ) : null}
    </>
  );

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(14,165,233,.18)] dark:border-white/10 dark:bg-white/5 sm:p-7",
        project.featured && "md:col-span-2",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100",
          project.accent,
        )}
      />
      <div className="relative">
        {isFeaturedMobile ? (
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>{meta}</div>
            <div>{preview}</div>
          </div>
        ) : (
          <>
            {meta}
            <div className="mt-6">{preview}</div>
          </>
        )}
      </div>
    </article>
  );
}

function Projects() {
  const t = useTranslations();
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      projects.filter((project) =>
        [project.title, project.category, project.description, ...project.tags]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <SectionShell
      id="projects"
      eyebrow={t("labels.featured")}
      title={t("sections.projects")}
    >
      <Reveal className="mt-8 flex max-w-md items-center gap-3 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <Search className="h-4 w-4 text-zinc-400" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects"
          className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
        />
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {filtered.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.06}
            className={project.featured ? "md:col-span-2" : undefined}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function StackAndGithub() {
  const t = useTranslations();

  return (
    <SectionShell
      id="tech-stack"
      eyebrow={t("labels.stack")}
      title={t("sections.github")}
    >
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {stack.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.name} delay={index * 0.04}>
              <div className="group flex items-center gap-3 rounded-2xl border border-zinc-200/70 bg-white/65 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-white/85 hover:shadow-[0_20px_60px_rgba(14,165,233,.2)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                <Icon className="h-7 w-7 text-zinc-500 transition duration-300 group-hover:scale-110 group-hover:text-cyan-600 dark:text-zinc-400 dark:group-hover:text-cyan-300" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  {item.name}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xppzkbyw";

function Contact() {
  const t = useTranslations();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    setStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionShell
      id="contact"
      eyebrow={t("labels.contact")}
      title={t("sections.contact")}
    >
      <div className="mt-12 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal className="rounded-3xl border border-zinc-200/70 bg-white/65 p-7 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <h3 className="text-2xl font-semibold">{profile.name}</h3>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Multi-tenant SaaS applications, REST APIs, and reusable frontend
            architecture with Next.js and React.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <a href={profile.resume}>
                <Download className="h-4 w-4" />
                {t("labels.resume")}
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t("contact.name")} error={errors.name?.message}>
                <input {...register("name")} className="field-input" />
              </Field>
              <Field label={t("contact.email")} error={errors.email?.message}>
                <input {...register("email")} className="field-input" />
              </Field>
            </div>
            <Field
              label={t("contact.message")}
              error={errors.message?.message}
              className="mt-4"
            >
              <textarea
                {...register("message")}
                rows={5}
                className="field-input resize-none"
              />
            </Field>
            <div className="mt-5 flex items-center justify-between gap-4">
              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? t("contact.sending") : t("contact.send")}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              {status === "success" ? (
                <p className="text-sm text-emerald-600 dark:text-emerald-300">
                  {t("contact.success")}
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-rose-500">{t("contact.error")}</p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-rose-500">{error}</span>
      ) : null}
    </label>
  );
}

function Footer() {
  const { locale, setLocale } = usePreferencesStore();

  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
      <p>© 2026 {profile.name}. Engineered with Next.js 16.</p>
      <div className="flex items-center gap-2">
        <Languages className="h-4 w-4" />
        <select
          value={locale}
          onChange={(event) => setLocale(event.target.value as Locale)}
          className="rounded-full border border-zinc-200/70 bg-white/70 px-3 py-2 text-zinc-700 outline-none dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
        >
          {locales.map((item) => (
            <option key={item} value={item}>
              {item.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </footer>
  );
}
