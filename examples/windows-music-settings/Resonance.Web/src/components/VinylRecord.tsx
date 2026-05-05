type Props = {
  spinning: boolean;
  accent: string;
  size?: number;
};

export function VinylRecord({ spinning, accent, size = 200 }: Props) {
  return (
    <div
      className={`relative rounded-full ${spinning ? "animate-spin-slow" : ""}`}
      style={{
        width: size,
        height: size,
        backgroundImage: `radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0a0a0a 60%, #000 100%)`,
        boxShadow: "0 12px 40px rgba(0,0,0,0.5), inset 0 0 12px rgba(255,255,255,0.05)",
      }}
    >
      {/* Grooves — concentric circles */}
      {[0.92, 0.78, 0.64, 0.50, 0.38, 0.28].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/[0.04]"
          style={{
            width: `${s * 100}%`,
            height: `${s * 100}%`,
            top: `${(1 - s) * 50}%`,
            left: `${(1 - s) * 50}%`,
          }}
        />
      ))}
      {/* Center label */}
      <div
        className="absolute rounded-full"
        style={{
          width: "32%", height: "32%",
          top: "34%", left: "34%",
          backgroundImage: `radial-gradient(circle at 35% 35%, ${accent} 0%, ${accent}aa 60%, ${accent}66 100%)`,
        }}
      >
        {/* Spindle hole */}
        <div
          className="absolute rounded-full bg-black"
          style={{ width: "12%", height: "12%", top: "44%", left: "44%" }}
        />
      </div>
      {/* Top highlight */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%)" }}
      />
    </div>
  );
}
