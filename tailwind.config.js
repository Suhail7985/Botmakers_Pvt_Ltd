/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bot-red': '#FF4D4D',
        'bot-dark': '#111111',
        'bot-gray': '#1A1A1A',
        'bot-border': '#333333',
        'bot-text': '#FFFFFF',
        'bot-muted': '#999999'
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
