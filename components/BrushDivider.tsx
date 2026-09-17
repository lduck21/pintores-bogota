export default function BrushDivider() {
  return (
    <div className="max-w-[1120px] mx-auto px-6">
      <svg
        className="w-full h-[34px] my-16"
        viewBox="0 0 1120 34"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="fill-ocre animate-hue motion-reduce:animate-none"
          d="M0 20 Q 140 0, 280 18 T 560 16 T 840 20 T 1120 14 L1120 34 L0 34 Z"
        />
      </svg>
    </div>
  );
}
