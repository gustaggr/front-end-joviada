/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Arquivos que o Tailwind vai escanear
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#FF8000',
        backgroundClear: '#1D1D41',
        background: '#141332',
      },
    },
  },
  plugins: [],
};
