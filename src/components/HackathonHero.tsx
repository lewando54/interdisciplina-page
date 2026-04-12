"use client";

import { motion } from "framer-motion";

import { AnimatedInterFinal } from "./AnimatedInterFinal";

export function HackathonHero() {
  return (
    <section className="flex w-full max-w-4xl flex-col items-center gap-10 px-6 py-16 text-center sm:items-start sm:text-left text-stone-800">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full flex-col items-center gap-10 sm:items-start"
      >
        <div
          className="flex shrink-0 items-center justify-center w-full sm:justify-start"
          aria-hidden
        >
          <AnimatedInterFinal width={1500} height={1500} />
        </div>

        <div className="flex flex-col gap-8 text-left w-full mt-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-4">
            <motion.h1
              className="group relative inline-block text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 cursor-default"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            >
              Interdyscyplinarność
              {/* Highlighter effect on hover */}
              <span className="absolute bottom-1 sm:bottom-2 -left-4 -z-10 h-7 sm:h-10 w-full sm:w-[105%] origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100 rounded-sm bg-yellow-500" />
            </motion.h1>
            <motion.span
              className="text-lg sm:text-xl text-stone-500 font-serif italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              (łac. inter + disciplīna)
            </motion.span>
          </div>

          <motion.div
            className="flex flex-col gap-5 text-lg sm:text-xl leading-relaxed text-stone-700 max-w-3xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div 
              className="flex gap-3 sm:gap-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <span className="font-semibold text-stone-400 select-none font-serif">(1)</span>
              <p>
                oznacza integrowanie metod, teorii i narzędzi z różnych dyscyplin naukowych w celu rozwiązania złożonych problemów, wykraczając poza ramy jednej dziedziny.
              </p>
            </motion.div>

            <motion.div 
              className="flex gap-3 sm:gap-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <span className="font-semibold text-stone-400 select-none font-serif">(2)</span>
              <p>
                zespół realizujący wyzwanie AstraZeneca walczący o finał Hackhaton 5 Łódź 2026.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
