import { motion } from "motion/react";
import { Disc3, Library, Compass, Radio, Settings as SettingsIcon, Search } from "lucide-react";
import { PLAYLISTS } from "../data/tracks";

type Page = "now" | "library" | "browse" | "radio" | "settings";

type Props = {
  page: Page;
  onNav: (p: Page) => void;
};

const navItems: { id: Page; label: string; Icon: typeof Disc3 }[] = [
  { id: "now",      label: "Now Playing", Icon: Disc3 },
  { id: "library",  label: "Library",     Icon: Library },
  { id: "browse",   label: "Browse",      Icon: Compass },
  { id: "radio",    label: "Radio",       Icon: Radio },
];

export function Sidebar({ page, onNav }: Props) {
  return (
    <aside className="w-64 shrink-0 border-r border-white/[0.06] flex flex-col">
      {/* Search */}
      <div className="p-5 pb-3">
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.05] border border-white/[0.06]">
          <Search size={14} className="text-stone-400" />
          <input
            placeholder="Search music"
            className="bg-transparent outline-none text-[13px] text-stone-100 placeholder-stone-500 flex-1"
          />
          <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/[0.06] text-stone-400">⌘K</kbd>
        </div>
      </div>

      <div className="px-3 pb-3 overflow-y-auto flex-1">
        {/* Library section */}
        <div className="px-3 pt-3 pb-1">
          <div className="font-mono text-[9px] tracking-[0.32em] uppercase text-stone-500 font-semibold">Library</div>
        </div>
        <nav className="flex flex-col gap-0.5">
          {navItems.map(({ id, label, Icon }) => {
            const active = page === id;
            return (
              <button
                key={id}
                onClick={() => onNav(id)}
                className={`relative flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] transition-colors ${
                  active ? "text-white bg-white/[0.06]" : "text-stone-300 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-brand-500"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon size={14} />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        {/* Playlists section */}
        <div className="px-3 pt-6 pb-1">
          <div className="font-mono text-[9px] tracking-[0.32em] uppercase text-stone-500 font-semibold">Playlists</div>
        </div>
        <nav className="flex flex-col gap-0.5">
          {PLAYLISTS.map((p) => (
            <button
              key={p.id}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-stone-300 hover:text-white hover:bg-white/[0.03] transition-colors"
            >
              <span className="block w-[3px] h-4 rounded-full" style={{ background: p.color }} />
              <span className="font-display text-[14px]">{p.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-white/[0.06]">
        <button
          onClick={() => onNav("settings")}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] w-full transition-colors ${
            page === "settings" ? "text-white bg-white/[0.06]" : "text-stone-300 hover:text-white hover:bg-white/[0.03]"
          }`}
        >
          <SettingsIcon size={14} />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}
