import { motion, useScroll, useTransform } from "motion/react";

export function Nav() {
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0, 0.96]);
  const navBlur = useTransform(scrollY, [0, 100], [0, 8]);
  const filter = useTransform(navBlur, (v) => `blur(${v}px)`);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-12 lg:px-20 py-6">
      {/* Glass background that fades in on scroll */}
      <motion.div
        className="absolute inset-0 bg-paper border-b border-rule"
        style={{ opacity: navOpacity, backdropFilter: filter }}
      />
      <nav className="relative flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="block w-2 h-2 rounded-full bg-oxblood group-hover:scale-125 transition-transform" />
          <span className="font-display font-medium text-ink text-[18px] tracking-tight">
            Hayes <em className="italic">&amp;</em> Co.
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          <NavItem>References</NavItem>
          <NavItem>Atelier</NavItem>
          <NavItem>Journal</NavItem>
          <NavItem>Contact</NavItem>
        </ul>

        <div className="flex items-center gap-6">
          <span className="hidden md:inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] uppercase text-ink-3">
            <span className="w-1.5 h-1.5 rounded-full bg-oxblood animate-pulse" />
            27 / 27 reserved
          </span>
        </div>
      </nav>
    </header>
  );
}

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <a href="#" className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink-2 hover:text-ink transition-colors">
        {children}
      </a>
    </li>
  );
}
