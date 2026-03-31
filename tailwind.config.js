/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,jsx,ts,tsx,mdx}', './src/components/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charger: {
          navy: '#111111',
          'navy-light': '#b3131b',
          dark: '#050505',
          gold: '#c7c9cc',
        },
      },
      fontFamily: {
        sans: ['Avenir Next', 'Segoe UI', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
        condensed: ['Oswald', 'Arial Narrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
