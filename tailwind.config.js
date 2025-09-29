/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // if you use app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
