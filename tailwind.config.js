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
        blue_footer: {
          bf: '#242F4B'
        }
      },
      height: {
        '120': '30rem',
        '128': '32rem',
      },
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}