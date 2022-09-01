/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      fontFamily: {
      'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      background:	'#F08080',
      foreground:	'#C71585',
      comment:	'#000000',
      accent:	'#800000',
      Palevioledred:	'#db7093',
      palgreen: 	'#98fbfb98',
      lightyellow: 	'#ffffe0',
      lavenderblush: 	'#fff0f5',
      lavender:	'#e6e6fa',
      plum: 	'#C71585',
    },
   },
  },
  plugins: [],
}

