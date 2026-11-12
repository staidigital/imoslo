import { useId } from "react";

/**
 * Egne strekikoner for imoslo.no.
 * Tegnet på et 24×24-rutenett med 1.6 strek og avrundede ender,
 * og fylt med samme cyan → fiolett → rosa-gradient som resten av siden.
 */
const paths = {
  /** Skjerm med kode – praktisk arbeid */
  build: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M12 16v4M8 20h8" />
      <path d="m9.5 8-2 2 2 2M14.5 8l2 2-2 2" />
    </>
  ),
  /** Myntstabel – lønn */
  coins: (
    <>
      <ellipse cx="9" cy="6.5" rx="6" ry="2.5" />
      <path d="M3 6.5v4c0 1.4 2.7 2.5 6 2.5" />
      <ellipse cx="15" cy="13.5" rx="6" ry="2.5" />
      <path d="M9 13.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" />
    </>
  ),
  /** Diplom med segl – fagbrev */
  certificate: (
    <>
      <path d="M12.5 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
      <path d="M7 7.5h10M7 11h5" />
      <circle cx="17" cy="15" r="3" />
      <path d="m15.3 17.5-.8 3.5 2.5-1.2 2.5 1.2-.8-3.5" />
    </>
  ),
  /** Veiskille – mange veier videre */
  paths: (
    <>
      <path d="M12 21v-6" />
      <path d="M12 15c0-4-6-4.5-6-10.5M12 15c0-4 6-4.5 6-10.5" />
      <path d="m3.8 6.5 2.2-2.5 2.2 2.5M15.8 6.5 18 4l2.2 2.5" />
      <circle cx="12" cy="21" r=".6" />
    </>
  ),
  /** Person med pluss – rekruttering */
  recruit: (
    <>
      <circle cx="10" cy="8" r="3.5" />
      <path d="M3.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M19 8v6M16 11h6" />
    </>
  ),
  /** Seddel – tilskudd */
  banknote: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  /** Stigende graf – faglig utvikling */
  growth: (
    <>
      <path d="M3 21h18" />
      <path d="m3.5 16.5 5.5-5.5 4 4 7.5-7.5" />
      <path d="M15 7.5h5.5V13" />
    </>
  ),
  /** To personer – samfunnsansvar */
  community: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16.5" cy="8" r="3" />
      <path d="M2.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M13.8 14.8c.8-.2 1.7-.3 2.7-.3 3 0 5 2 5 5" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

type Props = {
  name: IconName;
  className?: string;
};

/** Ikon i en liten flis, slik det brukes i kortene. */
export default function Icon({ name, className = "" }: Props) {
  const id = useId();
  return (
    <span
      aria-hidden
      className={`inline-grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-ink-700/80 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#67e8f9" />
            <stop offset=".5" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#f0abfc" />
          </linearGradient>
        </defs>
        {paths[name]}
      </svg>
    </span>
  );
}
