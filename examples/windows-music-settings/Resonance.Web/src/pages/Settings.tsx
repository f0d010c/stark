import { useState } from "react";

export function Settings() {
  const [streaming, setStreaming] = useState("Lossless · ALAC 24-bit / 48 kHz");
  const [eq, setEq] = useState("Flat");
  const [soundCheck, setSoundCheck] = useState(true);
  const [crossfade, setCrossfade] = useState(6);
  const [animatedArt, setAnimatedArt] = useState(true);
  const [haptics, setHaptics] = useState(true);

  return (
    <div className="h-full overflow-y-auto px-16 pt-10 pb-44">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="block w-8 h-[2px] bg-brand-500" />
          <span className="font-mono text-[10px] tracking-[0.32em] uppercase font-semibold text-stone-400">Settings</span>
        </div>
        <h1 className="font-display font-extrabold text-[56px] leading-[0.95] tracking-tight">Tune Resonance</h1>
        <p className="font-display italic text-stone-300 text-[16px] mt-3">Resonance · 4.2.0 (1872) · Berlin</p>

        <Section title="Audio">
          <Row label="Streaming" sub="Quality on Wi-Fi and cellular">
            <SelectPill value={streaming} options={["High Efficiency · AAC 64 kbps", "High Quality · AAC 256 kbps", "Lossless · ALAC 24-bit / 48 kHz", "Hi-Res Lossless · 24-bit / 192 kHz"]} onChange={setStreaming} />
          </Row>
          <Row label="Equalizer" sub="Adjust frequency response">
            <SelectPill value={eq} options={["Flat","Acoustic","Bass Booster","Classical","Electronic","Hip-Hop","Jazz","Pop","Rock"]} onChange={setEq} />
          </Row>
          <Row label="Sound Check" sub="Normalize loudness across tracks">
            <Toggle value={soundCheck} onChange={setSoundCheck} />
          </Row>
        </Section>

        <Section title="Playback">
          <Row label="Crossfade" sub={`Blend the end of one track into the next · ${crossfade}s`}>
            <input type="range" min={0} max={12} step={1} value={crossfade} onChange={(e) => setCrossfade(Number(e.target.value))} className="w-48" />
          </Row>
          <Row label="Animated album art" sub="Subtle motion on the now-playing surface">
            <Toggle value={animatedArt} onChange={setAnimatedArt} />
          </Row>
          <Row label="Haptics">
            <Toggle value={haptics} onChange={setHaptics} />
          </Row>
        </Section>

        <Section title="About">
          <Row label="Version">
            <span className="font-mono text-[12px] text-stone-400">4.2.0 (1872)</span>
          </Row>
          <Row label="Sign Out">
            <button className="px-4 py-1.5 rounded-md border border-brand-500/40 text-brand-300 hover:bg-brand-500/10 text-[13px]">
              Sign out
            </button>
          </Row>
        </Section>

        <p className="font-mono text-[11px] text-stone-600 mt-12">© 2026 Resonance Audio Labs · Made in Berlin</p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-2.5 mb-5">
        <span className="font-mono text-[10px] tracking-[0.32em] uppercase font-semibold text-stone-500">{title}</span>
        <span className="block flex-1 h-[1px] bg-white/[0.06]" />
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

function Row({ label, sub, children }: { label: string; sub?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-6 py-4 border-b border-white/[0.04] last:border-b-0">
      <div className="min-w-0">
        <div className="font-display text-[16px]">{label}</div>
        {sub && <div className="text-[12px] text-stone-400 mt-0.5">{sub}</div>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`relative w-11 h-6 rounded-full transition-colors ${value ? "bg-brand-500" : "bg-stone-700"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${value ? "translate-x-5" : ""}`}
      />
    </button>
  );
}

function SelectPill({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-1.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-[12px] text-stone-200 outline-none hover:border-white/20 cursor-pointer max-w-[280px]"
    >
      {options.map((o) => <option key={o} value={o} className="bg-stone-900">{o}</option>)}
    </select>
  );
}
