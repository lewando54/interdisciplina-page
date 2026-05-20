import { Metadata } from "next";
import { ProjectStageCard } from "@/components/ProjectStageCard";
import Link from "next/link";
import { MainStatsChart, RiskFactorsChart, SourcesOfStressChart } from "@/components/ProjectChartsDynamic";
import { FadeIn } from "@/components/FadeIn";
import { 
  Activity, 
  ClipboardList, 
  ShieldCheck, 
  Shield, 
  Lock, 
  EyeOff, 
  Building2, 
  User, 
  Database, 
  Stethoscope,
  ArrowRight,
  ArrowDown
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nasz Projekt | Interdisciplina",
  description: "ZOO: System wczesnego wykrywania ryzyka wypalenia w ośrodkach badań klinicznych",
};

const SOURCE_LINK_CLASS = "font-semibold text-orange-600 underline decoration-orange-300 underline-offset-4 transition-colors hover:text-orange-700";

const REFERENCE_CARDS = [
  {
    title: "Audit trail i praca po godzinach",
    description: "Arndt i wsp. pokazali, że logi zdarzeń EHR pozwalają mierzyć realne obciążenie lekarzy, w tym pracę po godzinach.",
    href: "https://pubmed.ncbi.nlm.nih.gov/28893811/",
    label: "Arndt et al. 2017",
  },
  {
    title: "Metadane EHR a wyczerpanie",
    description: "Melnick i wsp. powiązali czas pracy w EHR po godzinach oraz wolumen wiadomości z wysokim wyczerpaniem emocjonalnym.",
    href: "https://pubmed.ncbi.nlm.nih.gov/32016375/",
    label: "Melnick et al. 2020",
  },
  {
    title: "Predykcja ryzyka z danych systemowych",
    description: "Nowsze modele z rutynowych miar EHR mają ograniczoną trafność indywidualną, ale mogą wskazywać placówki wysokiego ryzyka.",
    href: "https://pubmed.ncbi.nlm.nih.gov/38573301/",
    label: "Tawfik et al. 2024",
  },
  {
    title: "Wypalenie w badaniach klinicznych",
    description: "Badanie włoskie opisuje stres i wypalenie wśród osób pracujących przy badaniach klinicznych, nie tylko wśród lekarzy.",
    href: "https://doi.org/10.1186/s13063-021-05158-z",
    label: "Cagnazzo et al. 2021",
  },
  {
    title: "Czynniki ryzyka w ochronie zdrowia",
    description: "Globalny przegląd systematyczny i metaanaliza porządkują zawodowe czynniki ryzyka wypalenia wśród pracowników ochrony zdrowia.",
    href: "https://doi.org/10.3390/ijerph21121583",
    label: "IJERPH 2024",
  },
  {
    title: "Kwestionariusze OLBI i BAT-PL",
    description: "Polska walidacja OLBI oraz polska wersja BAT/BAT-12 dają podstawę do krótkiego, standaryzowanego screeningu dobrostanu.",
    href: "https://medpr.imp.lodz.pl/Psychometryczne-wlasciwosci-polskiej-wersji-Oldenburskiego-Kwestionariusza-nWypalenia-Zawodowego-OLBI-,60320,0,1.html",
    label: "OLBI / BAT-PL",
  },
];

function SourceLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={SOURCE_LINK_CLASS}>
      {children}
    </a>
  );
}

