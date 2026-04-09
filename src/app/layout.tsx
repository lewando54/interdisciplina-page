import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteNavbar } from "@/components/SiteNavbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interdisciplina — Hackathon",
  description: "Hackathon project base for Team Interdisciplina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-stone-900 antialiased">
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
