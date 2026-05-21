/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          void: "#02030A",
          deep: "#0A0D1F",
          deeper: "#070819",
          primary: "#6C5CE7",
          primarySoft: "#8E7EF2",
          primaryDark: "#5641D4",
          gold: "#FFD86E",
          // Pillar colors — calibrated to live app
          body: "#FF4757",
          mind: "#22C5E8",
          spirit: "#A06CFF",
          fuel: "#2ED573",
          // Legacy alias
          aura: "#6E8BFF",
        },
      },
      fontFamily: {
        headline: ['"Space Grotesk"', "sans-serif"],
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        label: ['"Space Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        brutalTight: "-0.055em",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
}
