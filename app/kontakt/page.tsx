import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "Kontakt – IMO Oslo",
  description:
    "Kontaktinformasjon for spørsmål om informasjonsteknologi og medieproduksjon i Oslo.",
};

const contact = {
  name: "Sondre Stai",
  title: "Nettverkskoordinator",
  email: "sondre.stai@osloskolen.no",
};

const topics = [
  {
    title: "Bedrifter",
    text: "Vil dere ta inn lærlinger, tilby utplassering eller samarbeide med skolene?",
  },
  {
    title: "Skoler og lærere",
    text: "Spørsmål om nettverket, samarbeid mellom skolene eller denne nettsiden.",
  },
  {
    title: "Elever og foresatte",
    text: "Generelle spørsmål om IM. Spørsmål om en bestemt skole går best direkte til skolen.",
  },
];

export default function Kontakt() {
  const initials = contact.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      <PageHero
        eyebrow="// Kontakt"
        title="Ta kontakt"
        lead="Har du spørsmål om IM, læreplasser eller samarbeid? Send meg en e-post."
      />

      {/* ───────── Kontaktkort ───────── */}
      <section className="container-page py-20 sm:py-24">
        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-400/30 via-violet-500/20 to-fuchsia-500/30 blur-xl" />
          <div className="card relative grid gap-8 p-8 sm:p-10 md:grid-cols-[auto_1fr] md:items-center">
            <span
              aria-hidden
              className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 font-display text-2xl font-bold text-ink-950"
            >
              {initials}
            </span>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">{contact.name}</h2>
              <p className="mt-1 font-mono text-sm text-cyan-300">{contact.title}</p>

              <a
                href={`mailto:${contact.email}`}
                className="mt-6 block break-all font-display text-xl text-zinc-100 underline decoration-white/20 underline-offset-8 transition hover:decoration-cyan-300 sm:text-2xl"
              >
                {contact.email}
              </a>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${contact.email}`} className="btn-primary">
                  Send e-post →
                </a>
                <CopyButton value={contact.email} label="Kopier adressen" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Hva kan du spørre om ───────── */}
      <section className="border-t border-white/10 bg-ink-900/60 py-20 sm:py-24">
        <div className="container-page">
          <p className="eyebrow mb-4">{"// Hva gjelder det?"}</p>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Du kan kontakte meg om
          </h2>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {topics.map((t) => (
              <li key={t.title} className="card p-6">
                <h3 className="font-display text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{t.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/skoler" className="btn-ghost">
              Se skolene og nettsidene deres
            </Link>
            <Link href="/bli-laerebedrift" className="btn-ghost">
              Om å bli lærebedrift
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
