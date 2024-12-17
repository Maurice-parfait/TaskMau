/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        Grid: '1.2fr 5fr', // le grid de l'application
        GridDash: '5fr 3fr', // le grid de analyse de taches et de calendrier dans le menu de dashboard
        GridStat : '5fr 2fr', // le grid de alalyse de taches dans le menu de statistique
      }
    },

    fontFamily: {
      Poppins : "Poppins",
      Roboto: "Roboto",
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

