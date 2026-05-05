export function Footer() {
  return (
    <footer className="relative px-12 lg:px-20 pt-32 pb-16 border-t border-rule">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-6">
          <h2
            className="font-display font-medium text-ink leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(48px, 9vw, 168px)" }}
          >
            <em className="italic">Hayes &amp;</em> Co.
          </h2>
          <p className="font-display italic text-ink-2 mt-6 max-w-md" style={{ fontSize: "16px" }}>
            Independent watchmaker.<br />
            Vandœuvres, Switzerland. Est. 2019.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-8 lg:pt-8">
          <FooterColumn
            title="Atelier"
            items={[
              ["Visit", "#"],
              ["Process", "#"],
              ["Press", "#"],
              ["Stockists", "#"],
            ]}
          />
          <FooterColumn
            title="Owners"
            items={[
              ["Servicing", "#"],
              ["Insurance", "#"],
              ["Inheritance", "#"],
              ["Owners' club", "#"],
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mt-32 pt-8 border-t border-rule">
        <div className="col-span-12 md:col-span-6 flex items-center gap-6">
          <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3">© 2026 Hayes &amp; Co.</span>
          <span className="block w-1 h-1 rounded-full bg-rule" />
          <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3">Made to outlast us</span>
        </div>
        <div className="col-span-12 md:col-span-6 md:text-right">
          <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3">
            stark / examples / web-resonance-fm
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3 mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="font-display text-ink hover:text-oxblood transition-colors text-[16px]">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
