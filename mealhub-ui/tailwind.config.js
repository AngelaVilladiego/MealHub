/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "sans": ["Martel Sans", "sans-serif"],
      "header": ["Lato", "sans-serif"],
      "body": ["Martel Sans", "sans-serif"],
    }
  },
  plugins: [],
}

