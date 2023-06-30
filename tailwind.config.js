/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'fondo': "url('../public/fondo.jpg')",
      }
    },
  },
  plugins: [],
}

