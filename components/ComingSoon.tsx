import Link from "next/link";
import PageHero from "./PageHero";

type Props = { eyebrow: string; title: string; lead: string };

/** Midlertidig side for seksjoner som ennå ikke har innhold. */
export default function ComingSoon({ eyebrow, title, lead }: Props) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />
      <section className="container-page py-16">
        <div className="card flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-sm text-zinc-400">
            <span className="text-lime-300">$</span> innhold --status{" "}
            <span className="text-fuchsia-300">&quot;kommer snart&quot;</span>
            <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-zinc-300" />
          </p>
          <Link href="/" className="btn-ghost">
            ← Til forsiden
          </Link>
        </div>
      </section>
    </>
  );
}
