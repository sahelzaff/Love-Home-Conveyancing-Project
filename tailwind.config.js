/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#F57B1F'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sourceSans: ['Source Sans Pro', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        foundersGrotesk: ['FoundersGrotesk', 'sans-serif'],
        gotham: ['gotham', 'Lora'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  corePlugins: {
    scrollbar: false,  
  },
  plugins: [
    require('flowbite/plugin'),
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  
          'scrollbar-width': 'none',  
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',  
        },
      });
    }
  ],
};
