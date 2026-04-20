import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#FFB5C5",
          peach: "#FFD6A5",
          yellow: "#FDFFB6",
          mint: "#CAFFBF",
          sky: "#9BF6FF",
          lavender: "#BDB2FF",
          bubblegum: "#FFC6FF",
          ink: "#2D2A4A"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-rounded", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        blob: "2rem"
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(45,42,74,0.15)"
      }
    }
  },
  plugins: []
};

export default config;
