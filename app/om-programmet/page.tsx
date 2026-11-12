import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Om programmet – IMO Oslo",
  description:
    "Slik er informasjonsteknologi og medieproduksjon bygd opp – fra Vg1 og Vg2 på skolen til læretid og fagbrev.",
};

/* Fag og timetall: vilbli.no (gjeldende læreplaner). */

const vg1 = {
  programfag: [
    {
      name: "Konseptutvikling og programmering",
      text: "Fra idé til løsning – du planlegger, koder og tester.",
    },
    {
      name: "Produksjon og historiefortelling",
      text: "Foto, video, lyd og design som forteller noe.",
    },
    {
      name: "Teknologiforståelse",
      text: "Maskinvare, nettverk og hvordan teknologien påvirker samfunnet.",
    },
  ],
  fellesfag: "engelsk, matematikk, naturfag og kroppsøving",
};

const vg2 = [
  {
    title: "Informasjonsteknologi",
    accent: "from-cyan-400 to-blue-500",
    glow: "bg-cyan-500/15",
    text: "Du lærer å bygge, drifte og sikre IT-systemer – og å hjelpe folk som bruker dem.",
    programfag: ["Brukerstøtte", "Driftsstøtte", "Utvikling"],
  },
  {
    title: "Medieproduksjon",
    accent: "from-fuchsia-400 to-orange-400",
    glow: "bg-fuchsia-500/15",
    text: "Du lærer å lage innhold og brukeropplevelser – fra første idé til ferdig produkt.",
    programfag: [
      "Design og visualisering",
      "Konseptutvikling og kommunikasjon",
      "Teknologi og produksjon",
    ],
  },
];

const tracks = [
  {
    id: "yrkesfaglig",
    label: "Yrkesfaglig løp",
    title: "2 år på skole + 2 år i lære",
    length: "4 år",
    result: "Fagbrev",
    where: "Tilbys på Bjørnholt, Elvebakken, Fyrstikkalleen og Kuben.",
  },
  {
    id: "studiekompetanse",
    label: "Studieforberedende løp",
    title: "3 år på skole",
    length: "3 år",
    result: "Generell studiekompetanse",
    where: "Tilbys på Elvebakken og Kuben.",
  },
];

/** Skoler med treårig IM-løp med studiekompetanse (kilder: vilbli.no, kuben.vgs.no). */
const studyTrack = [
  {
    name: "Elvebakken videregående skole",
    short: "Elvebakken",
    url: "https://elvebakken.vgs.no/",
    options: [
      { name: "Informasjonsteknologi, studiekompetanse", text: "" },
      { name: "Medieproduksjon, studiekompetanse", text: "" },
    ],
  },
  {
    name: "Kuben videregående skole",
    short: "Kuben",
    url: "https://kuben.vgs.no/",
    options: [
      { name: "Informatikklinja", text: "Studiekompetanse med programmering og IT-systemer" },
      { name: "Medielinja", text: "Studiekompetanse med multimedieproduksjon og webdesign" },
    ],
  },
];

const fit = [
  "Du liker å finne ut hvordan ting fungerer",
  "Du lager video, tar bilder eller tegner på fritiden",
  "Du har lyst til å kode, eller allerede gjør det",
  "Du er den vennene spør når PC-en tuller",
  "Du lærer best når du får prøve selv",
  "Du vil ut i jobb – men ikke stenge døra for studier",
];

