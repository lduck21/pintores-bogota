const delays = ["0s", "-2s", "-4s", "-6s", "-8s", "-10s"];

export default function SwatchRibbon() {
  return (
    <div className="max-w-[1160px] mx-auto px-7 py-[60px]">
      <div className="flex gap-1.5 h-[22px] rounded-[3px] overflow-hidden">
        {delays.map((delay, i) => (
          <div
            key={i}
            className="flex-1 animate-crossfade motion-reduce:animate-none"
            style={{
              animationDelay: delay,
              backgroundColor: i % 2 === 0 ? "#3F4F3A" : "#A9812E",
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
