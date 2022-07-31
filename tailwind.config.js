/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      width:{
        '11/13' : '96%',
        '3/13' : '27%'
      }
    },
  },
  plugins: [],
}
