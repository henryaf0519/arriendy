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
        
        blue: "#DEF4F4",
        blueTwo:"#2B5264",
        blueThree:"#00D9BB",
        blueFour: "#2E6DF1",
        blueFive:"#2B5264",
        blueSix:"#274C5D",
        blueSeven:"#163C45",

        red: "#EF4444",
        
        gray:"#ABABAB",
        grayTwo:"#4B6571",
        grayThree:"#B2B2B2",
        grayFour:"#B6BFCA",
        grayFive:"#E5E5E5",
        graySix:"#BABABA",
        graySeven:"#E0E0E0",
        grayEight:'#737373',
        grayNine:"#6E6E6E",
        grayTen:"#F5F8F8",
        grayEleven:"#9FB1B9",

        green: "#DCFCE7",

        black:"#102935",
       
        darkBanner: "#1a3e48", // El azul petróleo oscuro del recuadro
        
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
      fontSize: {
        'size68': '68px',
        'size36': '36px',
        'size32': '32px',
        'size28': '28px',
        'size24': '24px',
        'size22': '22px',
        'size18': '18px',
        'size16': '16px',
        'size14': '14px',
        'size12': '12px',
        'size11': '11px',
        'size10': '10px',
      },
    },
  },
  plugins: [],
};
