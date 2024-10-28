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
        primary: '#7202DF',
        backgroundClear: '#ffffff',
        background: '#EFEFEF',
      },
    },
  },
  plugins: [],
};
