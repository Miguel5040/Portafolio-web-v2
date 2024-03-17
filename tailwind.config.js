/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '360px',

      'sm': '480px',

      'md': '768px',

      'lg': '992px',

      'xl': '1280px'
    },
    fontFamily: {
      'inter': ['"Inter"'],
      'noto-sans': ['"Noto Sans JP"'],
      'nanum-myeongjo': ['"Nanum Myeongjo"'],
      'canela-deck': ['"Canela Deck Thin Trial"'],
      'jakarta': ['"Plus Jakarta Sans Medium"']
    },
  },
  plugins: [],
}