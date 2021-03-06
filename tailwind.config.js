const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-900-spotify': '#121212',
        'gray-800-spotify': '#181818',
        'gray-700-spotify': '#282828',
        'gray-ponytown': '#333333',
        'trueGray': colors.trueGray,
        'cyan': colors.cyan,
        'lightBlue': colors.lightBlue,
      },  
      spacing: {
        '200' : '50rem',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
