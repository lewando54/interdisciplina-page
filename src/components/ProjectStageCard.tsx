"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProjectStageCardProps {
  stage: string;
  title: string;
  description: ReactNode;
  icon?: ReactNode;
  colorClass?: string;
  delay?: number;
}

export function ProjectStageCard({ 
  stage, 
  title, 
  description, 
  icon, 
  colorClass = "border-stone-200", 
  delay = 0 
}: ProjectStageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col p-6 sm:p-8 rounded-2xl bg-white shadow-sm border-l-4 ${colorClass} transition-all hover:shadow-md`}
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-50 shadow-sm border border-stone-100 text-xl font-bold">
          {icon || <span className="text-stone-700">{stage.replace("Etap ", "")}</span>}
        </div>
        <div>
          <span className="text-sm font-bold tracking-widest text-stone-400 uppercase">{stage}</span>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">{title}</h3>
        </div>
      </div>
      <div className="text-stone-600 leading-relaxed">
        {description}
      </div>
    </motion.div>
  );
}
