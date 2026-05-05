import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { WatchFace } from "./WatchFace";

const headlineLines = ["A reading", "on the difficulty", "of the second hand."];

export function Hero() {
  // Tick the seconds hand of hero watch
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((s) => (s + 1) % 60), 1000);
    return () => clearInterval(t);
  }, []);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -120]);
  const watchScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.85]);
  const watchY = useTransform(scrollYProgress, [0, 0.2], [0, 60]);

  return (
    <section className="relative min-h-screen flex items-center px-12 lg:px-20 pt-32 pb-24 overflow-hidden">
      {/* Atmospheric glow — subtle, paper-tinted */}
      <div
        className="absolute -top-40 -right-40 w-[55%] aspect-square rounded-full blur-3xl opacity-50 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(180,150,100,0.25) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 grid grid-cols-12 gap-8 w-full items-center">
        {/* Hero text — letter-staggered reveal */}
        <motion.div
          className="col-span-12 lg:col-span-7 z-10"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-[1px] bg-oxblood" />
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-2">
              Independent · Switzerland · Est. 2019
            </span>
          </div>

          <h1
            className="font-display font-medium text-ink leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(48px, 8.5vw, 144px)" }}
          >
            {headlineLines.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                {line.split(" ").map((word, wi, arr) => (
                  <motion.span
                    key={`${li}-${wi}`}
                    className="inline-block hover-weight"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 130,
                      damping: 20,
                      delay: 0.1 + (li * 0.18) + (wi * 0.04),
                    }}
                    style={{ marginRight: wi < arr.length - 1 ? "0.25em" : 0 }}
                  >
                    {li === 0 && wi === 0 ? <em className="font-display italic">{word}</em> : word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className="font-display italic text-ink-2 max-w-[42ch] mt-12"
            style={{ fontSize: "clamp(15px, 1.4vw, 19px)", lineHeight: 1.55 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200, damping: 25 }}
          >
            Hayes &amp; Co. is an independent watchmaker working from a small atelier outside Geneva.
            Our movements are designed and finished by hand. Twenty-seven pieces a year, no more.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <Button>Browse the archive</Button>
            <Button variant="ghost">Read the journal</Button>
          </motion.div>
        </motion.div>

        {/* Watch face — interactive 3D tilt */}
        <motion.div
          className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end relative"
          style={{ scale: watchScale, y: watchY }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 150, damping: 22 }}
          >
            <WatchFace
              hour={10}
              minute={12}
              second={tick}
              size={520}
              accent="silver"
              interactive
              className="drop-shadow-[0_40px_60px_rgba(20,15,10,0.18)]"
            />
            {/* Soft drop shadow plate */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full bg-ink/15 blur-2xl pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{ opacity: heroOpacity }}
      >
        <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3">Scroll</span>
        <span className="block w-[1px] h-8 bg-ink-3 origin-top animate-pulse" />
      </motion.div>
    </section>
  );
}

function Button({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "ghost" }) {
  if (variant === "ghost") {
    return (
      <button className="text-[13px] tracking-wide text-ink-2 hover:text-ink underline underline-offset-[6px] decoration-rule hover:decoration-ink transition-colors">
        {children}
      </button>
    );
  }
  return (
    <button className="group relative px-6 py-3 text-[13px] tracking-wide text-paper bg-ink rounded-full hover:bg-oxblood transition-colors overflow-hidden">
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8m0 0L6 2m4 4L6 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </span>
    </button>
  );
}
