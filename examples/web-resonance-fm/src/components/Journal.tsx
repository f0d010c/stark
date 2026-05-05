import { ARCHIVE_ENTRIES } from "../data/watches";

export function Journal() {
  return (
    <section className="px-12 lg:px-20 py-32 lg:py-44">
      <div className="grid grid-cols-12 gap-8 mb-16">
        <div className="col-span-12 lg:col-span-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3">§ 03</span>
            <span className="block w-8 h-[1px] bg-rule" />
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3">Journal</span>
          </div>
          <h2
            className="font-display font-medium text-ink mt-6 leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(36px, 6vw, 96px)" }}
          >
            Notes from the atelier.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <ul className="col-span-12 lg:col-span-10 lg:col-start-3 divide-y divide-rule">
          {ARCHIVE_ENTRIES.map((e) => (
            <li key={e.title} className="py-8 reveal-on-scroll">
              <a className="grid grid-cols-12 gap-6 group">
                <div className="col-span-12 md:col-span-2">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-3">{e.date}</span>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h3 className="font-display text-ink hover-weight" style={{ fontSize: "clamp(22px, 2.4vw, 32px)" }}>
                    {e.title}
                  </h3>
                  <p className="font-display italic text-ink-2 mt-2 max-w-[60ch]" style={{ fontSize: "15px", lineHeight: 1.55 }}>
                    {e.excerpt}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 flex md:justify-end items-start">
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] uppercase text-ink-3 group-hover:text-oxblood transition-colors">
                    Read
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8m0 0L6 2m4 4L6 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
