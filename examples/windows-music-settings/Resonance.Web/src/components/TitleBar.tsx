import { Minus, Square, X } from "lucide-react";
import { getCurrentWindow } from "@tauri-apps/api/window";

export function TitleBar() {
  const win = (() => { try { return getCurrentWindow(); } catch { return null; } })();

  return (
    <div
      data-tauri-drag-region
      className="h-12 flex items-center px-5 select-none border-b border-white/[0.04]"
    >
      {/* Brand mark */}
      <div className="flex items-center gap-2.5">
        <span className="block w-[3px] h-3.5 bg-brand-500" />
        <span className="font-display font-semibold text-[14px]">Resonance</span>
        <span className="text-stone-600">·</span>
        <span className="font-mono text-[9px] tracking-[0.32em] uppercase text-stone-500">
          Music for listening
        </span>
      </div>

      <div className="flex-1" />

      {/* Window controls (only show in Tauri context) */}
      {win && (
        <div className="flex items-center -mr-3">
          <button
            onClick={() => win.minimize()}
            className="w-11 h-12 flex items-center justify-center text-stone-400 hover:bg-white/[0.04] transition-colors"
          >
            <Minus size={14} />
          </button>
          <button
            onClick={async () => (await win.isMaximized()) ? win.unmaximize() : win.maximize()}
            className="w-11 h-12 flex items-center justify-center text-stone-400 hover:bg-white/[0.04] transition-colors"
          >
            <Square size={11} />
          </button>
          <button
            onClick={() => win.close()}
            className="w-11 h-12 flex items-center justify-center text-stone-400 hover:bg-red-500 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
