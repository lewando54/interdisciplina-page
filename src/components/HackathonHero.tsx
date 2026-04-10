"use client";

import { motion } from "framer-motion";

import { AnimatedInterFinal } from "./AnimatedInterFinal";

const HERO_ANIMATION_DELAY_S = 0.12;

export function HackathonHero() {
  return (
    <section className="flex w-full max-w-3xl flex-col items-center gap-10 px-6 py-16 text-center sm:items-start sm:text-left text-stone-800">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full flex-col items-center gap-6"
      >
        <div
          className="flex shrink-0 items-center justify-center w-full"
          aria-hidden
        >
          <AnimatedInterFinal width={1500} height={1500} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
            Hackathon base
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Team: Interdisciplina
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-stone-600">
            Next.js, TypeScript, axios, Framer Motion, and Lottie are wired up.
            Replace this hero with your idea and ship.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: HERO_ANIMATION_DELAY_S,
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-wrap items-center gap-3 justify-center w-full"
      >
        <code className="rounded-lg border border-stone-200 bg-white/80 px-3 py-1.5 font-mono text-sm text-stone-700 shadow-sm shadow-stone-200/50">
          src/lib/api.ts
        </code>
        <span className="text-stone-400" aria-hidden>
          ·
        </span>
        <code className="rounded-lg border border-stone-200 bg-white/80 px-3 py-1.5 font-mono text-sm text-stone-700 shadow-sm shadow-stone-200/50">
          .github/workflows
        </code>
      </motion.div>
    </section>
  );
}
