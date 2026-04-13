import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        surface: "#0F0F0F",
        border: "#1A1A1A",
        accent: "#64A8B9",
        gold: "#C9A84C",
        text: "#FFFFFF",
        muted: "#6B7280",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [forms],
} satisfies Config;
