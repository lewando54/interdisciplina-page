"use client";

import Image from "next/image";
import { HexagonIcon } from "./HexagonIcon";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Agata Budny-Lewandowska",
    image: "osoby/agata.jpg",
    color: "border-[#e4aad9]",
    hexColor: "#e4aad9",
    hexX: 48,
    hexY: 194,
    description:
      "Jestem studentką II stopnia biotechnologii medycznej na Uniwersytecie Medycznym w Łodzi. Należę do Studenckiego Koła Naukowego przy Zakładzie Biologii Molekularnej oraz Zakładu Biostatystyki i Medycyny Translacyjnej Uniwersytetu Medycznego w Łodzi. Mam za sobą doświadczenie zawodowe w komercyjnych laboratoriach takich jak Orlen S.A. i Molecure S.A. Jestem współautorką publikacji dotyczącej terapii CRISPR-Cas9 we wczesnym rozwoju klinicznym.",
  },
  {
    name: "Gabriela Rosiak",
    image: "osoby/gabrysia.jpeg",
    color: "border-[#95dde1]",
    hexColor: "#95dde1",
    hexX: 304,
    hexY: 44,
    description:
      "Jestem studentką IV roku kierunku lekarskiego na Uniwersytecie Medycznym w Łodzi. Obecnie współtworzę publikację dotyczącą markerów w płynie torbieli trzustki w ramach Studenckiego Koła Naukowego przy Klinice Chorób Przewodu Pokarmowego UM w Łodzi. Działam również aktywnie w Studenckim Kole Naukowym Pneumonologii UM w Łodzi. Od niedawna jestem ambasadorką DKMS x UMED Łódź. Prywatnie jestem wielbicielką twórczości Agathy Christie i w wolnym czasie rozwijam swoją pasję do tańca towarzyskiego.",
  },
  {
    name: "Marta Sztuka",
    image: "osoby/marta.jpeg",
    color: "border-[#abc4a5]",
    hexColor: "#abc4a5",
    hexX: 554,
    hexY: 194,
    description:
      "Realizuję I rok II stopnia na kierunku biotechnologia medyczna na Uniwersytecie Medycznym w Łodzi. Doświadczenie zawodowe zdobywam przez aktywny udział w działaniach SKN Let’s Talk Science!, którego zarząd współtworzę. W ramach Koła aktywnie popularyzuję naukę wewnątrz oraz poza Uczelnią poprzez prowadzenie warsztatów tematycznych jak i mediów społecznościowych. Odbyłam praktyki w Instytucie Chemii Bioorganicznej PAN w Poznaniu, co bardzo rozwinęło moje zdolności biotechnologiczne i pozwoliło szerzej spojrzeć na naukę. Stawiam pierwsze kroki w działalności naukowej uczestnicząc w konferencji 34th international medical students’ conference prezentując pracę przeglądową w zakresie terapii wspomaganej w chorobach neurodegeneracyjnych.. Interesuję się immunologią, a także procesami poznawczymi w szerokim ujęciu neurobiologicznym. Działam aktywistycznie w strukturach Samorządu Studenckiego UM oraz prywatnie wolontariacko na rzecz samotnych seniorów w Stowarzyszeniu mali bracia Ubogich pełniąc rolę lidera wolontariatu.",
  },
  {
    name: "Jakub Kwasiborski",
    image: "osoby/kuba_k.jpeg",
    color: "border-[#ffc9a7]",
    hexColor: "#ffc9a7",
    hexX: 304,
    hexY: 346,
    description:
      "Jestem studentem I roku, II stopnia na kierunku Biotechnologia medyczna na Uniwersytecie Medycznym w Łodzi. Moje zainteresowania naukowe koncentrują się na wpływie związków naturalnych na komórki i organizm człowieka, szczególnie w kontekście ich potencjalnych efektów terapeutycznych. Działam w kole naukowym Let's Talk Science przy Zakładzie Mikrobiologii, Genetyki i Immunologii Doświadczalnej, którego jestem sekretarzem oraz jestem w trakcie przygotowywania publikacji naukowych. Swoje umiejętności rozwijam również praktycznie, odbywając ponadprogramowe praktyki w laboratorium komercyjnym Orlen S.A.",
  },
  {
    name: "Dominika Przybylska",
    image: "osoby/dominika.jpg",
    color: "border-[#b47bd1]",
    hexColor: "#b47bd1",
    hexX: 48,
    hexY: 491,
    description:
      "Jestem studentką kognitywistyki Uniwersytetu im. Adama Mickiewicza w Poznaniu. Pełnię rolę asystentki badawczej w Laboratory of Everyday Argumentation and Persuasion działającym na Wydziale Psychologii i Kognitywistyki UAM. Aktywnie uczestniczę w wielu wydarzeniach i inicjatywach studenckich, m.in. organizacji Poznańskiego Forum Kognitywistycznego jak i innych konferencji WPiK, a także biorę udział w szkoleniach i kursach w tematyce zdrowia psychicznego, komunikacji i wystąpień publicznych. W mojej pracy stawiam na łączenie wiedzy z różnych dziedzin i współpracę z innymi, by móc rozwiązywać problemy kompleksowo i rozumieć ich istotę poprzez szersze spojrzenie. Szczególną uwagę przykładam do neurokognitywistyki społecznej, komunikacji w ujęciu językoznawstwa kognitywnego oraz działań z zakresu User Expierience stron internetowych i aplikacji.",
  },
  {
    name: "Jakub Lewandowski-Budny",
    image: "osoby/kuba_lb.png",
    color: "border-[#ddcf97]",
    hexColor: "#ddcf97",
    hexX: 304,
    hexY: 647,
    description:
      "Jestem studentem IV roku informatyki na Politechnice Łódzkiej, wkrótce kończącym studia z tytułem inżyniera. Swoją ścieżkę w branży IT rozpocząłem jako absolwent technikum informatycznego w Brodnicy. Obecnie pracuję na stanowisku inżyniera oprogramowania w firmie Hargreaves Lansdown, gdzie współtworzę i rozwijam aplikację do inwestowania. Posiadam czteroletnie doświadczenie komercyjne w technologiach React oraz React Native. Swoje umiejętności programistyczne z powodzeniem wykorzystywałem również w innych projektach, współtworząc aplikację do nauki języków obcych „Lingappka” oraz aplikację lojalnościową „Mój Świat Książki”.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="w-full py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl"
        >
          Nasz Zespół
        </motion.h2>
        <div className="flex flex-col space-y-12">
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 1; // 0-indexed, so index 1 is the 2nd person (even)
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col items-center gap-8 rounded-2xl p-8 md:flex-row transition-all duration-300 ${
                  isEven ? "bg-orange-50/50 shadow-sm" : "bg-transparent"
                } ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex flex-col items-center gap-4 md:w-1/3">
                  <div className="relative group">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`relative h-48 w-48 overflow-hidden rounded-full border-4 ${member.color} shadow-md`}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </motion.div>
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                      className="absolute bottom-2 right-2 h-14 w-14 translate-x-2 translate-y-2 flex items-center justify-center"
                    >
                      <HexagonIcon x={member.hexX} y={member.hexY} />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 text-center">
                    {member.name}
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-justify text-base leading-relaxed text-stone-700">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
