import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Fag og fagbrev – IMO Oslo",
  description:
    "De fem lærefagene i informasjonsteknologi og medieproduksjon – og hvilket fagbrev og hvilken yrkestittel de gir.",
};

type Lærefag = {
  name: string;
  title: string;
  text: string;
  work: string[];
};

/* Lærefag og yrkestitler: udir.no (Kort om informasjonsteknologi og medieproduksjon). */

const groups: {
  id: string;
  vg2: string;
  accent: string;
  glow: string;
  fag: Lærefag[];
}[] = [
  {
    id: "it",
    vg2: "Informasjonsteknologi",
    accent: "from-cyan-400 to-blue-500",
    glow: "bg-cyan-500/15",
    fag: [
      {
        name: "IT-utviklerfaget",
        title: "IT-utvikler",
        text: "Du utvikler, designer og setter sammen teknologiske løsninger – fra apper og nettsider til integrasjoner mellom systemer.",
        work: ["Programmering", "Testing og feilsøking", "Databaser", "Brukervennlige løsninger"],
      },
      {
        name: "IT-driftsfaget",
        title: "IT-driftstekniker",
        text: "Du sørger for at IT-tjenester er stabile, sikre og effektive – og hjelper brukerne når noe ikke fungerer.",
        work: ["Nettverk og servere", "IT-sikkerhet", "Brukerstøtte", "Feilsøking"],
      },
    ],
  },
  {
    id: "medier",
    vg2: "Medieproduksjon",
    accent: "from-fuchsia-400 to-orange-400",
    glow: "bg-fuchsia-500/15",
    fag: [
      {
        name: "Innholds\u00ADproduksjons\u00ADfaget",
        title: "Innholdsprodusent",
        text: "Du lager innhold til digitale medier med foto, video, tekst og grafikk – og tilpasser det til kanalen og målgruppen.",
        work: ["Foto", "Video", "Tekst", "Sosiale medier"],
      },
      {
        name: "Mediedesignfaget",
        title: "Mediedesigner",
        text: "Du jobber med visuell kommunikasjon og design av produkter og opplevelser – både digitalt og på trykk.",
        work: ["Grafisk design", "Visuell identitet", "Layout", "Digitale flater"],
      },
      {
        name: "Medieteknikkfaget",
        title: "Medietekniker",
        text: "Du håndterer lyd, bilde og video, og rigger og gjennomfører produksjoner for film, TV, konferanser og kulturarrangementer.",
        work: ["Lyd", "Kamera og bilde", "Strømming", "Arrangementer"],
      },
    ],
  },
];

export default function Fag() {
  return (
    <>
      <PageHero
        eyebrow="// Fag"
        title={
          <>
            Fem lærefag. <span className="text-gradient">Velg ditt.</span>
          </>
        }
        lead="Etter Vg2 går du ut i lære i ett av fem lærefag. Når du har bestått fagprøven, får du fagbrev og en yrkestittel."
      />

      {/* ───────── Hopp til ───────── */}
      <nav aria-label="Retninger" className="border-b border-white/10">
        <div className="container-page flex flex-wrap gap-3 py-6">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-200 transition hover:border-white/40 hover:bg-white/5"
            >
              <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${g.accent}`} />
              Etter Vg2 {g.vg2.toLowerCase()}
              <span className="font-mono text-xs text-zinc-500">{g.fag.length}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* ───────── Lærefagene ───────── */}
      {groups.map((g, gi) => (
        <section
          key={g.id}
          id={g.id}
          className={`scroll-mt-20 py-20 sm:py-24 ${gi % 2 === 1 ? "border-y border-white/10 bg-ink-900/60" : ""}`}
        >
          <div className="container-page">
            <p className="eyebrow mb-4">{`// Etter Vg2 ${g.vg2.toLowerCase()}`}</p>
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
              {g.vg2}
            </h2>

            <ul className={`mt-12 grid gap-6 ${g.fag.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
              {g.fag.map((f) => (
                <li key={f.name} className="card relative flex flex-col overflow-hidden p-6 sm:p-8">
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full ${g.glow} blur-3xl`}
                  />
                  <span className={`inline-block h-1 w-12 rounded-full bg-gradient-to-r ${g.accent}`} />
                  <h3 lang="nb" className="mt-5 hyphens-manual break-words font-display text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl">{f.name}</h3>
                  <p className="mt-1 font-mono text-sm text-zinc-400">
                    Du blir <span className="text-zinc-100">{f.title.toLowerCase()}</span>
                  </p>
                  <p className="mt-5 flex-1 text-sm text-zinc-400">{f.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                    {f.work.map((w) => (
                      <li
                        key={w}
                        className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-200"
                      >
                        {w}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* ───────── Slik får du fagbrev ───────── */}
      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4">{"// Fagbrevet"}</p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Slik får du fagbrev
            </h2>
          </div>
          <ol className="space-y-4">
            {[
              {
                step: "01",
                title: "Lærekontrakt",
                text: "Etter Vg2 søker du læreplass. Når du får en, skriver du og bedriften under på en lærekontrakt.",
              },
              {
                step: "02",
                title: "Læretid",
                text: "Du er lærling i bedriften i to år, får lønn og lærer det læreplanen for faget ditt krever.",
              },
              {
                step: "03",
                title: "Fagprøve",
                text: "På slutten viser du at du kan faget. Består du, får du fagbrev og yrkestittelen som hører til.",
              },
            ].map((s) => (
              <li key={s.step} className="card flex gap-5 p-6">
                <span className="font-mono text-xs text-fuchsia-300">{s.step}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-12 max-w-3xl text-sm text-zinc-500">
          Lærefagene hører til det yrkesfaglige løpet. De erstatter tidligere
          fag som IKT-servicefaget, fotograffaget, mediegrafikerfaget og film-
          og videoteknikk.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/om-programmet" className="btn-primary">
            Se hele løpet →
          </Link>
          <Link href="/bli-laerebedrift" className="btn-ghost">
            For bedrifter: bli lærebedrift
          </Link>
        </div>
      </section>
    </>
  );
}
