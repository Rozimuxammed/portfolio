/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'animatedText': '  4s steps(29,end) 1s 1 normal both',
        'animatedCursor': ' 600ms steps(29,end) infinite'
      },
      keyframes: {
        animatedText: {
          from: 'w-0',
          to: 'w-96'
        },
        animatedCursor: {
          from: 'border-e-green-50',
          to: 'border-r-transparent'
        }
      }
    },
  },
  plugins: [],
}