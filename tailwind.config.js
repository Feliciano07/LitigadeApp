/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          500: '#784F33',
        },
      },
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}