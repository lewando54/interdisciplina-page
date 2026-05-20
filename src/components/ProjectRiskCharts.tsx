"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';

const mainStats = [
  { name: 'Stres', value: 85.7, color: '#f59e0b' },
  { name: 'Zmiana pracy', value: 73.9, color: '#d97706' },
  { name: 'Spadek efektywności', value: 67.7, color: '#b45309' },
];

const sourcesOfStress = [
  { name: 'Typ umowy', value: 31.2, color: '#14b8a6' },
  { name: 'Obciążenie pracą', value: 20.5, color: '#0d9488' },
  { name: 'Brak uznania', value: 17.8, color: '#0f766e' },
];

const riskFactors = [
  { name: 'Dysproporcja: Wysiłek / Nagroda', value: 5.9, color: '#ef4444' },
  { name: 'Niska satysfakcja z pracy', value: 5.05, color: '#f97316' },
  { name: 'Zaburzony Work-life balance', value: 4.48, color: '#f59e0b' },
  { name: 'Stres w pracy', value: 4.21, color: '#eab308' },
];

export function MainStatsChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mainStats} layout="vertical" margin={{ top: 5, right: 40, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e7e5e4" />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#44403c', fontWeight: 500 }} width={140} />
          <Tooltip 
            cursor={{ fill: 'rgba(0,0,0,0.05)' }} 
            contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
            formatter={(value: unknown) => {
              const numValue = typeof value === 'number' || typeof value === 'string' ? value : 0;
              return [`${numValue}%`, 'Wskazań'];
            }} 
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} animationDuration={1500} barSize={32}>
            {mainStats.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="value" position="right" formatter={(val: unknown) => {
              const numVal = typeof val === 'number' || typeof val === 'string' ? val : 0;
              return `${numVal}%`;
            }} fill="#44403c" fontWeight={600} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SourcesOfStressChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sourcesOfStress} layout="vertical" margin={{ top: 5, right: 40, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e7e5e4" />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#44403c', fontWeight: 500 }} width={140} />
          <Tooltip 
            cursor={{ fill: 'rgba(0,0,0,0.05)' }} 
            contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
            formatter={(value: unknown) => {
              const numValue = typeof value === 'number' || typeof value === 'string' ? value : 0;
              return [`${numValue}%`, 'Wskazań'];
            }} 
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} animationDuration={1500} barSize={32}>
            {sourcesOfStress.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="value" position="right" formatter={(val: unknown) => {
              const numVal = typeof val === 'number' || typeof val === 'string' ? val : 0;
              return `${numVal}%`;
            }} fill="#44403c" fontWeight={600} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RiskFactorsChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={riskFactors} layout="vertical" margin={{ top: 5, right: 40, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e7e5e4" />
          <XAxis type="number" domain={[0, 7]} hide />
          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#44403c', fontWeight: 500 }} width={140} />
          <Tooltip 
            cursor={{ fill: 'rgba(0,0,0,0.05)' }} 
            contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
            formatter={(value: unknown) => {
              const numValue = typeof value === 'number' || typeof value === 'string' ? value : 0;
              return [numValue, 'OR (Ododds Ratio)'];
            }} 
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} animationDuration={1500} barSize={32}>
            {riskFactors.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="value" position="right" fill="#44403c" fontWeight={600} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
