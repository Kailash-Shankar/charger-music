export default function PageHero({ title, subtitle }) {
  return (
    <section className="overflow-hidden border-y border-black bg-black px-6 py-20 text-white md:py-24">
      <div className="mx-auto mb-8 h-1 w-24 bg-[#b3131b]" />
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-charger-gold">
          Strawberry Crest High School
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-bold uppercase tracking-[0.06em] md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
