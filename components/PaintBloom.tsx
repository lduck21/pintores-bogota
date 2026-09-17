"use client";

const blobs = [
  { color: "#3F4F3A", top: "10%", left: "15%", size: 220, delay: "0s", dur: "14s" },
  { color: "#A9812E", top: "50%", left: "55%", size: 260, delay: "-3s", dur: "17s" },
  { color: "#A9553F", top: "65%", left: "10%", size: 200, delay: "-6s", dur: "15s" },
  { color: "#6B7A63", top: "15%", left: "60%", size: 180, delay: "-9s", dur: "19s" },
  { color: "#C9A24A", top: "70%", left: "60%", size: 190, delay: "-4s", dur: "16s" },
];

export default function PaintBloom() {
  return (
    <div
      className="absolute inset-0 overflow-hidden motion-reduce:hidden"
      aria-hidden="true"
    >
      {blobs.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full mix-blend-multiply animate-drift"
          style={{
            backgroundColor: b.color,
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            filter: "blur(38px)",
            opacity: 0.75,
            animationDelay: b.delay,
            animationDuration: b.dur,
          }}
        />
      ))}
      {/* Fallback estático para quienes prefieren menos movimiento */}
      <div className="hidden motion-reduce:block absolute inset-0 bg-[linear-gradient(160deg,#E4E0D5_0%,#D7D2C4_55%,#C9C3B2_100%)]" />
    </div>
  );
}
