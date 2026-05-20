"use client";

import dynamic from "next/dynamic";

export const MainStatsChart = dynamic(
  () => import("./ProjectRiskCharts").then((mod) => mod.MainStatsChart),
  { ssr: false }
);

export const SourcesOfStressChart = dynamic(
  () => import("./ProjectRiskCharts").then((mod) => mod.SourcesOfStressChart),
  { ssr: false }
);

export const RiskFactorsChart = dynamic(
  () => import("./ProjectRiskCharts").then((mod) => mod.RiskFactorsChart),
  { ssr: false }
);
