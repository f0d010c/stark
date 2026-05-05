import { motion } from "motion/react";
import type { CSSProperties } from "react";

type Props = {
  from: string;
  to: string;
  title: string;
  artist: string;
  year: string;
  size?: number;
  className?: string;
};

export function AlbumArtwork({ from, to, title, artist, year, size = 480, className }: Props) {
  const style: CSSProperties = {
    width: size,
    height: size,
    backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`relative rounded-3xl overflow-hidden ${className || ""}`}
      style={style}
    >
      {/* Big glowing orb (top right) */}
      <div
        className="absolute -top-12 -right-16 w-[60%] aspect-square rounded-full blur-2xl opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at 35% 35%, white 0%, ${from} 35%, transparent 70%)`,
        }}
      />
      {/* Orbital ring */}
      <div className="absolute top-12 right-12 w-24 h-24 rounded-full border border-white/40" />
      {/* Smaller orbital ring */}
      <div className="absolute top-20 right-20 w-12 h-12 rounded-full border border-white/25" />

      {/* Diagonal stripe across art */}
      <div
        className="absolute left-[-15%] right-[-15%] top-1/2 h-32 -translate-y-1/2 -rotate-[14deg] bg-white/[0.10]"
      />

      {/* Inner top highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 40%)" }}
      />
      {/* Bottom darken for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.50) 100%)" }}
      />

      {/* Grain */}
      <div className="noise-overlay" />

      {/* Wordmark — top */}
      <div className="absolute top-7 left-7 right-7 flex flex-col gap-1.5">
        <div className="w-6 h-[2px] bg-white/85" />
        <div className="font-mono text-[10px] tracking-[0.32em] text-white/85 font-semibold uppercase">{year}</div>
      </div>

      {/* Wordmark — bottom */}
      <div className="absolute left-7 right-7 bottom-7">
        <h2 className="font-display font-extrabold text-white leading-[1.0]" style={{ fontSize: size * 0.075 }}>
          {title}
        </h2>
        <p className="font-display italic text-white/95 mt-2" style={{ fontSize: size * 0.032 }}>
          {artist}
        </p>
      </div>
    </motion.div>
  );
}
