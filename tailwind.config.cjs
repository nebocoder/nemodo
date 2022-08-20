/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#EEF1EF',
        secondary: '#0A0908',
        accent: '#1D4ED8',
      },
    },
  },
  plugins: [],
};
