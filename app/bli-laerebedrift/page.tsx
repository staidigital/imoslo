import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Bli lærebedrift – IMO Oslo",
  description:
    "Hva det vil si å være lærebedrift for lærlinger fra informasjonsteknologi og medieproduksjon, og hvordan bedriften din blir godkjent.",
};

const benefits = [
  {
    icon: "recruit" as IconName,
    title: "Rekrutter egen kompetanse",
    text: "Lærlingen lærer seg deres verktøy, rutiner og kultur. Mange lærebedrifter ansetter lærlingen etter fagprøven.",
  },
  {
    icon: "banknote" as IconName,
    title: "Lærlingtilskudd",
    text: "Godkjente lærebedrifter får tilskudd fra fylkeskommunen for opplæringen de gir i læretiden.",
  },
  {
    icon: "growth" as IconName,
    title: "Faglig utvikling",
    text: "Å veilede en lærling gir egne ansatte erfaring med opplæring og ledelse, og nye perspektiver inn i teamet.",
  },
  {
    icon: "community" as IconName,
    title: "Samfunnsansvar",
    text: "Dere bidrar til å utdanne fremtidens fagarbeidere innen IT og medieproduksjon – fag det er stor etterspørsel etter.",
  },
];

const requirements = [
  "En faglig leder som har det overordnede ansvaret for opplæringen og relevant fagkompetanse.",
  "En eller flere instruktører som følger opp lærlingen i det daglige arbeidet.",
  "Arbeidsoppgaver som dekker kompetansemålene i læreplanen – alene eller i samarbeid med andre bedrifter eller et opplæringskontor.",
  "Forsvarlige arbeidsforhold og nødvendig utstyr for opplæringen.",
];

type Step = {
  title: string;
  text: string;
  link?: { href: string; label: string };
};

const steps: Step[] = [
  {
    title: "Sjekk læreplanen",
    text: "Se på læreplanen for faget dere vil lære opp i, og vurder hvilke kompetansemål dere kan dekke gjennom egne arbeidsoppgaver.",
  },
  {
    title: "Vurder et opplæringskontor",
    text: "Et opplæringskontor kan hjelpe med søknaden, administrasjon, opplæringsplaner og oppfølging av lærlingen. Mange mindre bedrifter velger denne løsningen.",
  },
  {
    title: "Utpek faglig leder og instruktør",
    text: "Bestem hvem som skal ha ansvaret for opplæringen, og hvem som skal følge opp lærlingen i hverdagen.",
  },
  {
    title: "Søk om godkjenning",
    text: "Send søknad om godkjenning som lærebedrift til fylkeskommunen – i Oslo er det Oslo kommune ved Utdanningsetaten som behandler søknaden.",
    link: {
      href: "https://www.oslo.kommune.no/skole-og-utdanning/opplaring-i-bedrift/larebedrift/bli-larebedrift/sok-om-godkjenning/",
      label: "Søk om godkjenning hos Oslo kommune",
    },
  },
  {
    title: "Godkjenning",
    text: "Søknaden vurderes, og det kan bli gjennomført et bedriftsbesøk. Når bedriften er godkjent, kan dere ta inn lærlinger i faget.",
  },
  {
    title: "Rekrutter lærling",
    text: "Lys ut læreplassen eller ta imot søkere via formidlingen. Lærlingen ansettes, og dere signerer en lærekontrakt.",
  },
  {
    title: "Lær opp og følg opp",
    text: "Lag en opplæringsplan, gi jevnlige tilbakemeldinger og dokumenter opplæringen frem mot fagprøven.",
  },
];

export default function BliLaerebedrift() {
  return (
    <>
      <PageHero
        eyebrow="// For bedrifter"
        title={
          <>
            Bli <span className="text-gradient">lærebedrift</span>
          </>
        }
        lead="Elever fra informasjonsteknologi og medieproduksjon trenger læreplasser for å fullføre utdanningen sin. Som lærebedrift får dere motiverte lærlinger – og muligheten til å forme fremtidens fagarbeidere."
      >
        <a href="#steg" className="btn-primary">
          Slik gjør du det ↓
        </a>
        <Link href="/kontakt" className="btn-ghost">
          Ta kontakt
        </Link>
      </PageHero>

      {/* Hva er en lærebedrift */}
      <section className="container-page grid gap-10 py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow mb-4">{"// Hva er det?"}</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Hva er en lærebedrift?
          </h2>
        </div>
        <div className="space-y-5 text-zinc-300">
          <p>
            En lærebedrift er en bedrift eller virksomhet som er godkjent av
            fylkeskommunen til å gi opplæring i et lærefag. Lærlingen er ansatt
            i bedriften med en lærekontrakt, og læretiden er normalt to år.
          </p>
          <p>
            Læretiden består av opplæring og verdiskaping: lærlingen lærer
            faget gjennom reelle arbeidsoppgaver, samtidig som hen bidrar i
            produksjonen. Læretiden avsluttes med en fagprøve, og bestått prøve
            gir fagbrev.
          </p>
          <p>
            Etter Vg2 informasjonsteknologi og medieproduksjon kan elevene gå
            ut i lære i blant annet IT-utviklerfaget og
            IT-driftsfaget, eller i lærefag innen medieproduksjon.
          </p>
        </div>
      </section>

      {/* Hvorfor */}
      <section className="border-y border-white/10 bg-ink-900/60 py-24">
        <div className="container-page">
          <p className="eyebrow mb-4">{"// Hvorfor?"}</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Hvorfor bli lærebedrift?
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="card p-6">
                <Icon name={b.icon} />
                <h3 className="mt-4 font-display text-lg font-bold">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Krav */}
      <section className="container-page py-24">
        <p className="eyebrow mb-4">{"// Krav"}</p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Krav til lærebedriften
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {requirements.map((r) => (
            <li key={r} className="card flex gap-4 p-6 text-zinc-300">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime-300/15 text-sm text-lime-300">
                ✓
              </span>
              {r}
            </li>
          ))}
        </ul>
      </section>

      {/* Steg for steg */}
      <section
        id="steg"
        className="scroll-mt-20 border-y border-white/10 bg-ink-900/60 py-24"
      >
        <div className="container-page">
          <p className="eyebrow mb-4">{"// Steg for steg"}</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Slik blir du lærebedrift
          </h2>
          <ol className="relative mt-12 max-w-3xl space-y-8 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-violet-500 before:to-fuchsia-500">
            {steps.map((s, i) => (
              <li key={s.title} className="relative flex gap-6">
                <span
                  aria-hidden="true"
                  className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 bg-ink-950 font-mono text-sm font-bold"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-zinc-400">{s.text}</p>
                  {s.link && (
                    <a
                      href={s.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-cyan-300 transition hover:text-cyan-200"
                    >
                      {s.link.label}
                      <span aria-hidden>↗</span>
                      <span className="sr-only">(åpnes i ny fane)</span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pt-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-violet-600 to-fuchsia-600 p-10 sm:p-14">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Lurer du på noe?
            </h2>
            <p className="mt-3 max-w-lg text-white/80">
              Vi hjelper gjerne bedrifter som vurderer å ta inn lærlinger fra
              informasjonsteknologi og medieproduksjon.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              Ta kontakt for en prat →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
