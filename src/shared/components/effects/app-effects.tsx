"use client";

import Lenis from "lenis";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/features/portfolio/data/portfolio";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.86 });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 380 });
  const springY = useSpring(y, { damping: 28, stiffness: 380 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[90] h-6 w-6 rounded-full border border-cyan-300/70 bg-white/20 mix-blend-difference backdrop-blur"
      style={{ x: springX, y: springY }}
    />
  );
}

export function AppLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-zinc-950 text-white"
          exit={{ opacity: 0, y: -24, filter: "blur(14px)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/10 text-lg font-semibold shadow-2xl backdrop-blur"
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {profile.initials}
            </motion.div>
            <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,.16),transparent_30%),linear-gradient(180deg,#f8fafc,#ffffff_40%,#eef2ff)] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,.2),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(244,114,182,.12),transparent_30%),linear-gradient(180deg,#020617,#09090b_50%,#020617)]" />
      <motion.div
        className="absolute left-1/2 top-[-16rem] h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/10"
        animate={{ x: [-80, 60, -80], y: [0, 50, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="noise absolute inset-0 opacity-[.16] dark:opacity-[.12]" />
    </div>
  );
}
