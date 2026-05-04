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
          primary: "#6C5CE7",
          primarySoft: "#8E7EF2",
          primaryDark: "#5641D4",
          gold: "#FFD86E",
          aura: "#6E8BFF",
          fuel: "#2ED573",
          mind: "#A06CFF",
          body: "#FF6B1A",
        },
      },
      fontFamily: {
        headline: ['"Space Grotesk"', "sans-serif"],
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        label: ['"Space Grotesk"', "sans-serif"],
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
