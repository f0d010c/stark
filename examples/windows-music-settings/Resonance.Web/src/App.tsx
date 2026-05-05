import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TitleBar } from "./components/TitleBar";
import { Sidebar } from "./components/Sidebar";
import { PlaybackBar } from "./components/PlaybackBar";
import { NowPlaying } from "./pages/NowPlaying";
import { Library } from "./pages/Library";
import { Browse } from "./pages/Browse";
import { Settings } from "./pages/Settings";

type Page = "now" | "library" | "browse" | "radio" | "settings";

export default function App() {
  const [page, setPage] = useState<Page>("now");

  return (
    <div className="h-full flex flex-col bg-stone-950/40">
      <TitleBar />
      <div className="flex-1 flex min-h-0">
        <Sidebar page={page} onNav={setPage} />
        <main className="flex-1 relative min-w-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0"
            >
              {page === "now" && <NowPlaying />}
              {page === "library" && <Library />}
              {page === "browse" && <Browse />}
              {page === "radio" && <Browse />}
              {page === "settings" && <Settings />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <PlaybackBar />
    </div>
  );
}
