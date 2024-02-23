/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      blue: '#32BCE7',
      red: '#E11556',
      white: '#fffefe',
      transparent: 'rgba(0,0,0,0)',
    },
    fontFamily: {},
  },
  plugins: [],
};
