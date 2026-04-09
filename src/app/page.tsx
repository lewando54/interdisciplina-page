import { HackathonHero } from "@/components/HackathonHero";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex w-full flex-1 flex-col items-center bg-white dark:bg-zinc-950">
        <HackathonHero />
      </main>
    </div>
  );
}
