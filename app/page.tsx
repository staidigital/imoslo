import Link from "next/link";
import MediaWindow from "@/components/MediaWindow";

const interests = [
  "Programmering",
  "Nettverk",
  "Foto",
  "Video",
  "Grafisk design",
  "Animasjon",
  "Lyd",
  "IT-sikkerhet",
  "Webutvikling",
  "Brukerstøtte",
  "Sosiale medier",
  "Servere og drift",
];

const tracks = [
  {
    tag: "Vg2",
    title: "Informasjonsteknologi",
    accent: "from-cyan-400 to-blue-500",
    glow: "bg-cyan-500/20",
    text: "For deg som vil forstå hvordan teknologien fungerer – og få den til å fungere.",
    skills: [
      "Programmering og utvikling",
      "Nettverk og servere",
      "IT-sikkerhet",
      "Brukerstøtte og drift",
    ],
  },
  {
    tag: "Vg2",
    title: "Medieproduksjon",
    accent: "from-fuchsia-400 to-orange-400",
    glow: "bg-fuchsia-500/20",
    text: "For deg som vil fortelle historier og skape innhold folk faktisk ser.",
    skills: [
      "Foto og video",
      "Grafisk design",
      "Lyd og redigering",
      "Innhold for digitale flater",
    ],
  },
];

const reasons = [
  {
    icon: "⚡",
    title: "Praktisk fra dag én",
    text: "Du lærer ved å bygge, redigere og feilsøke – ikke bare ved å lese.",
  },
  {
    icon: "💸",
    title: "Lønn i læretiden",
    text: "Som lærling er du ansatt i en bedrift og får lønn mens du lærer.",
  },
  {
    icon: "🎓",
    title: "Fagbrev",
    text: "Etter læretiden tar du fagprøven og får et fagbrev som er etterspurt i arbeidslivet.",
  },
  {
    icon: "🧭",
    title: "Mange veier videre",
    text: "Jobb, fagskole eller studier – IM stenger ingen dører.",
  },
];

const path = [
  { step: "Vg1", title: "Informasjonsteknologi og medieproduksjon", text: "Et felles år der du prøver både IT og medier." },
  { step: "Vg2", title: "Velg retning", text: "Informasjonsteknologi eller medieproduksjon." },
  { step: "2 år", title: "Læretid i bedrift", text: "Opplæring og ekte arbeid med lønn." },
  { step: "Mål", title: "Fagbrev", text: "Klar for jobb – eller videre utdanning." },
];

const terminalLines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "fremtidig_utvikler | fotograf | nettverksnerd" },
  { prompt: true, text: "ls interesser/" },
  { prompt: false, text: "kode/  video/  design/  servere/  spill/" },
  { prompt: true, text: "start --program IM --by oslo" },
  { prompt: false, text: "✔ Klar. Velkommen til IM." },
];

