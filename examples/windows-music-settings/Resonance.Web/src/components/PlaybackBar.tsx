import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, ListMusic, Heart } from "lucide-react";
import { usePlayback, formatTime } from "../store/playback";

export function PlaybackBar() {
  const s = usePlayback();
  const progress = s.position / s.current.duration;

  return (
    <div
      className="relative h-24 flex items-center border-t border-white/[0.06] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(90deg, ${s.current.from}99 0%, ${s.current.to}99 100%)`,
      }}
    >
      {/* Dark scrim for legibility */}
      <div className="absolute inset-0 bg-stone-950/65" />
      <div className="noise-overlay" />

      <div className="relative z-10 flex items-center w-full px-5 gap-6">
        {/* Now playing chip */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div
            className="w-14 h-14 rounded-md shrink-0"
            style={{ backgroundImage: `linear-gradient(135deg, ${s.current.from} 0%, ${s.current.to} 100%)` }}
          />
          <div className="min-w-0">
            <div className="font-display font-semibold text-[15px] truncate">{s.current.title}</div>
            <div className="font-display italic text-[12px] text-white/70 truncate">{s.current.artist}</div>
          </div>
          <button className="w-9 h-9 ml-1 flex items-center justify-center rounded-full text-white/70 hover:text-brand-300 hover:bg-white/5 transition-colors">
            <Heart size={14} />
          </button>
        </div>

        {/* Center: transport + scrubber */}
        <div className="flex flex-col items-center gap-1.5 w-[42%] max-w-[640px]">
          <div className="flex items-center gap-1">
            <IconBtn onClick={s.toggleShuffle} active={s.shuffle}><Shuffle size={13} /></IconBtn>
            <IconBtn onClick={s.prev}><SkipBack size={14} /></IconBtn>
            <button
              onClick={s.togglePlay}
              className="w-10 h-10 mx-1 flex items-center justify-center rounded-full bg-white text-stone-950 hover:scale-105 active:scale-95 transition-transform"
            >
              {s.isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
            </button>
            <IconBtn onClick={s.next}><SkipForward size={14} /></IconBtn>
            <IconBtn onClick={s.cycleRepeat} active={s.repeat !== "off"}><Repeat size={13} /></IconBtn>
          </div>
          <div className="flex items-center gap-3 w-full">
            <span className="font-mono text-[10px] text-white/70 tabular-nums w-9 text-right">{formatTime(s.position)}</span>
            <input
              type="range"
              min={0}
              max={s.current.duration}
              step={0.5}
              value={s.position}
              onChange={(e) => s.seek(Number(e.target.value))}
              className="flex-1"
              style={{
                background: `linear-gradient(to right, white 0%, white ${progress * 100}%, rgba(255,255,255,0.15) ${progress * 100}%, rgba(255,255,255,0.15) 100%)`,
              }}
            />
            <span className="font-mono text-[10px] text-white/70 tabular-nums w-9">{formatTime(s.current.duration)}</span>
          </div>
        </div>

        {/* Right: queue + volume */}
        <div className="flex items-center gap-2 flex-1 justify-end min-w-0">
          <IconBtn><ListMusic size={14} /></IconBtn>
          <Volume2 size={13} className="text-white/70 ml-2" />
          <input
            type="range"
            min={0} max={1} step={0.01}
            value={s.volume}
            onChange={(e) => s.setVolume(Number(e.target.value))}
            className="w-24"
            style={{
              background: `linear-gradient(to right, white 0%, white ${s.volume * 100}%, rgba(255,255,255,0.15) ${s.volume * 100}%, rgba(255,255,255,0.15) 100%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function IconBtn({ children, onClick, active }: { children: React.ReactNode; onClick?: () => void; active?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
        active ? "text-brand-300" : "text-white/85 hover:text-white"
      } hover:bg-white/[0.08]`}
    >
      {children}
    </button>
  );
}
