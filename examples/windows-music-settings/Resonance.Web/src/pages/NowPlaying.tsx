import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Heart, Plus, Share2 } from "lucide-react";
import { usePlayback, formatTime } from "../store/playback";
import { AlbumArtwork } from "../components/AlbumArtwork";

export function NowPlaying() {
  const s = usePlayback();
  const t = s.current;

  return (
    <div className="relative h-full overflow-hidden">
      {/* Hero atmosphere — multilayer gradient + glows + grain */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, transparent 0%, transparent 30%, ${t.from}40 70%, ${t.to}80 100%)`,
          }}
        />
        {/* Top-right glow */}
        <div
          className="absolute -top-32 -right-32 w-[60%] aspect-square rounded-full blur-3xl opacity-40"
          style={{ backgroundImage: `radial-gradient(circle, ${t.from} 0%, transparent 65%)` }}
        />
        {/* Bottom-left glow */}
        <div
          className="absolute -bottom-32 -left-32 w-[55%] aspect-square rounded-full blur-3xl opacity-30"
          style={{ backgroundImage: `radial-gradient(circle, ${t.to} 0%, transparent 65%)` }}
        />
        <div className="noise-overlay" />
      </div>

      {/* Hero content */}
      <div className="relative h-full grid grid-cols-[auto_1fr] gap-12 px-16 pt-12 pb-44 overflow-y-auto">
        {/* Left: artwork */}
        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            <AlbumArtwork
              key={t.id}
              from={t.from}
              to={t.to}
              title={t.album}
              artist={t.artist}
              year={t.year}
              size={460}
            />
          </AnimatePresence>
        </div>

        {/* Right: info + transport */}
        <div className="flex flex-col justify-center gap-4 max-w-[640px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="block w-8 h-[2px] bg-brand-500" />
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase font-semibold text-stone-400">
              Now Playing
            </span>
          </div>

          {/* Title — display serif */}
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <h1 className="font-display font-extrabold text-[88px] leading-[0.92] tracking-tight text-white">
                {t.title}
              </h1>
              <div className="flex items-center gap-3 mt-4">
                <p className="font-display italic text-[22px] text-stone-200">{t.artist}</p>
                <span className="block w-8 h-[1px] bg-stone-500" />
                <p className="text-[13px] text-stone-400">{t.album}</p>
                <span className="block w-1 h-1 rounded-full bg-stone-600" />
                <p className="font-mono text-[12px] text-stone-500">{t.year}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Scrubber */}
          <div className="mt-8 flex items-center gap-3">
            <span className="font-mono text-[11px] text-stone-400 tabular-nums w-9 text-right">
              {formatTime(s.position)}
            </span>
            <input
              type="range"
              min={0}
              max={t.duration}
              step={0.5}
              value={s.position}
              onChange={(e) => s.seek(Number(e.target.value))}
              className="flex-1"
              style={{
                background: `linear-gradient(to right, white 0%, white ${(s.position/t.duration)*100}%, rgba(255,255,255,0.12) ${(s.position/t.duration)*100}%, rgba(255,255,255,0.12) 100%)`,
              }}
            />
            <span className="font-mono text-[11px] text-stone-400 tabular-nums w-9">
              {formatTime(t.duration)}
            </span>
          </div>

          {/* Transport */}
          <div className="flex items-center gap-2 mt-2">
            <CircleBtn onClick={s.toggleShuffle} active={s.shuffle}><Shuffle size={16} /></CircleBtn>
            <CircleBtn onClick={s.prev}><SkipBack size={18} /></CircleBtn>
            <div className="relative mx-2">
              <div className="absolute inset-0 rounded-full border border-brand-500/40 scale-110" />
              <button
                onClick={s.togglePlay}
                className="relative w-16 h-16 rounded-full bg-brand-500 hover:bg-brand-400 active:scale-95 transition-all flex items-center justify-center text-white shadow-[0_8px_30px_rgb(197_48_48_/_0.5)]"
              >
                {s.isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-0.5" />}
              </button>
            </div>
            <CircleBtn onClick={s.next}><SkipForward size={18} /></CircleBtn>
            <CircleBtn onClick={s.cycleRepeat} active={s.repeat !== "off"}><Repeat size={16} /></CircleBtn>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 mt-6">
            <SmallActionBtn><Heart size={13} /><span>Like</span></SmallActionBtn>
            <SmallActionBtn><Plus size={13} /><span>Add to playlist</span></SmallActionBtn>
            <SmallActionBtn><Share2 size={13} /><span>Share</span></SmallActionBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

function CircleBtn({ children, onClick, active }: { children: React.ReactNode; onClick?: () => void; active?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
        active ? "text-brand-300" : "text-stone-200 hover:text-white"
      } hover:bg-white/[0.08]`}
    >
      {children}
    </button>
  );
}

function SmallActionBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex items-center gap-1.5 px-3 py-2 rounded-full text-[12px] text-stone-300 hover:text-white border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-colors">
      {children}
    </button>
  );
}
