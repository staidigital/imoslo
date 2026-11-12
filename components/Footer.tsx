import Link from "next/link";

const columns = [
  {
    title: "For elever",
    links: [
      { href: "/om-programmet", label: "Om programmet" },
      { href: "/fag", label: "Fag" },
      { href: "/skoler", label: "Skoler" },
      { href: "/videre-utdanning", label: "Videre utdanning" },
    ],
  },
  {
    title: "For bedrifter",
    links: [
      { href: "/bli-laerebedrift", label: "Bli lærebedrift" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-ink-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
      <div className="container-page grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold">
            imoslo<span className="text-cyan-300">.no</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-zinc-400">
            Din guide til utdanningsprogrammet informasjonsteknologi og
            medieproduksjon i Oslo.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="eyebrow mb-4">{col.title}</p>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-zinc-400 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5">
        <p className="container-page py-6 font-mono text-xs text-zinc-500">
          © {new Date().getFullYear()} imoslo.no
        </p>
      </div>
    </footer>
  );
}
