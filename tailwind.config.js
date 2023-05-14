/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "bg1" : "url('./src/assets/bg.png')"
      })
    },
  },
  plugins: [require('daisyui')],
}

