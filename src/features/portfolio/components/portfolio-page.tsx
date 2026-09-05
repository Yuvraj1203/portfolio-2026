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
import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { localeLabels, locales, type Locale } from "@/i18n/messages";
import { AmbientBackground } from "@/shared/components/effects/app-effects";
import { Reveal, SectionShell } from "@/shared/components/effects/reveal";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { usePreferencesStore } from "@/store/preferences";
import {
  githubFallback,
  metrics,
  navItems,
  profile,
  projects,
  skills,
  stack,
  timeline,
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
                  Frontend systems, interaction craft, performance, and product
                  UX.
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
            <article className="group grid gap-5 rounded-3xl border border-zinc-200/70 bg-white/65 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/70 dark:border-white/10 dark:bg-white/5 sm:grid-cols-[9rem_1fr]">
              <div className="text-2xl font-semibold text-cyan-700 dark:text-cyan-300">
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
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <article
              className={cn(
                "group h-full overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/70 p-3 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(14,165,233,.18)] dark:border-white/10 dark:bg-white/5",
                project.featured && "lg:col-span-1",
              )}
            >
              <div
                className="relative aspect-[1.35] overflow-hidden rounded-2xl"
                // style={{ background: project.image }}
              >
                <Image
                  src={project.image ?? "/fynancialGif.gif"}
                  alt=""
                  width={420}
                  height={420}
                  className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.22),transparent)] opacity-0 transition group-hover:translate-x-full group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-zinc-950 backdrop-blur">
                  {project.impact}
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-cyan-700 dark:text-cyan-300">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
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
              </div>
            </article>
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
      <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_.85fr]">
        <Reveal className="grid grid-cols-2 gap-3 rounded-3xl border border-zinc-200/70 bg-white/65 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
          {stack.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="flex items-center gap-3 rounded-2xl border border-zinc-200/60 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <Icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            );
          })}
        </Reveal>
        <Reveal
          delay={0.1}
          className="rounded-3xl border border-zinc-200/70 bg-zinc-950 p-6 text-white shadow-2xl dark:border-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-cyan-200">
                {t("labels.github")}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Contribution graph fallback
              </h3>
            </div>
            <FaGithub className="h-7 w-7" />
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              ["Stars", githubFallback.stars],
              ["Repos", githubFallback.repositories],
              ["Commits", githubFallback.commits],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-white/10 p-4">
                <div className="text-2xl font-semibold">{value}</div>
                <div className="mt-1 text-xs text-zinc-300">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {githubFallback.languages.map((language) => (
              <span
                key={language}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200"
              >
                {language}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function Contact() {
  const t = useTranslations();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = () => setSubmitted(true);

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
            Product interfaces, design systems, dashboards, and
            performance-sensitive app surfaces.
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
              <Button type="submit">
                {t("contact.send")}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              {submitted ? (
                <p className="text-sm text-emerald-600 dark:text-emerald-300">
                  {t("contact.success")}
                </p>
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
