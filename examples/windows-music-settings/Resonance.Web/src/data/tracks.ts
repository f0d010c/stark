export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: string;
  duration: number; // seconds
  from: string;     // gradient stop 1
  to: string;       // gradient stop 2
  accent: string;   // brand-extracted accent
};

export const TRACKS: Track[] = [
  { id: "01", title: "Apricot Princess",  artist: "Rex Orange County",   album: "Apricot Princess",   year: "2017", duration: 218, from: "#F4B860", to: "#C53030", accent: "#E8743C" },
  { id: "02", title: "Saturn",            artist: "Sleeping at Last",    album: "Atlas: Space",       year: "2014", duration: 286, from: "#A78BFA", to: "#312E81", accent: "#7C3AED" },
  { id: "03", title: "Time",              artist: "Hans Zimmer",         album: "Inception OST",      year: "2010", duration: 252, from: "#22D3EE", to: "#0C4A6E", accent: "#0EA5E9" },
  { id: "04", title: "In the End",        artist: "Linkin Park",         album: "Hybrid Theory",      year: "2000", duration: 217, from: "#94A3B8", to: "#1E293B", accent: "#475569" },
  { id: "05", title: "Heat Waves",        artist: "Glass Animals",       album: "Dreamland",          year: "2020", duration: 238, from: "#F472B6", to: "#831843", accent: "#EC4899" },
  { id: "06", title: "Adagio in D Minor", artist: "John Murphy",         album: "Sunshine OST",       year: "2007", duration: 358, from: "#FBBF24", to: "#92400E", accent: "#F59E0B" },
  { id: "07", title: "Bloodstream",       artist: "Tokio Myers",         album: "Our Generation",     year: "2017", duration: 197, from: "#34D399", to: "#064E3B", accent: "#10B981" },
  { id: "08", title: "Strobe",            artist: "deadmau5",            album: "For Lack of a Better Name", year: "2009", duration: 634, from: "#60A5FA", to: "#1E3A8A", accent: "#3B82F6" },
  { id: "09", title: "Nightcall",         artist: "Kavinsky",            album: "Outrun",             year: "2013", duration: 257, from: "#F87171", to: "#7F1D1D", accent: "#EF4444" },
  { id: "10", title: "Sun",               artist: "Two Door Cinema Club", album: "Beacon",            year: "2012", duration: 215, from: "#FDE047", to: "#713F12", accent: "#FACC15" },
  { id: "11", title: "Howling",           artist: "RY X & Frank Wiedemann", album: "Dawn",            year: "2016", duration: 412, from: "#A5B4FC", to: "#3730A3", accent: "#6366F1" },
  { id: "12", title: "Open Eye Signal",   artist: "Jon Hopkins",         album: "Immunity",           year: "2013", duration: 482, from: "#86EFAC", to: "#14532D", accent: "#22C55E" },
];

export type Album = {
  title: string;
  artist: string;
  year: string;
  from: string;
  to: string;
  tracks: Track[];
};

export const ALBUMS: Album[] = Object.values(
  TRACKS.reduce<Record<string, Album>>((acc, t) => {
    if (!acc[t.album]) {
      acc[t.album] = { title: t.album, artist: t.artist, year: t.year, from: t.from, to: t.to, tracks: [t] };
    } else {
      acc[t.album].tracks.push(t);
    }
    return acc;
  }, {})
);

export const PLAYLISTS = [
  { id: "late-nights",    name: "Late Nights",      color: "#FC8181" },
  { id: "saturn-evenings", name: "Saturn Evenings", color: "#7C3AED" },
  { id: "long-drives",    name: "Long Drives",      color: "#FACC15" },
  { id: "coffee-code",    name: "Coffee & Code",    color: "#10B981" },
  { id: "heat-waves",     name: "Heat Waves",       color: "#EC4899" },
  { id: "deep-focus",     name: "Deep Focus",       color: "#0EA5E9" },
  { id: "sunday-archive", name: "Sunday Archive",   color: "#F59E0B" },
];
