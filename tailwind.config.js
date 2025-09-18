/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // keep if you ever use App Router
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