export default function Home() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />

        <div className="container-page relative grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/5 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
              Utdanningsprogram i Oslo
            </p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
              Kod.
              <br />
              Design.
              <br />
              <span className="text-gradient">Skap.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-zinc-400">
              Informasjonsteknologi og medieproduksjon (IM) er for deg som vil
              lage det andre bruker – apper, nettverk, video, design og alt
              midt imellom.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/om-programmet" className="btn-primary">
                Utforsk programmet →
              </Link>
              <Link href="/skoler" className="btn-ghost">
                Finn skole
              </Link>
            </div>
          </div>

          <div className="relative">
          {/* Terminal */}
          <div className="relative w-[92%] animate-float">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-400/40 via-violet-500/30 to-fuchsia-500/40 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-ink-900/90 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                <span className="h-3 w-3 rounded-full bg-lime-400/80" />
                <span className="ml-3 font-mono text-xs text-zinc-500">
                  ~/imoslo
                </span>
              </div>
              <div className="space-y-2 p-5 pb-16 font-mono text-[13px] leading-relaxed sm:pb-20 sm:text-sm">
                {terminalLines.map((l, i) => (
                  <p
                    key={i}
                    className={l.prompt ? "text-zinc-100" : "text-zinc-400"}
                  >
                    {l.prompt && <span className="mr-2 text-lime-300">❯</span>}
                    {l.text}
                  </p>
                ))}
                <p>
                  <span className="mr-2 text-lime-300">❯</span>
                  <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-zinc-200" />
                </p>
              </div>
            </div>
          </div>

          {/* Kamerasøker + tidslinje (medieproduksjon) */}
          <MediaWindow />
          </div>
        </div>
      </section>

      {/* ───────── Interesser (marquee) ───────── */}
      <section
        aria-label="Hva du kan jobbe med"
        className="overflow-hidden border-y border-white/10 bg-ink-900 py-5"
      >
        <div className="flex w-max animate-marquee gap-3">
          {[...interests, ...interests].map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= interests.length}
              className="whitespace-nowrap rounded-full border border-white/10 px-4 py-1.5 font-mono text-sm text-zinc-300"
            >
              <span className="text-violet-400">#</span>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ───────── To retninger ───────── */}
      <section className="container-page py-24">
        <p className="eyebrow mb-4">{"// Velg din vei"}</p>
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Teknologi eller media?{" "}
          <span className="text-zinc-500">Du prøver begge først.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-zinc-400">
          På Vg1 får du smakebiter av alt. På Vg2 velger du den retningen som
          passer deg best.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tracks.map((t) => (
            <article
              key={t.title}
              className="card group relative overflow-hidden p-8 transition hover:-translate-y-1 hover:border-white/25"
            >
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full ${t.glow} blur-3xl transition group-hover:scale-125`}
              />
              <span
                className={`inline-block rounded-full bg-gradient-to-r ${t.accent} px-3 py-1 font-mono text-xs font-bold text-ink-950`}
              >
                {t.tag}
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
                {t.title}
              </h3>
              <p className="mt-3 text-zinc-400">{t.text}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {t.skills.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 text-sm text-zinc-200"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${t.accent}`}
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ───────── Veien ───────── */}
      <section className="border-y border-white/10 bg-ink-900/60 py-24">
        <div className="container-page">
          <p className="eyebrow mb-4">{"// Veien til fagbrev"}</p>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            2 år på skole. 2 år i lære.{" "}
            <span className="text-gradient">Ferdig fagarbeider.</span>
          </h2>

          <div className="relative mt-14">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 md:block" />
          <ol className="relative grid gap-6 md:grid-cols-4">
            {path.map((p, i) => (
              <li key={p.step} className="relative">
                <span
                  className={`relative z-10 grid h-12 w-12 place-items-center rounded-full border font-mono text-xs font-bold ${
                    i === path.length - 1
                      ? "border-transparent bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-ink-950"
                      : "border-white/20 bg-ink-950 text-white"
                  }`}
                >
                  {p.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{p.text}</p>
              </li>
            ))}
          </ol>
          </div>

          <p className="mt-12 text-sm text-zinc-400">
            Vil du heller studere? Med påbygg til generell studiekompetanse kan
            du søke høyere utdanning.{" "}
            <Link
              href="/videre-utdanning"
              className="text-cyan-300 underline-offset-4 hover:underline"
            >
              Se alle veier videre →
            </Link>
          </p>
        </div>
      </section>

      {/* ───────── Hvorfor IM ───────── */}
      <section className="container-page py-24">
        <p className="eyebrow mb-4">{"// Hvorfor IM?"}</p>
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Lær det du faktisk er nysgjerrig på.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="card p-6">
              <span className="text-3xl" aria-hidden="true">
                {r.icon}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── CTA-er ───────── */}
      <section className="container-page grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-violet-600 to-fuchsia-600 p-10 sm:p-14">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klar til å søke?
            </h2>
            <p className="mt-3 max-w-md text-white/80">
              Se hvilke skoler i Oslo som tilbyr IM, og finn den som passer
              deg.
            </p>
            <Link
              href="/skoler"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              Se skolene →
            </Link>
          </div>
        </div>

        <div className="card flex flex-col justify-between p-10">
          <div>
            <p className="eyebrow mb-3">For bedrifter</p>
            <h2 className="font-display text-2xl font-bold">
              Trenger dere ferske talenter?
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              Ta inn en lærling fra IM og bidra til å utdanne fremtidens
              fagarbeidere.
            </p>
          </div>
          <Link href="/bli-laerebedrift" className="btn-ghost mt-8 self-start">
            Bli lærebedrift →
          </Link>
        </div>
      </section>
    </>
  );
}
