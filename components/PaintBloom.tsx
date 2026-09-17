"use client";

const dots = [
  { color: "#3F4F3A", top: "10%", left: "18%", size: 130, delay: "0s", dur: "9s" },
  { color: "#A9812E", top: "8%", left: "55%", size: 100, delay: "-1.5s", dur: "10s" },
  { color: "#A9553F", top: "38%", left: "38%", size: 160, delay: "-3s", dur: "11s" },
  { color: "#7A3B2E", top: "55%", left: "68%", size: 90, delay: "-4.5s", dur: "9.5s" },
  { color: "#8FA487", top: "62%", left: "12%", size: 110, delay: "-2s", dur: "10.5s" },
  { color: "#EFDDBA", top: "70%", left: "45%", size: 80, delay: "-6s", dur: "8.5s" },
  { color: "#A9812E", top: "28%", left: "78%", size: 70, delay: "-5s", dur: "9s" },
];

export default function PaintBloom() {
  return (
    <div
      className="absolute inset-0 overflow-hidden motion-reduce:hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes paint-float {
          0%   { transform: translate(0%, 0%) scale(1); }
          50%  { transform: translate(6%, -7%) scale(1.06); }
          100% { transform: translate(0%, 0%) scale(1); }
        }
        .paint-dot {
          animation-name: paint-float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
      {dots.map((d, i) => (
        <span
          key={i}
          className="paint-dot absolute rounded-full"
          style={{
            backgroundColor: d.color,
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            boxShadow: "0 10px 24px rgba(32,31,27,0.12)",
            animationDelay: d.delay,
            animationDuration: d.dur,
          }}
        />
      ))}
      {/* Fallback estático para quienes prefieren menos movimiento */}
      <div className="hidden motion-reduce:block absolute inset-0 bg-[#EFEDE7]" />
    </div>
  );
}
