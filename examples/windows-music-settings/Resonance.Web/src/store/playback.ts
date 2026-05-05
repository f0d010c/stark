import { create } from "zustand";
import { TRACKS, type Track } from "../data/tracks";

type RepeatMode = "off" | "all" | "one";

type PlaybackState = {
  queue: Track[];
  index: number;
  current: Track;
  isPlaying: boolean;
  position: number;       // seconds (0..duration)
  volume: number;         // 0..1
  shuffle: boolean;
  repeat: RepeatMode;

  togglePlay: () => void;
  next: () => void;
  prev: () => void;
  seek: (s: number) => void;
  setVolume: (v: number) => void;
  toggleShuffle: () => void;
  cycleRepeat: () => void;
  load: (i: number) => void;
  playTrack: (t: Track) => void;
};

let timer: ReturnType<typeof setInterval> | null = null;

export const usePlayback = create<PlaybackState>((set, get) => ({
  queue: TRACKS,
  index: 0,
  current: TRACKS[0],
  isPlaying: false,
  position: 0,
  volume: 0.8,
  shuffle: false,
  repeat: "off",

  togglePlay: () => {
    const next = !get().isPlaying;
    set({ isPlaying: next });
    if (next) {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        const s = get();
        const np = s.position + 0.25;
        if (np >= s.current.duration) {
          if (s.repeat === "one") set({ position: 0 });
          else get().next();
        } else {
          set({ position: np });
        }
      }, 250);
    } else {
      if (timer) { clearInterval(timer); timer = null; }
    }
  },

  next: () => {
    const s = get();
    const i = (s.index + 1) % s.queue.length;
    set({ index: i, current: s.queue[i], position: 0 });
  },

  prev: () => {
    const s = get();
    if (s.position > 3) { set({ position: 0 }); return; }
    const i = (s.index - 1 + s.queue.length) % s.queue.length;
    set({ index: i, current: s.queue[i], position: 0 });
  },

  seek: (s) => set({ position: Math.max(0, Math.min(s, get().current.duration)) }),
  setVolume: (v) => set({ volume: Math.max(0, Math.min(1, v)) }),
  toggleShuffle: () => set({ shuffle: !get().shuffle }),
  cycleRepeat: () => {
    const order: RepeatMode[] = ["off", "all", "one"];
    const i = order.indexOf(get().repeat);
    set({ repeat: order[(i + 1) % order.length] });
  },

  load: (i) => {
    const idx = ((i % TRACKS.length) + TRACKS.length) % TRACKS.length;
    set({ index: idx, current: TRACKS[idx], position: 0 });
  },

  playTrack: (t) => {
    const i = TRACKS.findIndex(x => x.id === t.id);
    if (i >= 0) {
      set({ index: i, current: TRACKS[i], position: 0 });
      if (!get().isPlaying) get().togglePlay();
    }
  }
}));

export const formatTime = (s: number) => {
  const sec = Math.max(0, Math.floor(s));
  const m = Math.floor(sec / 60);
  const r = sec % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
};