export default function ProjektPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center bg-stone-50 pb-20">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden bg-stone-950 py-20 sm:py-32">
        {/* Subtle background dots */}
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        {/* Subtle gradient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-500/15 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-400/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              ZDALNA OCENA OBCIĄŻENIA (ZOO)
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl sm:text-2xl text-stone-300 mb-8 max-w-3xl mx-auto font-medium">
              System wczesnego wykrywania ryzyka wypalenia i schemat interwencji sponsora
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
              Dyskretny system pokazujący ryzyko przeciążenia na poziomie zespołu lub ośrodka badań klinicznych. 
              Nie oceniamy pojedynczych pracowników — chronimy całe struktury przed wypaleniem, zapewniając ich stabilność.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-4">Skąd bierze się wypalenie zawodowe?</h2>
              <p className="text-lg text-stone-600">Nie możemy udawać, że to kwestia przypadku. To problem strukturalny.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <FadeIn direction="up" delay={0.1} className="md:col-span-2">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-stone-100 h-full">
                <h3 className="text-xl font-bold text-stone-800 mb-6 border-b border-stone-100 pb-4">Stan pracowników</h3>
                <MainStatsChart />
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-stone-100 h-full">
                <h3 className="text-xl font-bold text-stone-800 mb-6 border-b border-stone-100 pb-4">Główne źródła stresu</h3>
                <SourcesOfStressChart />
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-stone-100 h-full">
                <h3 className="text-xl font-bold text-stone-800 mb-6 border-b border-stone-100 pb-4">Czynniki ryzyka wypalenia</h3>
                <RiskFactorsChart />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Context / Diagram Section */}
      <section className="w-full bg-stone-900 text-stone-50 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Wąskie gardło badań klinicznych</h2>
              <p className="text-lg text-stone-300 max-w-2xl mx-auto">
                Sponsorzy nie widzą przeciążenia, dopóki ośrodek nie zacznie popełniać błędów w danych lub przestanie rekrutować pacjentów.
              </p>
            </div>
          </FadeIn>

          {/* Simple Flow Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
            <FadeIn direction="up" delay={0.1} className="w-full">
              <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700 w-full text-center flex flex-col items-center">
                <Building2 className="w-8 h-8 text-stone-400 mb-3" />
                <span className="block text-stone-400 text-sm font-bold uppercase tracking-wider mb-2">Finansowanie & Strategia</span>
                <strong className="text-xl text-white">Sponsor Badania</strong>
              </div>
            </FadeIn>
            <FadeIn direction="none" delay={0.2} className="text-stone-500">
              <ArrowDown className="w-6 h-6 md:hidden" />
              <ArrowRight className="w-6 h-6 hidden md:block" />
            </FadeIn>
            <FadeIn direction="up" delay={0.3} className="w-full">
              <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700 w-full text-center flex flex-col items-center">
                <User className="w-8 h-8 text-stone-400 mb-3" />
                <span className="block text-stone-400 text-sm font-bold uppercase tracking-wider mb-2">Koordynacja & Monitoring</span>
                <strong className="text-xl text-white">Monitor / CRO</strong>
              </div>
            </FadeIn>
            <FadeIn direction="none" delay={0.4} className="text-stone-500">
              <ArrowDown className="w-6 h-6 md:hidden" />
              <ArrowRight className="w-6 h-6 hidden md:block" />
            </FadeIn>
            <FadeIn direction="up" delay={0.5} className="w-full">
              <div className="bg-yellow-500/20 p-6 rounded-2xl border border-yellow-500/50 w-full text-center relative flex flex-col items-center">
                <Stethoscope className="w-8 h-8 text-yellow-500 mb-3" />
                <span className="absolute -top-3 -right-3 flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-yellow-500"></span>
                </span>
                <span className="block text-yellow-500 text-sm font-bold uppercase tracking-wider mb-2">Nasze miejsce</span>
                <strong className="text-xl text-white">Ośrodki Badawcze</strong>
              </div>
            </FadeIn>
            <FadeIn direction="none" delay={0.6} className="text-stone-500">
              <ArrowDown className="w-6 h-6 md:hidden" />
              <ArrowRight className="w-6 h-6 hidden md:block" />
            </FadeIn>
            <FadeIn direction="up" delay={0.7} className="w-full">
              <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700 w-full text-center flex flex-col items-center">
                <Database className="w-8 h-8 text-stone-400 mb-3" />
                <span className="block text-stone-400 text-sm font-bold uppercase tracking-wider mb-2">Cel ostateczny</span>
                <strong className="text-xl text-white">Pacjent & Dane</strong>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3 Stages Section */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-4">Model Trzyetapowy</h2>
              <p className="text-lg text-stone-600">Rozwiązanie zaprojektowane z myślą o dyskrecji i skuteczności.</p>
            </div>
          </FadeIn>

          <div className="grid gap-8">
            <ProjectStageCard 
              stage="Etap I"
              title="Obserwacja i Telemetria"
              icon={<Activity className="w-6 h-6 text-blue-600" />}
              colorClass="border-blue-400"
              delay={0.1}
              description={
                <div className="space-y-3">
                  <p>Dyskretny program działający w tle, niewymagający interakcji użytkownika. Zbieramy parametry pracy komputerowej połączone z opóźnieniami w realizacji zadań, takimi jak wprowadzanie wyników po godzinach, nagłe wydłużenie sesji czy weekendowe „zrywy” uzupełniania danych.</p>
                  <p>
                    Ten kierunek ma podstawę w badaniach nad EHR: logi zdarzeń pozwalały mierzyć realny czas pracy lekarzy, w tym „pajama time” po godzinach (
                    <SourceLink href="https://pubmed.ncbi.nlm.nih.gov/28893811/">Arndt et al., 2017</SourceLink>
                    ), a metadane EHR były powiązane z wyczerpaniem emocjonalnym (
                    <SourceLink href="https://pubmed.ncbi.nlm.nih.gov/32016375/">Melnick et al., 2020</SourceLink>
                    ).
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-stone-600">
                    <li>Ryzyko liczone na poziomie ośrodka, nie pojedynczej osoby.</li>
                    <li>Sygnały: Pajama Time Index, batching behavior, login latency, task switching frequency i query re-opening rate.</li>
                    <li>Pełna anonimizacja – dane obrazują funkcjonowanie całego zespołu, nie konkretnej osoby.</li>
                    <li>Przekroczenie progu przez ośrodek wysyła alert do centrali i uruchamia Etap II.</li>
                  </ul>
                </div>
              }
            />

            <ProjectStageCard 
              stage="Etap II"
              title="Ankietowanie Dobrostanu"
              icon={<ClipboardList className="w-6 h-6 text-yellow-600" />}
              colorClass="border-yellow-400"
              delay={0.2}
              description={
                <div className="space-y-3">
                  <p>
                    Aktywowane automatycznie w ośrodkach z przekroczonym progiem z Etapu I. Aby uniknąć stygmatyzacji, ankiety są również wysyłane losowo jako badanie kontrolne (nie częściej niż raz na 18 miesięcy). Screening opieramy na narzędziach z polskim zapleczem psychometrycznym:{" "}
                    <SourceLink href="https://medpr.imp.lodz.pl/Psychometryczne-wlasciwosci-polskiej-wersji-Oldenburskiego-Kwestionariusza-nWypalenia-Zawodowego-OLBI-,60320,0,1.html">OLBI</SourceLink>
                    {" "}oraz{" "}
                    <SourceLink href="https://burnoutassessmenttool.be/wp-content/uploads/2020/08/BAT-Pollish.pdf">BAT-PL/BAT-12</SourceLink>
                    .
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-stone-600">
                    <li>Krótka ankieta blokująca logowanie do systemu, oparta na zwalidowanych kwestionariuszach psychologicznych.</li>
                    <li>Czas poświęcony na wypełnienie jest wliczony w godziny pracy.</li>
                    <li>Wynik w normie: fałszywy alarm. Wynik alarmujący: automatyczne przejście do Etapu III.</li>
                  </ul>
                </div>
              }
            />

            <ProjectStageCard 
              stage="Etap III"
              title="Czynnik Ludzki i Interwencja"
              icon={<ShieldCheck className="w-6 h-6 text-green-600" />}
              colorClass="border-green-400"
              delay={0.3}
              description={
                <div className="space-y-3">
                  <p>Ten etap nie jest już systemem – to wkroczenie człowieka. Wyznaczony Koordynator ds. Zdrowia Psychicznego (Wellbeing Manager) z dostępem do danych wrażliwych podejmuje interwencję opartą na twardych danych.</p>
                  <ul className="list-disc pl-5 space-y-1 text-stone-600">
                    <li>Opcjonalny, pogłębiony wywiad z pracownikami przeprowadzony przez koordynatora.</li>
                    <li>Warsztaty, szkolenia (np. zarządzanie stresem) oraz spotkania integracyjne.</li>
                    <li>Analiza zgłoszonych trudności i wdrożenie rozwiązań operacyjnych. Zwiększenie kadr w przypadku ewidentnego przeciążenia.</li>
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Scientific Basis Section */}
      <section className="w-full bg-stone-100 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn direction="up">
            <div className="mb-12 max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-widest text-orange-500">Podstawa naukowa</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">Dlaczego szukamy sygnałów w danych systemowych?</h2>
              <p className="mt-4 text-lg text-stone-600 leading-relaxed">
                ZOO nie diagnozuje wypalenia automatycznie. Traktuje audit trail, telemetrię i opóźnienia operacyjne jako wczesne wskaźniki przeciążenia, które następnie są weryfikowane zwalidowaną ankietą i rozmową z człowiekiem.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2">
            {REFERENCE_CARDS.map((reference, i) => (
              <FadeIn key={reference.href} direction="up" delay={0.1 * (i % 3)}>
                <a
                  href={reference.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400">{reference.label}</span>
                  <h3 className="mt-3 text-lg font-bold text-stone-900 group-hover:text-orange-600">{reference.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{reference.description}</p>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.4}>
            <p className="mt-8 text-sm leading-relaxed text-stone-500">
              W systemach używanych w badaniach klinicznych, takich jak EDC, eTMF czy IVRS, ścieżka audytu jest równocześnie naturalnym źródłem metadanych i elementem zgodności regulacyjnej, m.in. z{" "}
              <SourceLink href="https://www.fda.gov/media/169688/download">FDA 21 CFR Part 11</SourceLink>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Privacy and Cost Section */}
      <section className="w-full bg-white border-y border-stone-200 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12">
          <FadeIn direction="up">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-orange-500" />
              Prywatność przede wszystkim
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <div className="flex gap-4">
                <Building2 className="w-6 h-6 text-stone-400 shrink-0" />
                <p>Zanim system zostanie wdrożony, wymagany jest <strong>pilotaż w wielu ośrodkach</strong> w celu ustalenia norm.</p>
              </div>
              <div className="flex gap-4">
                <Lock className="w-6 h-6 text-stone-400 shrink-0" />
                <p>Dane gromadzone w Etapie I są <strong>w pełni zaszyfrowane i zanonimizowane</strong>. Nadzorca może generować raporty w celu identyfikacji odchyleń od średniej (tzw. outliers), jednak system pokazuje jedynie statystyki dla poszczególnych ośrodków jako całości.</p>
              </div>
              <div className="flex gap-4">
                <EyeOff className="w-6 h-6 text-stone-400 shrink-0" />
                <p>Dodatkowo system posiada mechanizm kontrolny: wstrzymuje zbieranie danych po ustalonym czasie bezczynności (np. 5 minut), co sprzyja odpoczynkowi i zapewnia rzetelność telemetrii.</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 h-full">
              <h2 className="text-2xl font-bold tracking-tight text-stone-900 mb-2">Budżet i Zwrot z Inwestycji</h2>
              <p className="text-stone-500 mb-6">Koszt całkowity utworzenia trójetapowego systemu</p>
              <div className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-6">
                1,4 - 1,8 <span className="text-2xl text-stone-400">mln zł</span>
              </div>
              <p className="text-stone-700 font-medium">
                Ochrona zaledwie 2-3 wysokiej klasy specjalistów przed odejściem i wypaleniem zawodowym pozwala na pełny zwrot tej inwestycji.
              </p>
              <p className="text-stone-500 mt-4 text-sm">
                Mniej błędów w danych źródłowych, mniej naruszeń protokołu. Mniejsza rotacja oznacza zgrany zespół osiągający cele.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-16 sm:py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-6">To nie jest projekt o wellbeingu.</h2>
            <p className="text-xl text-stone-600 mb-10 leading-relaxed">
              To projekt o jakości badań klinicznych, na którą składa się coś więcej niż tylko sztywne tabelki, a przede wszystkim o osobach, które nimi zarządzają. Zamiast reagować na kryzys — <strong>dostarczamy twardych danych, zanim on nastąpi.</strong>
            </p>
            <Link 
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-stone-700"
            >
              Powrót na stronę główną
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
