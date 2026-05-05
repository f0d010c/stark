import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { WATCHES } from "../data/watches";
import { WatchFace } from "./WatchFace";

export function References() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section ref={ref} className="relative px-12 lg:px-20 py-32 lg:py-44 bg-paper-2/60">
      <div className="grid grid-cols-12 gap-8 mb-20">
        <motion.div className="col-span-12 lg:col-span-12" style={{ y: titleY }}>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3">§ 02</span>
            <span className="block w-8 h-[1px] bg-rule" />
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3">References in production</span>
          </div>
          <h2
            className="font-display font-medium text-ink mt-6 leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(40px, 7vw, 112px)" }}
          >
            Three calibers,<br />
            <em className="font-display italic">three readings on time.</em>
          </h2>
        </motion.div>
      </div>

      <div className="space-y-32 lg:space-y-44">
        {WATCHES.map((w, i) => {
          const isAlt = i % 2 === 1;
          return (
            <article
              key={w.id}
              className="grid grid-cols-12 gap-8 items-center reveal-on-scroll"
              onPointerEnter={() => setHovered(w.id)}
              onPointerLeave={() => setHovered(null)}
            >
              {/* Watch — 5 cols, alternating sides */}
              <div className={`col-span-12 lg:col-span-5 ${isAlt ? "lg:col-start-8 order-1 lg:order-2" : ""} flex justify-center`}>
                <motion.div
                  animate={{ scale: hovered === w.id ? 1.04 : 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 22 }}
                >
                  <WatchFace
                    hour={w.hands.hour}
                    minute={w.hands.minute}
                    second={w.hands.second}
                    accent={w.accent}
                    size={420}
                    interactive
                  />
                </motion.div>
              </div>

              {/* Copy — 6 cols, alternating */}
              <div className={`col-span-12 lg:col-span-6 ${isAlt ? "lg:col-start-1 lg:row-start-1 order-2 lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3">{w.series}</span>
                  <span className="block w-6 h-[1px] bg-rule" />
                  <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-3">Ref. {w.reference}</span>
                </div>
                <h3
                  className="font-display font-medium text-ink leading-[1.0] tracking-tight"
                  style={{ fontSize: "clamp(32px, 4.6vw, 72px)" }}
                >
                  {w.name}
                </h3>
                <p className="font-display italic text-ink-2 mt-6 max-w-[44ch]" style={{ fontSize: "17px", lineHeight: 1.55 }}>
                  {w.description}
                </p>

                <dl className="grid grid-cols-2 gap-x-8 gap-y-2 mt-10 max-w-md">
                  <Spec label="Caliber" value={w.caliber} />
                  <Spec label="Diameter" value={`${w.diameter} mm`} />
                  <Spec label="Thickness" value={`${w.thickness} mm`} />
                  <Spec label="Power" value={`${w.power} h`} />
                  <Spec label="Jewels" value={`${w.jewels}`} />
                  <Spec label="Year" value={w.year} />
                </dl>

                <button className="mt-12 group inline-flex items-center gap-3 text-[13px] tracking-wide text-ink hover:text-oxblood transition-colors">
                  <span className="block w-12 h-[1px] bg-ink group-hover:bg-oxblood transition-colors" />
                  <span>Request introduction</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-3 self-end pb-1">{label}</dt>
      <dd className="font-display text-ink text-[15px] border-b border-rule pb-1">{value}</dd>
    </>
  );
}
