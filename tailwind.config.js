/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: '#EBE7DE',
        terracotta: '#A33B20',
        clay: '#8C8C8C',
        'watercolor-light': '#F2EEE6',
        'watercolor-dark': '#DED9CD',
      },
      fontFamily: {
        serif: ['Prata', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.05em',
      },
    },
  },
  plugins: [],
}
