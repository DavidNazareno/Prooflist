/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "background":"#0E151B",
        "primary":"#1095C1",
        "secondary":"#11191F"
      }
    },
  },
  plugins: [],
}