/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'dark': '#291C3A',
        'main-dark': '#331C52',
        'main': '#8121D0',
        'main-light': '#DCCFED',
        'light': '#E1EBED',
      },
    },
  },
  plugins: [],
}

