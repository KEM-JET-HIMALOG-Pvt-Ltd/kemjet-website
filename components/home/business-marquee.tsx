const SECTORS = ['Education', 'Infrastructure', 'Manufacturing', 'Technology', 'Permit Services']

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {SECTORS.map((s) => (
        <li key={s} className="flex items-center">
          <span className="px-8 font-serif text-3xl font-light uppercase tracking-[0.06em] text-ivory md:px-12 md:text-5xl">
            {s}
          </span>
          <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold" />
        </li>
      ))}
    </ul>
  )
}

export function BusinessMarquee() {
  return (
    <section aria-label="Our sectors" className="relative overflow-hidden border-y border-ivory/10 bg-forest py-7 md:py-9">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  )
}
