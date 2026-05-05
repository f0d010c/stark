import { motion } from "motion/react";
import { ALBUMS } from "../data/tracks";
import { usePlayback } from "../store/playback";

export function Library() {
  const playTrack = usePlayback((s) => s.playTrack);
  const featured = ALBUMS.slice(0, 3);
  const rest = ALBUMS.slice(3);

  return (
    <div className="h-full overflow-y-auto px-16 pt-10 pb-44">
      {/* Editorial header */}
      <div className="max-w-5xl">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="block w-8 h-[2px] bg-brand-500" />
          <span className="font-mono text-[10px] tracking-[0.32em] uppercase font-semibold text-stone-400">
            The library
          </span>
        </div>
        <h1 className="font-display font-extrabold text-[64px] leading-[0.95] tracking-tight">
          What you've been<br/>listening to
        </h1>
        <p className="font-display italic text-stone-300 text-[18px] mt-3">
          Albums, EPs and singles in your collection — no algorithm, just your taste.
        </p>
      </div>

      {/* Featured */}
      <div className="mt-12">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="font-mono text-[10px] tracking-[0.32em] uppercase font-semibold text-stone-500">Featured</span>
          <span className="block flex-1 h-[1px] bg-white/[0.06]" />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {featured.map((album, i) => (
            <motion.button
              key={album.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              onClick={() => playTrack(album.tracks[0])}
              className="relative aspect-square rounded-2xl overflow-hidden text-left group"
              style={{ backgroundImage: `linear-gradient(135deg, ${album.from} 0%, ${album.to} 100%)` }}
            >
              {/* Glow */}
              <div className="absolute -top-12 -right-16 w-3/5 aspect-square rounded-full blur-2xl opacity-50"
                style={{ backgroundImage: `radial-gradient(circle, white 0%, ${album.from} 35%, transparent 70%)` }} />
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full border border-white/40" />
              <div className="absolute left-[-15%] right-[-15%] top-1/2 h-32 -translate-y-1/2 -rotate-[14deg] bg-white/[0.08]" />
              <div className="noise-overlay" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/55" />

              <div className="absolute inset-0 p-7 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <span className="block w-5 h-[2px] bg-white/85" />
                  <span className="font-mono text-[9px] tracking-[0.32em] uppercase font-semibold text-white/85">{album.year}</span>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-white text-[28px] leading-[1.0] tracking-tight">{album.title}</h3>
                  <p className="font-display italic text-white/85 text-[14px] mt-2">{album.artist}</p>
                </div>
              </div>

              {/* Hover play indicator */}
              <div className="absolute right-5 bottom-5 w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M3 2l11 6-11 6V2z"/></svg>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* All albums */}
      <div className="mt-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="font-mono text-[10px] tracking-[0.32em] uppercase font-semibold text-stone-500">All albums</span>
          <span className="block flex-1 h-[1px] bg-white/[0.06]" />
        </div>
        <div className="grid grid-cols-5 gap-5">
          {rest.map((album, i) => (
            <motion.button
              key={album.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              onClick={() => playTrack(album.tracks[0])}
              className="text-left group"
            >
              <div
                className="relative aspect-square rounded-xl overflow-hidden mb-3"
                style={{ backgroundImage: `linear-gradient(135deg, ${album.from} 0%, ${album.to} 100%)` }}
              >
                <div className="absolute -top-6 -right-8 w-2/5 aspect-square rounded-full blur-xl opacity-50"
                  style={{ backgroundImage: `radial-gradient(circle, white 0%, ${album.from} 35%, transparent 70%)` }} />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/30" />
                <div className="absolute left-[-15%] right-[-15%] top-1/2 h-16 -translate-y-1/2 -rotate-[14deg] bg-white/[0.08]" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/45" />
                <div className="noise-overlay" />
              </div>
              <h3 className="font-display font-bold text-[15px] leading-[1.2] truncate">{album.title}</h3>
              <p className="text-[11px] text-stone-400 truncate mt-0.5">{album.artist}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
