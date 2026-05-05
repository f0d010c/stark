/**
 * Pure CSS marquee — band of repeating words. Works without JS.
 */
export function Marquee() {
  const items = [
    "Hand finished",
    "Twenty-seven pieces a year",
    "Vandœuvres, Switzerland",
    "Mechanical only",
    "No outsourcing",
    "Made to outlast us",
  ];
  return (
    <div className="relative py-16 border-y border-rule overflow-hidden">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-16 px-8 shrink-0">
            {items.map((it, i) => (
              <div key={`${dup}-${i}`} className="flex items-center gap-16 shrink-0">
                <span
                  className="font-display whitespace-nowrap text-ink-2"
                  style={{ fontSize: "clamp(28px, 4vw, 64px)" }}
                >
                  <em className="italic">{it}</em>
                </span>
                <span className="block w-2 h-2 rounded-full bg-oxblood shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
