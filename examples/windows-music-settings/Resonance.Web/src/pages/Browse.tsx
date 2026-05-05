export function Browse() {
  return (
    <div className="h-full px-16 pt-10 pb-44">
      <div className="flex items-center gap-2.5 mb-2">
        <span className="block w-8 h-[2px] bg-brand-500" />
        <span className="font-mono text-[10px] tracking-[0.32em] uppercase font-semibold text-stone-400">Browse</span>
      </div>
      <h1 className="font-display font-extrabold text-[64px] leading-[0.95] tracking-tight">Discover something new</h1>
      <p className="font-display italic text-stone-300 text-[18px] mt-3">Coming soon — editorial picks, charts, genres.</p>
    </div>
  );
}
