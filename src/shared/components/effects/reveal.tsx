"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";
import { cn } from "@/shared/lib/utils";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionShell({
  id,
  eyebrow,
  title,
  children,
  className,
}: PropsWithChildren<{ id: string; eyebrow: string; title: string; className?: string }>) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10", className)}>
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.26em] text-cyan-600 dark:text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
