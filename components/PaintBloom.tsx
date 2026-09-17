"use client";

export default function PaintBloom() {
  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[#211E1A] motion-reduce:!bg-[#EFEDE7]"
      aria-hidden="true"
    >
      <style>{`
        @keyframes marble-a {
          0%   { transform: translate(-10%, -8%) rotate(0deg) scale(1); }
          50%  { transform: translate(14%, 10%) rotate(180deg) scale(1.25); }
          100% { transform: translate(-10%, -8%) rotate(360deg) scale(1); }
        }
        @keyframes marble-b {
          0%   { transform: translate(12%, 6%) rotate(0deg) scale(1.1); }
          50%  { transform: translate(-14%, -12%) rotate(-180deg) scale(0.9); }
          100% { transform: translate(12%, 6%) rotate(-360deg) scale(1.1); }
        }
        @keyframes marble-c {
          0%   { transform: translate(-6%, 12%) rotate(0deg) scale(0.95); }
          50%  { transform: translate(8%, -14%) rotate(-180deg) scale(1.2); }
          100% { transform: translate(-6%, 12%) rotate(-360deg) scale(0.95); }
        }
        .marble-layer { mix-blend-mode: screen; position: absolute; inset: -20%; }
        .marble-layer.a { animation: marble-a 22s ease-in-out infinite; }
        .marble-layer.b { animation: marble-b 26s ease-in-out infinite; }
        .marble-layer.c { animation: marble-c 19s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .marble-layer { animation: none !important; opacity: 0; }
        }
      `}</style>

      <div
        className="marble-layer a"
        style={{
          background:
            "radial-gradient(circle at 30% 35%, #6FA562 0%, transparent 55%)",
        }}
      />
      <div
        className="marble-layer b"
        style={{
          background:
            "radial-gradient(circle at 65% 60%, #E8B94A 0%, transparent 55%)",
        }}
      />
      <div
        className="marble-layer c"
        style={{
          background:
            "radial-gradient(circle at 45% 75%, #C96A4E 0%, transparent 55%)",
        }}
      />
      <div
        className="marble-layer a"
        style={{
          animationDelay: "-9s",
          background:
            "radial-gradient(circle at 70% 20%, #8B6FA5 0%, transparent 50%)",
        }}
      />
    </div>
  );
}
