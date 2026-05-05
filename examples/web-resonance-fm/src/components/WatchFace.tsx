import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "motion/react";

type Props = {
  hour: number;
  minute: number;
  second: number;
  accent?: "gold" | "silver" | "blued";
  size?: number;
  interactive?: boolean;
  className?: string;
};

const ACCENT_COLOR: Record<string, string> = {
  gold:   "#A98237",
  silver: "#5C5347",
  blued:  "#2B3A6E",
};

/**
 * CSS/SVG watch face. Pure illustration — no images.
 * Optional interactive mode: subtle 3D tilt on cursor + hands settle on spring.
 */
export function WatchFace({ hour, minute, second, accent = "silver", size = 480, interactive = false, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sy = useSpring(ry, { stiffness: 150, damping: 18 });

  useEffect(() => {
    if (!interactive) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      rx.set(-y * 8); // tilt X (vertical mouse → horizontal tilt)
      ry.set(x * 8);
    };
    const onLeave = () => { rx.set(0); ry.set(0); };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [interactive, rx, ry]);

  const hourAngle = (hour % 12) * 30 + minute * 0.5;
  const minuteAngle = minute * 6 + second * 0.1;
  const secondAngle = second * 6;
  const accentColor = ACCENT_COLOR[accent];

  const tiltStyle = interactive ? { transform: `perspective(1200px) rotateX(${sx.get()}deg) rotateY(${sy.get()}deg)` } : {};

  return (
    <div
      ref={ref}
      className={`relative ${className || ""}`}
      style={{ width: size, height: size, ...tiltStyle, transformStyle: "preserve-3d" }}
    >
      <svg viewBox="0 0 200 200" width={size} height={size}>
        <defs>
          <radialGradient id="caseGrad" cx="0.5" cy="0.4" r="0.6">
            <stop offset="0" stopColor="#FBF6EB" />
            <stop offset="1" stopColor="#E8DEC9" />
          </radialGradient>
          <radialGradient id="dialGrad" cx="0.5" cy="0.45" r="0.55">
            <stop offset="0" stopColor="#FAF5EA" />
            <stop offset="1" stopColor="#E8DCC2" />
          </radialGradient>
          <filter id="dialNoise">
            <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="2" />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>

        {/* Outer case */}
        <circle cx="100" cy="100" r="98" fill="url(#caseGrad)" stroke="#3A322A" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="92" fill="none" stroke="#3A322A" strokeWidth="0.3" opacity="0.5" />

        {/* Dial */}
        <circle cx="100" cy="100" r="86" fill="url(#dialGrad)" />
        <circle cx="100" cy="100" r="86" fill="url(#dialGrad)" filter="url(#dialNoise)" />

        {/* Hour markers — 12 indices */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const r1 = 76;
          const r2 = i % 3 === 0 ? 68 : 72;
          const x1 = 100 + Math.cos(angle) * r1;
          const y1 = 100 + Math.sin(angle) * r1;
          const x2 = 100 + Math.cos(angle) * r2;
          const y2 = 100 + Math.sin(angle) * r2;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#1A1614"
              strokeWidth={i % 3 === 0 ? 1.4 : 0.7}
              strokeLinecap="round"
            />
          );
        })}

        {/* Roman numerals at quarters */}
        {[
          { n: "XII", x: 100, y: 26, w: 4 },
          { n: "III", x: 174, y: 102, w: 3 },
          { n: "VI",  x: 100, y: 178, w: 3 },
          { n: "IX",  x: 26,  y: 102, w: 3 },
        ].map((n) => (
          <text
            key={n.n}
            x={n.x}
            y={n.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Newsreader, serif"
            fontSize="9"
            fontWeight="500"
            fill="#1A1614"
          >
            {n.n}
          </text>
        ))}

        {/* HAYES wordmark + reference */}
        <text x="100" y="62" textAnchor="middle" fontFamily="Newsreader, serif" fontSize="6.4" letterSpacing="1.5" fill="#1A1614" fontWeight="600">HAYES &amp; CO</text>
        <text x="100" y="71" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="3.2" letterSpacing="0.5" fill="#87796B">SWITZERLAND · No.27</text>

        {/* Sub-second dial at 6 */}
        <g transform="translate(100,128)">
          <circle r="22" fill="#E8DCC2" stroke="#1A1614" strokeWidth="0.3" opacity="0.6" />
          {Array.from({ length: 60 }).map((_, i) => {
            const a = (i * 6 - 90) * (Math.PI / 180);
            const r1 = i % 5 === 0 ? 18 : 19;
            const r2 = 21;
            return (
              <line
                key={i}
                x1={Math.cos(a) * r1}
                y1={Math.sin(a) * r1}
                x2={Math.cos(a) * r2}
                y2={Math.sin(a) * r2}
                stroke="#1A1614"
                strokeWidth={i % 5 === 0 ? 0.5 : 0.25}
                opacity={0.7}
              />
            );
          })}
          {/* Sub-second hand */}
          <line x1={0} y1={0}
                x2={Math.cos((secondAngle - 90) * (Math.PI / 180)) * 18}
                y2={Math.sin((secondAngle - 90) * (Math.PI / 180)) * 18}
                stroke={accentColor} strokeWidth="0.7" strokeLinecap="round" />
          <circle r="1.2" fill={accentColor} />
        </g>

        {/* Hour hand */}
        <g transform={`rotate(${hourAngle} 100 100)`}>
          <rect x="98.5" y="50" width="3" height="52" rx="1" fill="#1A1614" />
          <rect x="99.2" y="56" width="1.6" height="44" fill="#3A322A" />
        </g>
        {/* Minute hand */}
        <g transform={`rotate(${minuteAngle} 100 100)`}>
          <rect x="99" y="32" width="2" height="70" rx="0.8" fill="#1A1614" />
        </g>

        {/* Center cap */}
        <circle cx="100" cy="100" r="3" fill="#1A1614" />
        <circle cx="100" cy="100" r="1.2" fill={accentColor} />

        {/* Crystal highlight */}
        <ellipse cx="78" cy="58" rx="32" ry="14" fill="white" opacity="0.18" />
        <ellipse cx="68" cy="46" rx="14" ry="6" fill="white" opacity="0.25" />
      </svg>
    </div>
  );
}
