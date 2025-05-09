/** @type {import('tailwindcss').Config} */

const colors = require("./src/theming/app-colors");

module.exports = {
    content: ["./src/**/*.{html,js}"],
    important: '#root',
    theme: {
      extend: {
        colors: colors
      },
    },
    plugins: [],
  }