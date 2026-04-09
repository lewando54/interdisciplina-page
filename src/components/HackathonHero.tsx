"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import placeholderAnimation from "@/assets/animations/placeholder.json";

const Lottie = dynamic(
  () => import("lottie-react").then((mod) => mod.default),
  { ssr: false },
);

const HERO_ANIMATION_DELAY_S = 0.12;
const HERO_LOTTIE_SIZE_PX = 200;

export function HackathonHero() {
  return (
    <section className="flex w-full max-w-3xl flex-col items-center gap-10 px-6 py-16 text-center sm:items-start sm:text-left">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full flex-col items-center gap-6 sm:flex-row sm:items-center"
      >
        <div
          className="flex shrink-0 items-center justify-center"
          style={{ width: HERO_LOTTIE_SIZE_PX, height: HERO_LOTTIE_SIZE_PX }}
          aria-hidden
        >
          <Lottie
            animationData={placeholderAnimation}
            loop
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Hackathon base
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Team: Interdisciplina
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
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
        className="flex flex-wrap items-center gap-3"
      >
        <code className="rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          src/lib/api.ts
        </code>
        <span className="text-zinc-400">·</span>
        <code className="rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          .github/workflows
        </code>
      </motion.div>
    </section>
  );
}
