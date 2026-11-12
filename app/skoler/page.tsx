import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Skoler i Oslo – IMO Oslo",
  description:
    "De offentlige videregående skolene i Oslo som tilbyr informasjonsteknologi og medieproduksjon.",
};

type School = {
  name: string;
  /** Kort navn brukt i monogrammet og lenketeksten. */
  short: string;
  url: string;
  /** Har skolen også det treårige løpet med studiekompetanse? */
  studyTrack: boolean;
};

/**
 * Skolene som tilbyr IM i Osloskolen (kilde: vgs.osloskolen.no).
 * Listen sorteres alfabetisk i koden, og alle skolene vises med samme kort.
 */
const schools: School[] = [
  { name: "Bjørnholt videregående skole", short: "Bjørnholt", url: "https://bjornholt.vgs.no/", studyTrack: false },
  { name: "Elvebakken videregående skole", short: "Elvebakken", url: "https://elvebakken.vgs.no/", studyTrack: true },
  { name: "Fyrstikkalleen skole", short: "Fyrstikkalleen", url: "https://f21.vgs.no/", studyTrack: false },
  { name: "Kuben videregående skole", short: "Kuben", url: "https://kuben.vgs.no/", studyTrack: true },
].sort((a, b) => a.short.localeCompare(b.short, "nb"));

const tips = [
  {
    step: "01",
    title: "Besøk skolene",
    text: "Gå på åpen dag eller hospiter, og se hvordan det er å gå der.",
  },
  {
    step: "02",
    title: "Tenk på reiseveien",
    text: "Du skal dit hver dag, så det lønner seg å sjekke hvor lang tid det tar.",
  },
  {
    step: "03",
    title: "Snakk med elever",
    text: "Spør dem som går der nå om miljø, utstyr og prosjekter.",
  },
  {
    step: "04",
    title: "Søk på vigo.no",
    text: "Du søker videregående gjennom vigo.no. Sjekk søknadsfristen der.",
  },
];

export default function Skoler() {
  return (
    <>
      <PageHero
        eyebrow="// Skoler"
        title="Skoler i Oslo"
        lead="Informasjonsteknologi og medieproduksjon tilbys på disse offentlige videregående skolene i Oslo."
      >
        <Link href="/om-programmet" className="btn-ghost">
          Om de to løpene
        </Link>
      </PageHero>

      {/* ───────── Skolene ───────── */}
      <section className="container-page py-16 sm:py-20" aria-label="Skolene">
        <ul className="grid gap-4 sm:grid-cols-2">
          {schools.map((school) => (
            <li key={school.url} className="card group flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-ink-700 font-display text-lg font-bold text-zinc-100"
                >
                  {school.short.charAt(0)}
                </span>
                <h2 className="font-display text-xl font-semibold leading-tight">
                  {school.name}
                </h2>
              </div>

              <div className="mt-6 flex-1 border-t border-white/10 pt-6">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Løp</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  <li className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-200">
                    Yrkesfaglig
                  </li>
                  {school.studyTrack && (
                    <li className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-200">
                      Studieforberedende
                    </li>
                  )}
                </ul>
              </div>

              <a
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 self-start font-mono text-sm text-cyan-300 transition hover:text-cyan-200"
              >
                Besøk {school.short}s nettside
                <span aria-hidden className="transition group-hover:translate-x-0.5">↗</span>
                <span className="sr-only">(åpnes i ny fane)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ───────── Før du søker ───────── */}
      <section className="border-t border-white/10 bg-ink-900/60">
        <div className="container-page py-16 sm:py-20">
          <p className="eyebrow mb-4">// Før du søker</p>
          <h2 className="max-w-2xl font-display text-2xl font-bold sm:text-3xl">
            Slik finner du skolen som passer deg
          </h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip) => (
              <li key={tip.step} className="card p-6">
                <span className="font-mono text-xs text-fuchsia-300">{tip.step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{tip.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{tip.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="https://www.vigo.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Søk på vigo.no ↗
            </a>
            <Link href="/kontakt" className="btn-ghost">
              Spørsmål? Kontakt oss
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
