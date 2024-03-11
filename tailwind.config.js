/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ['"Inter"'],
      'noto-sans': ['"Noto Sans JP"'],
      'nanum-myeongjo': ['"Nanum Myeongjo"']
    },
  },
  plugins: [],
}