/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      monospace: 'Roboto Mono'
    },
    extend: {
      colors: {
        'black': '#000000',
      },
  },
  plugins: [],
}});