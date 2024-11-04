/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Arquivos que o Tailwind vai escanear
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif']
      },
      colors: {
        primary: '#7202DF',
        backgroundClear: '#ffffff',
        background: '#EFEFEF',
        bgprimary: '#F8F2FD',
        bghover: "#EDD7FF",
      },
      screens: {
        mb: '400px',
        wi: '1230px',
      }
    },
  },
  plugins: [],
};
