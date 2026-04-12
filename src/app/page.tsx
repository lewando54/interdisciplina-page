import { Clock } from "@/components/Clock";
import { HackathonHero } from "@/components/HackathonHero";
import { TeamSection } from "@/components/TeamSection";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center bg-gradient-to-b from-stone-50 via-orange-50/35 to-stone-100/90">
      <main className="flex w-full flex-1 flex-col items-center">
        <HackathonHero />
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
              <source src="/filmik.mp4" type="video/mp4" />
              Twoja przeglądarka nie obsługuje odtwarzacza wideo.
            </video>
          </div>
        </section>
        <Clock date="2026-04-24T16:00:00" />
      </main>
    </div>
  );
}
