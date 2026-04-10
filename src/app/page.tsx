import { HackathonHero } from "@/components/HackathonHero";
import { TeamSection } from "@/components/TeamSection";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center bg-gradient-to-b from-stone-50 via-orange-50/35 to-stone-100/90">
      <main className="flex w-full flex-1 flex-col items-center">
        <HackathonHero />
        <TeamSection />
      </main>
    </div>
  );
}
