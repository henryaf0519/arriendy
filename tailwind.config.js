/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#F6F8FB",
        main: "#0033a0",
        secondary: "#41B6A6",
        third: "#EDF6F6",
        gray: "#8D8D8D",
        sura: {
          blue: "#2E6DF1",
          darkBanner: "#1a3e48", // El azul petróleo oscuro del recuadro
        },
        arriendy: {
          teal: "#40b4a4", // El color del botón "Cotizar"
          dark: "#349487",
        },

        // Grises para textos y bordes (UI)
        ui: {
          text: "#4b5563", // Gris para textos secundarios (Coberturas, Nosotros...)
          border: "#e5e7eb", // Gris para el separador entre logos
          bg: "#f8fafc", // Gris muy sutil para el fondo general de la página
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate(-50%, 10px)' },
          '100%': { opacity: '1', transform: 'translate(-50%, 0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
