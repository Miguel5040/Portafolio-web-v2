/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // 'sm': '640px',

      'md': '768px',

      'lg': '992px'
    },
    fontFamily: {
      'inter': ['"Inter"'],
      'noto-sans': ['"Noto Sans JP"'],
      'nanum-myeongjo': ['"Nanum Myeongjo"'],
      'canela-deck': ['"Canela Deck Thin Trial"']
    },
  },
  plugins: [],
}