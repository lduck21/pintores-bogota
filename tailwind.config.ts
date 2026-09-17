import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#EFEDE7",
        card: "#FFFFFF",
        panel: "#E4E0D5",
        ink: "#201F1B",
        inksoft: "#68655d",
        musgo: "#3F4F3A",
        laton: "#A9812E",
        terracota: "#A9553F",
        line: "rgba(32,31,27,0.10)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
      keyframes: {
        crossfade: {
          "0%, 100%": { backgroundColor: "#3F4F3A" },
          "50%": { backgroundColor: "#A9812E" },
        },
      },
      animation: {
        crossfade: "crossfade 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
