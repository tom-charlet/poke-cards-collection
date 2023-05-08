/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': 'Lexend Deca'
      },
      colors: {
        'gray': {
          100: "#DEDEDE",
          300: "#8D8687",
          800: "#242424",
          900: "#000102",
        },
        'red': {
          300: "#E96E80",
          600: "#DC0A2D",
          800: "#88071C",
        },
        'blue': {
          300: "#A0D9FB",
          600: "#29ACFC",
          800: "#196A9F",
        },
        'yellow': {
          300: "#FDF7C0",
          600: "#FBE014",
          800: "#9F8D0F",
        },
        green: {
          300: "#C0F2C0",
          600: "#51AD60",
          800: "#02302D",
        },
      }
    },
  },
  plugins: [],
}
