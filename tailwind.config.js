/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '10vh': '36px',
        '450': '450px',
        '600': '600px',
        '400': '400px',
      },
      height: {
        '10vh': '36px',
        '450': '450px',
        '600': '600px',
        '100': '10vh',
      },
      colors: {
        'cell': '#363636',
        'cell-border': '#5B5B5B',
        'cell-blur': '#53535370',
        'cell-blur-value': '#262626'
      },
      margin: {
        '55': '-500px',
        '15': '15vh',
      },
      minHeight: {
        '100': '9.5vh',
      }
    }
  },
  plugins: [],
}