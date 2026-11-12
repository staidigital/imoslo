/** Faste høyder (0–1) for lydbølgen, så server og klient rendrer likt. */
const wave = [
  0.3, 0.55, 0.4, 0.8, 0.6, 0.35, 0.7, 0.9, 0.5, 0.3, 0.45, 0.75, 0.55, 0.25,
  0.6, 0.85, 0.65, 0.4, 0.3, 0.5, 0.7, 0.45, 0.6, 0.8, 0.5, 0.35, 0.55, 0.7,
  0.4, 0.3, 0.65, 0.9, 0.6, 0.45, 0.3, 0.5,
];

const clips = [
  { w: "28%", c: "from-fuchsia-500 to-pink-500" },
  { w: "18%", c: "from-violet-500 to-fuchsia-500" },
  { w: "34%", c: "from-orange-400 to-fuchsia-500" },
  { w: "16%", c: "from-pink-500 to-orange-400" },
];

/**
 * Pyntevindu i hero-seksjonen som representerer medieproduksjon:
 * en kamerasøker med opptaksinfo og en redigeringstidslinje under.
 */
export default function MediaWindow() {
  return (
    <div
      aria-hidden
      className="relative z-10 -mt-12 ml-auto w-[78%] animate-float [animation-delay:-3s] sm:-mt-16"
    >
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-500/40 via-pink-500/20 to-orange-400/40 blur-xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-ink-900/95 shadow-2xl">
        {/* Tittellinje */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-400/80" />
          <span className="ml-2 truncate font-mono text-[11px] text-zinc-500">
            klipp_01.mov
          </span>
        </div>

        {/* Kamerasøker */}
        <div className="relative aspect-video overflow-hidden">
          {/* Motiv: solnedgang over by */}
          <div className="absolute inset-0 bg-gradient-to-b from-violet-900 via-fuchsia-700 to-orange-400" />
          <div className="absolute left-1/2 top-[52%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-amber-200 to-orange-400 opacity-90 blur-[1px] sm:h-20 sm:w-20" />
          <svg
            className="absolute inset-x-0 bottom-0 h-1/2 w-full"
            viewBox="0 0 320 90"
            preserveAspectRatio="none"
          >
            <path
              d="M0 90V58h18V40h14v18h10V28h20v30h12V46h16v12h8V34h22v24h10V20h16v38h12V44h18v14h10V36h20v22h14V50h16v8h12V30h18v28h14V42h10v48z"
              fill="#13131f"
            />
            <path d="M0 90V76h320v14z" fill="#07070c" />
          </svg>

          {/* Tredjedelsrutenett */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="border-[0.5px] border-white/10" />
            ))}
          </div>

          {/* Hjørnemarkører */}
          {[
            "left-3 top-3 border-l-2 border-t-2",
            "right-3 top-3 border-r-2 border-t-2",
            "bottom-3 left-3 border-b-2 border-l-2",
            "bottom-3 right-3 border-b-2 border-r-2",
          ].map((pos) => (
            <span key={pos} className={`absolute h-4 w-4 border-white/80 ${pos}`} />
          ))}

          {/* Fokusfelt */}
          <span className="absolute left-1/2 top-1/2 h-10 w-14 -translate-x-1/2 -translate-y-1/2 border border-lime-300/90" />

          {/* Opptaksinfo */}
          <div className="absolute left-8 top-6 flex items-center gap-1.5 font-mono text-[10px] font-semibold text-white sm:text-[11px]">
            <span className="h-2 w-2 animate-blink rounded-full bg-red-500" />
            REC
          </div>
          <div className="absolute right-8 top-6 font-mono text-[10px] text-white/90 sm:text-[11px]">
            00:01:24:12
          </div>
          <div className="absolute bottom-6 left-8 font-mono [text-shadow:0_1px_3px_rgba(0,0,0,0.9)] text-[10px] text-white/80 sm:text-[11px]">
            4K · 25p
          </div>
          <div className="absolute bottom-6 right-8 font-mono [text-shadow:0_1px_3px_rgba(0,0,0,0.9)] text-[10px] text-white/80 sm:text-[11px]">
            f/2.8 · ISO 400
          </div>
        </div>

        {/* Tidslinje */}
        <div className="relative space-y-1.5 border-t border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="w-5 font-mono text-[10px] text-zinc-500">V1</span>
            <div className="flex flex-1 gap-1">
              {clips.map((clip, i) => (
                <span
                  key={i}
                  style={{ width: clip.w }}
                  className={`h-4 rounded-sm bg-gradient-to-r opacity-90 ${clip.c}`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 font-mono text-[10px] text-zinc-500">A1</span>
            <div className="flex h-4 flex-1 items-center gap-[2px] rounded-sm bg-cyan-400/10 px-1">
              {wave.map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h * 100}%` }}
                  className="flex-1 rounded-full bg-cyan-300/70"
                />
              ))}
            </div>
          </div>

          {/* Spillehode */}
          <div className="pointer-events-none absolute inset-y-2 left-11 right-4">
            <span className="absolute inset-y-0 w-px animate-playhead bg-white shadow-[0_0_6px] shadow-white">
              <span className="absolute -left-[3px] -top-1 h-1.5 w-[7px] rounded-sm bg-white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
