import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FDFCFA",
        card: "#FFFFFF",
        panel: "#F7F4EE",
        ink: "#23201B",
        inksoft: "#6b655c",
        ocre: "#D9A02C",
        rojo: "#B8342B",
        verde: "#1F5C52",
        line: "rgba(35,32,27,0.08)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
      keyframes: {
        hue: {
          "0%, 100%": { fill: "#D9A02C" },
          "33%": { fill: "#B8342B" },
          "66%": { fill: "#1F5C52" },
        },
      },
      animation: {
        hue: "hue 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
