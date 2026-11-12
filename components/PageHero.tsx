type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
};

/** Felles toppseksjon for undersider. */
export default function PageHero({ eyebrow, title, lead, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-violet-600/25 blur-3xl" />
      <div className="container-page relative py-20 sm:py-28">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">{lead}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
