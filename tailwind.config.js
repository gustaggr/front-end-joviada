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
        // Adicionando as cores do chartColors
        blue: {
          bg: "bg-blue-500",
          stroke: "stroke-blue-500",
          fill: "fill-blue-500",
          text: "text-blue-500",
        },
        emerald: {
          bg: "bg-emerald-500",
          stroke: "stroke-emerald-500",
          fill: "fill-emerald-500",
          text: "text-emerald-500",
        },
        violet: {
          bg: "bg-violet-500",
          stroke: "stroke-violet-500",
          fill: "fill-violet-500",
          text: "text-violet-500",
        },
        amber: {
          bg: "bg-amber-500",
          stroke: "stroke-amber-500",
          fill: "fill-amber-500",
          text: "text-amber-500",
        },
        gray: {
          bg: "bg-gray-500",
          stroke: "stroke-gray-500",
          fill: "fill-gray-500",
          text: "text-gray-500",
        },
        cyan: {
          bg: "bg-cyan-500",
          stroke: "stroke-cyan-500",
          fill: "fill-cyan-500",
          text: "text-cyan-500",
        },
        pink: {
          bg: "bg-pink-500",
          stroke: "stroke-pink-500",
          fill: "fill-pink-500",
          text: "text-pink-500",
        },
        lime: {
          bg: "bg-lime-500",
          stroke: "stroke-lime-500",
          fill: "fill-lime-500",
          text: "text-lime-500",
        },
        fuchsia: {
          bg: "bg-fuchsia-500",
          stroke: "stroke-fuchsia-500",
          fill: "fill-fuchsia-500",
          text: "text-fuchsia-500",
        },
      },
      screens: {
        mb: '400px',
        wi: '1230px',
      }
    },
  },
  plugins: [],
};
