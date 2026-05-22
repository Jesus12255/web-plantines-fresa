/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        green: {
          brand: '#34c759',
          brandDark: '#248a3d',
          accent: '#007aff',
          accentLight: '#30b0c7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        hero: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
