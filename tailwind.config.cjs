/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#EEF1EF",
        secondary: "#0A0908",
        accent: "#0D9488",
        darkPrimary: "#2A3547",
        darkBg: "#1F2937",
        darkSecondary: "#F0FDFA",
      },
    },
  },
  plugins: [],
};
