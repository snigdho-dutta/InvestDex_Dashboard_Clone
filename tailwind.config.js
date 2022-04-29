module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark1: 'rgb(17,17,24)',
        dark2: 'rgba(34,34,47)',
        customGray: '#9094a1',
        customPurple: 'rgb(175, 161, 255)',
        customBlue: '#536DFF',
        customGreen: '#22977a',
        customYellow: '#ffae66',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-textshadow'),
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
}
