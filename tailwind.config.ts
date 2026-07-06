import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A2540",
          light: "#123456",
          dark: "#061829",
        },
        gold: {
          DEFAULT: "#C8A24B",
          light: "#D9BC72",
          dark: "#A9853A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: { "2xl": "1200px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
