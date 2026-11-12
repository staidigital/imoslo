"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const navLinks = [
  { href: "/om-programmet", label: "Om programmet" },
  { href: "/fag", label: "Fag" },
  { href: "/skoler", label: "Skoler" },
  { href: "/videre-utdanning", label: "Videre utdanning" },
  { href: "/bli-laerebedrift", label: "Bli lærebedrift" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/70 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 font-mono text-sm text-ink-950">
            IM
          </span>
          <span>
            imoslo<span className="text-cyan-300">.no</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hovedmeny">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/kontakt" className="btn-primary ml-3 !px-5 !py-2">
            Kontakt
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobilmeny"
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-0.5 w-4 bg-white transition ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-4 bg-white transition ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobilmeny"
          aria-label="Mobilmeny"
          className="border-t border-white/10 bg-ink-950 lg:hidden"
        >
          <ul className="container-page flex flex-col py-4">
            {[...navLinks, { href: "/kontakt", label: "Kontakt" }].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`block rounded-xl px-3 py-3 font-display text-xl font-medium ${
                    pathname === link.href ? "text-gradient" : "text-zinc-200"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
