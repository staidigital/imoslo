import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Veien videre – IMO Oslo",
  description:
    "Jobb, fagskole, Y-vei eller studier – her ser du mulighetene etter informasjonsteknologi og medieproduksjon.",
};

type Route = {
  from: string;
  via?: string;
  to: string;
  href: string;
};

const routes: Route[] = [
  { from: "Fagbrev", to: "Jobb som fagarbeider", href: "#jobb" },
  { from: "Fagbrev", via: "Fagskole", to: "Fagskolegrad", href: "#fagskole" },
  { from: "Fagbrev", via: "Y-vei", to: "Bachelor i ingeniørfag", href: "#y-vei" },
  { from: "Fagbrev eller Vg2", via: "Påbygging", to: "Universitet og høyskole", href: "#pabygging" },
  { from: "Studieforberedende IM", to: "Universitet og høyskole", href: "#studiekompetanse" },
];

const paths = [
  {
    id: "jobb",
    tag: "Jobb",
    title: "Rett ut i jobb",
    text: "Med fagbrev er du fagarbeider, og kan søke jobb som for eksempel IT-utvikler, IT-driftstekniker, innholdsprodusent, mediedesigner eller medietekniker. Mange får tilbud om å bli i lærebedriften.",
    fit: "Du vil jobbe og tjene penger med en gang.",
  },
  {
    id: "fagskole",
    tag: "Fagskole",
    title: "Fagskole",
    text: "Fagskole er høyere yrkesfaglig utdanning, ofte på ett til to år. Mange fagskoleutdanninger innen IT og medier bygger på et relevant fagbrev, og er laget for å gjøre deg mer spesialisert.",
    fit: "Du vil bli ekspert på noe – uten å ta en lang teoretisk utdanning.",
  },
  {
    id: "y-vei",
    tag: "Y-vei",
    title: "Y-vei til ingeniør",
    text: "Noen universiteter og høyskoler har Y-vei: ingeniørstudier, også innen data, der du kan komme inn med relevant fagbrev i stedet for generell studiekompetanse. Hvert studiested bestemmer selv hvilke fagbrev som teller.",
    fit: "Du liker å forstå teknologien i dybden og vil bli ingeniør.",
  },
  {
    id: "pabygging",
    tag: "Påbygging",
    title: "Påbygging til studiekompetanse",
    text: "Med påbygging tar du fellesfagene som gir generell studiekompetanse, og kan søke universitet og høyskole. Du kan ta påbygging etter Vg2 eller etter at du har fått fagbrev.",
    fit: "Du har lyst til å studere – nå eller senere.",
  },
  {
    id: "studiekompetanse",
    tag: "Studiekompetanse",
    title: "Studieforberedende IM",
    text: "Går du det treårige løpet med studiekompetanse på Elvebakken eller Kuben, kan du søke universitet og høyskole rett etter videregående.",
    fit: "Du vet allerede at du vil studere videre.",
    link: { href: "/om-programmet#studiekompetanse", label: "Les om løpet" },
  },
];

export default function VidereUtdanning() {
  return (
    <>
      <PageHero
        eyebrow="// Veien videre"
        title={
          <>
            Mange veier. <span className="text-gradient">Ingen blindvei.</span>
          </>
        }
        lead="IM gir deg et yrke – og holder døra åpen for mer utdanning. Her ser du hvilke veier du kan gå etter videregående."
      />

      {/* ───────── Kart ───────── */}
      <section className="container-page py-20 sm:py-24" aria-labelledby="kart-tittel">
        <p className="eyebrow mb-4">{"// Oversikt"}</p>
        <h2 id="kart-tittel" className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Hvor kan du havne?
        </h2>

        <ol className="mt-12 space-y-3">
          {routes.map((r) => (
            <li key={r.href}>
              <a
                href={r.href}
                className="card group flex flex-wrap items-center gap-x-3 gap-y-2 p-4 transition hover:border-white/25 sm:grid sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-4 sm:p-5"
              >
                <span className="font-mono text-sm text-zinc-300">{r.from}</span>
                <Arrow />
                <span className={`text-sm ${r.via ? "" : "hidden sm:inline"}`}>
                  {r.via ? (
                    <span className="inline-block rounded-full border border-violet-400/40 bg-violet-400/10 px-3 py-1 text-violet-200">
                      {r.via}
                    </span>
                  ) : (
                    <span className="font-mono text-zinc-600">—</span>
                  )}
                </span>
                <Arrow hideOnMobile={!r.via} />
                <span className="font-display font-semibold text-zinc-100 transition group-hover:text-white">
                  {r.to}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* ───────── Veiene ───────── */}
      <section className="border-y border-white/10 bg-ink-900/60 py-20 sm:py-24">
        <div className="container-page">
          <p className="eyebrow mb-4">{"// Veiene"}</p>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Hva betyr de?
          </h2>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {paths.map((p) => (
              <li
                key={p.id}
                id={p.id}
                className="card flex scroll-mt-24 flex-col p-6 sm:p-8"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-300">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold sm:text-2xl">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm text-zinc-400">{p.text}</p>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm text-zinc-200">
                  <span className="mr-2 font-mono text-lime-300">✓</span>
                  {p.fit}
                </p>
                {p.link && (
                  <Link
                    href={p.link.href}
                    className="mt-4 self-start font-mono text-sm text-cyan-300 transition hover:text-cyan-200"
                  >
                    {p.link.label} →
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Ikke låst ───────── */}
      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4">{"// Godt å vite"}</p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Du trenger ikke bestemme deg nå
            </h2>
          </div>
          <div className="space-y-4 text-zinc-400">
            <p>
              Mange jobber noen år med fagbrevet før de tar mer utdanning.
              Erfaringen fra arbeidslivet er verdifull – også når du studerer.
            </p>
            <p>
              Opptakskravene varierer mellom studiestedene. Sjekk alltid kravene
              for studiet du er interessert i, og snakk gjerne med
              rådgiveren på skolen din.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="https://utdanning.no/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Utforsk utdanninger på utdanning.no ↗
          </a>
          <Link href="/fag" className="btn-ghost">
            Se lærefagene
          </Link>
        </div>
      </section>
    </>
  );
}

function Arrow({ hideOnMobile = false }: { hideOnMobile?: boolean }) {
  return (
    <span aria-hidden className={`font-mono text-zinc-600 ${hideOnMobile ? "hidden sm:inline" : ""}`}>
      →
    </span>
  );
}
