import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          main: "#050505",
          soft: "#0B0B0B",
        },
        section: "#0E0E0E",
        card: {
          DEFAULT: "#141414",
          hover: "#1B1B1B",
        },
        accent: {
          orange: "#FF6B00",
          gold: "#D6A84F",
        },
        danger: "#E53935",
        text: {
          main: "#FFFFFF",
          muted: "#A3A3A3",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-glow": "radial-gradient(circle, rgba(255,107,0,0.15) 0%, rgba(5,5,5,0) 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
