"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD_PX = 12;
const LOGO_MAIN_HEIGHT_CLASS = "h-10";
const LOGO_SMALL_HEIGHT_CLASS = "h-10";

export function SiteNavbar() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/90 bg-stone-50/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Interdisciplina home"
          className="flex items-center outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-400"
        >
          <span className="relative inline-grid h-10 max-w-[min(18rem,70vw)] place-items-start [grid-template-areas:'logo']">
            <Image
              src="Inter_small.svg"
              alt=""
              width={1500}
              height={1500}
              priority
              className={`[grid-area:logo] w-auto object-contain object-left transition-opacity duration-200 ${LOGO_MAIN_HEIGHT_CLASS} ${
                compact ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="Inter_small.svg"
              alt=""
              width={1500}
              height={1500}
              className={`[grid-area:logo] w-auto self-center object-contain object-left transition-opacity duration-200 ${LOGO_SMALL_HEIGHT_CLASS} ${
                compact ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link 
            href="/projekt" 
            className="text-stone-900 hover:text-yellow-500 transition-colors duration-200 font-semibold"
          >
            Nasz projekt
          </Link>
          <Link 
            href="/#team" 
            onClick={(e) => {
              const element = document.getElementById("team");
              if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: "smooth" });
                // Update URL without jumping
                window.history.pushState(null, "", "/#team");
              }
            }}
            className="text-stone-900 hover:text-yellow-500 transition-colors duration-200 font-semibold"
          >
            Nasz Zespół
          </Link>
          <Link 
            href="/#filmik" 
            onClick={(e) => {
              const element = document.getElementById("filmik");
              if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: "smooth" });
                // Update URL without jumping
                window.history.pushState(null, "", "/#filmik");
              }
            }}
            className="text-stone-900 hover:text-yellow-500 transition-colors duration-200 font-semibold"
          >
            Film
          </Link>
        </div>
      </div>
    </header>
  );
}