export default function OmProgrammet() {
  return (
    <>
      <PageHero
        eyebrow="// Om programmet"
        title={
          <>
            Hva er <span className="text-gradient">IM</span>?
          </>
        }
        lead="Informasjonsteknologi og medieproduksjon handler om teknologi, design og historiefortelling. Du kan ta programmet som et yrkesfaglig løp som ender med fagbrev, eller som et treårig løp med studiekompetanse."
      >
        <Link href="/skoler" className="btn-primary">
          Finn skole →
        </Link>
        <Link href="/fag" className="btn-ghost">
          Se fagene
        </Link>
      </PageHero>

      {/* ───────── To løp ───────── */}
      <section className="container-page py-20 sm:py-24">
        <p className="eyebrow mb-4">{"// To løp"}</p>
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Fagbrev eller studiekompetanse
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tracks.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="card group flex flex-col p-6 transition hover:-translate-y-1 hover:border-white/25 sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">{t.label}</p>
              <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{t.title}</h3>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-zinc-500">Varighet</dt>
                  <dd className="mt-1 text-sm text-zinc-200">{t.length}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-zinc-500">Du ender med</dt>
                  <dd className="mt-1 text-sm text-zinc-200">{t.result}</dd>
                </div>
              </dl>
              <p className="mt-6 flex-1 text-sm text-zinc-400">{t.where}</p>
              <span className="mt-6 font-mono text-sm text-cyan-300 transition group-hover:text-cyan-200">
                Les mer ↓
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ───────── År for år ───────── */}
      <section
        id="yrkesfaglig"
        className="scroll-mt-20 border-y border-white/10 bg-ink-900/60 py-20 sm:py-24"
      >
        <div className="container-page">
          <p className="eyebrow mb-4">{"// Yrkesfaglig løp"}</p>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Fra Vg1 til fagbrev, år for år
          </h2>

          <ol className="relative ml-6 mt-14 space-y-14 border-l border-white/10 pl-8 sm:pl-12">
            {/* Vg1 */}
            <li className="relative">
              <Marker label="Vg1" />
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Felles første år
              </h3>
              <p className="mt-3 max-w-2xl text-zinc-400">
                Alle starter med det samme. Du prøver både IT og medier, og
                finner ut hva du liker best.
              </p>
              <ul className="mt-8 grid gap-4 md:grid-cols-3">
                {vg1.programfag.map((f) => (
                  <li key={f.name} className="card p-6">
                    <h4 className="font-display text-lg font-semibold">{f.name}</h4>
                    <p className="mt-2 text-sm text-zinc-400">{f.text}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-zinc-500">
                I tillegg har du fellesfagene {vg1.fellesfag}.
              </p>
            </li>

            {/* Vg2 */}
            <li className="relative">
              <Marker label="Vg2" />
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Du velger retning
              </h3>
              <p className="mt-3 max-w-2xl text-zinc-400">
                På Vg2 går du dypere inn i én av to retninger.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {vg2.map((t) => (
                  <article key={t.title} className="card relative overflow-hidden p-6 sm:p-8">
                    <div
                      className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full ${t.glow} blur-3xl`}
                    />
                    <span
                      className={`inline-block h-1 w-12 rounded-full bg-gradient-to-r ${t.accent}`}
                    />
                    <h4 className="mt-5 font-display text-xl font-bold sm:text-2xl">{t.title}</h4>
                    <p className="mt-2 text-sm text-zinc-400">{t.text}</p>
                    <p className="mt-6 font-mono text-xs uppercase tracking-wider text-zinc-500">
                      Programfag
                    </p>
                    <ul className="mt-3 space-y-2">
                      {t.programfag.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-zinc-200">
                          <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${t.accent}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-sm text-zinc-500">
                I tillegg har du fellesfagene norsk, samfunnskunnskap og kroppsøving.
              </p>
            </li>

            {/* Lære */}
            <li className="relative">
              <Marker label="2 år" />
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Læretid i bedrift
              </h3>
              <p className="mt-3 max-w-2xl text-zinc-400">
                Du er ansatt som lærling, får lønn og lærer ved å jobbe med
                ekte oppgaver sammen med erfarne fagfolk.
              </p>
            </li>

            {/* Fagbrev */}
            <li className="relative">
              <Marker label="Mål" highlight />
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Fagprøve og <span className="text-gradient">fagbrev</span>
              </h3>
              <p className="mt-3 max-w-2xl text-zinc-400">
                Til slutt viser du hva du kan på fagprøven. Består du, får du
                fagbrev – og er klar for jobb eller videre utdanning.
              </p>
              <Link
                href="/fag"
                className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-cyan-300 transition hover:text-cyan-200"
              >
                Se hvilke fagbrev du kan ta →
              </Link>
            </li>
          </ol>
        </div>
      </section>

      {/* ───────── Studieforberedende løp ───────── */}
      <section id="studiekompetanse" className="container-page scroll-mt-20 py-20 sm:py-24">
        <p className="eyebrow mb-4">{"// Studieforberedende løp"}</p>
        <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Tre år med IM og studiekompetanse
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-zinc-400">
          <p>
            Her kombinerer du IM-fag med fellesfagene som gir generell
            studiekompetanse. Du går alle tre årene på skolen, og kan søke
            høyere utdanning rett etterpå – uten påbygging.
          </p>
          <p>
            Løpet passer for deg som liker IT eller medier, men vet at du vil
            studere videre. Skolene har litt ulike navn på løpene – sjekk
            nettsidene deres for detaljer.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {studyTrack.map((school) => (
            <li key={school.name} className="card flex flex-col p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">{school.name}</h3>
              <ul className="mt-5 flex-1 space-y-3 border-t border-white/10 pt-5">
                {school.options.map((o) => (
                  <li key={o.name}>
                    <p className="text-sm font-medium text-zinc-200">{o.name}</p>
                    {o.text && <p className="mt-0.5 text-sm text-zinc-400">{o.text}</p>}
                  </li>
                ))}
              </ul>
              <a
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 self-start font-mono text-sm text-cyan-300 transition hover:text-cyan-200"
              >
                Les mer hos {school.short}
                <span aria-hidden>↗</span>
                <span className="sr-only">(åpnes i ny fane)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ───────── Yrkesfaglig fordypning ───────── */}
      <section className="border-t border-white/10">
        <div className="container-page grid gap-10 py-20 sm:py-24 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4">{"// Yrkesfaglig fordypning"}</p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Prøv deg i arbeidslivet allerede på skolen
            </h2>
          </div>
          <div className="space-y-4 text-zinc-400">
            <p>
              I det yrkesfaglige løpet har du yrkesfaglig fordypning på både
              Vg1 og Vg2. Det er timer
              der du kan gå dypere inn i det du er mest interessert i – ofte
              ute i en bedrift.
            </p>
            <p>
              Det er en fin måte å finne ut hva du vil jobbe med, og å bli
              kjent med bedrifter som kan bli lærestedet ditt.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Passer for deg ───────── */}
      <section className="border-t border-white/10 bg-ink-900/60 py-20 sm:py-24">
        <div className="container-page">
          <p className="eyebrow mb-4">{"// Er IM noe for deg?"}</p>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            IM kan passe hvis …
          </h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fit.map((f) => (
              <li key={f} className="card flex items-start gap-3 p-5 text-zinc-200">
                <span className="mt-0.5 font-mono text-lime-300">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="card mt-12 flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-bold">Vil du studere etter fagbrevet?</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Med påbygging til generell studiekompetanse kan du søke
                høyere utdanning også etter det yrkesfaglige løpet.
              </p>
            </div>
            <Link href="/videre-utdanning" className="btn-ghost shrink-0">
              Videre utdanning →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/** Markør på tidslinjen. */
function Marker({ label, highlight = false }: { label: string; highlight?: boolean }) {
  return (
    <span
      className={`absolute -left-8 top-0 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border font-mono text-xs font-bold sm:-left-12 ${
        highlight
          ? "border-transparent bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-ink-950"
          : "border-white/20 bg-ink-950 text-white"
      }`}
    >
      {label}
    </span>
  );
}
