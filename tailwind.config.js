/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'fondo': "url('../public/fondo.jpg')",
      },
      colors:{
        'background': "#E9E9E9"
      }
    },
  },
  plugins: [],
}

