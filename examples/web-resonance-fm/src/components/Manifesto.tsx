import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const manifestoLines = [
  "Most watches",
  "are made by machines.",
  "We are not most watches.",
];

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Map progress to gradient highlight that walks across the text
  const sweepX = useTransform(scrollYProgress, [0.2, 0.7], ["-30%", "130%"]);

  return (
    <section ref={ref} className="relative px-12 lg:px-20 py-40 lg:py-56">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-2">
          <div className="sticky top-32">
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3">§ 01</span>
            <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3 mt-1">Manifesto</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-10 relative">
          <h2
            className="font-display font-medium text-ink leading-[1.0] tracking-tight relative"
            style={{ fontSize: "clamp(36px, 6vw, 96px)" }}
          >
            {manifestoLines.map((line, i) => (
              <span key={i} className="block reveal-on-scroll" style={{ animationDelay: `${i * 50}ms` }}>
                {i === 2 ? <em className="font-display italic">{line}</em> : line}
              </span>
            ))}
            {/* Sweeping highlight line */}
            <motion.span
              className="absolute -left-4 right-0 top-1/2 h-[1px] bg-oxblood origin-left pointer-events-none"
              style={{ x: sweepX }}
            />
          </h2>

          <div className="mt-20 grid grid-cols-12 gap-8 max-w-[68ch]">
            <p className="col-span-12 md:col-span-7 font-display text-ink-2 leading-[1.55] reveal-on-scroll" style={{ fontSize: "17px" }}>
              We don't out-source movement parts. We don't issue marketing campaigns.
              We don't release new collections every year. The watches we make
              spend years in development and weeks in finishing — and the people
              who own them tend to keep them for a lifetime.
            </p>
            <div className="col-span-12 md:col-span-5 reveal-on-scroll">
              <Detail label="Production" value="27 pieces / yr" />
              <Detail label="Atelier" value="Vandœuvres, CH" />
              <Detail label="Founded" value="2019" />
              <Detail label="Calibers" value="HC.7 · HC.9 · HC.12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between py-3 border-b border-rule">
      <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-3">{label}</span>
      <span className="font-display text-ink text-[14px]">{value}</span>
    </div>
  );
}
