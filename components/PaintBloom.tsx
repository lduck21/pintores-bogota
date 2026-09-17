"use client";

const blobs = [
  { color: "#3F4F3A", top: "8%", left: "12%", size: 240, delay: "0s", dur: "11s" },
  { color: "#A9812E", top: "48%", left: "52%", size: 280, delay: "-2.5s", dur: "13s" },
  { color: "#A9553F", top: "62%", left: "8%", size: 220, delay: "-5s", dur: "12s" },
  { color: "#6B7A63", top: "12%", left: "58%", size: 200, delay: "-7.5s", dur: "14s" },
  { color: "#C9A24A", top: "68%", left: "58%", size: 210, delay: "-3.5s", dur: "12.5s" },
];

export default function PaintBloom() {
  return (
    <div
      className="absolute inset-0 overflow-hidden motion-reduce:hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes paint-drift {
          0%   { transform: translate(0%, 0%) scale(1); }
          33%  { transform: translate(14%, -16%) scale(1.2); }
          66%  { transform: translate(-12%, 12%) scale(0.85); }
          100% { transform: translate(0%, 0%) scale(1); }
        }
        .paint-blob {
          animation-name: paint-drift;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
      {blobs.map((b, i) => (
        <span
          key={i}
          className="paint-blob absolute rounded-full"
          style={{
            backgroundColor: b.color,
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            filter: "blur(34px)",
            opacity: 0.8,
            mixBlendMode: "multiply",
            animationDelay: b.delay,
            animationDuration: b.dur,
          }}
        />
      ))}
      {/* Fallback estático para quienes prefieren menos movimiento */}
      <div className="hidden motion-reduce:block absolute inset-0 bg-[#EFEDE7]" />
    </div>
  );
}
