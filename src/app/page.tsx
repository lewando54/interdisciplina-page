import { HackathonHero } from "@/components/HackathonHero";
import { TeamSection } from "@/components/TeamSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center bg-gradient-to-b from-stone-50 via-orange-50/35 to-stone-100/90">
      <main className="flex w-full flex-1 flex-col items-center">
        <HackathonHero />
        
        {/* Project CTA Section */}
        <section className="w-full max-w-4xl px-6 py-12 flex flex-col items-center text-center">
          <div className="bg-white/60 backdrop-blur-sm p-8 sm:p-12 rounded-3xl shadow-sm border border-orange-100 w-full relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-4 relative z-10">
              ZDALNA OCENA OBCIĄŻENIA (ZOO)
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto relative z-10">
              Nasz system wczesnego wykrywania ryzyka wypalenia i schemat interwencji sponsora. Poznaj szczegóły rozwiązania, które chroni zespoły badawcze i jakość badań klinicznych.
            </p>
            <Link 
              href="/projekt"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-600 shadow-md hover:shadow-lg relative z-10"
            >
              Zobacz szczegóły projektu
            </Link>
          </div>
        </section>

        <TeamSection />
        <section className="w-full max-w-4xl px-6 py-16 flex flex-col items-center" id="filmik">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Nasz Film
          </h2>
          <div className="w-full overflow-hidden rounded-2xl shadow-lg">
            <video 
              className="w-full h-auto" 
              controls 
              preload="metadata"
            >
              <source src="filmik.mp4" type="video/mp4" />
              Twoja przeglądarka nie obsługuje odtwarzacza wideo.
            </video>
          </div>
        </section>
      </main>
    </div>
  );
}
