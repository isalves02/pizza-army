/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'red': '#DC1E1D',
        'green': '#1F6D29',
        'yellow': '#FFB521',

        'gray-200': '#BFBFBF',
        'gray-300': '#E2E2E2',
        'gray-600': "#CCCCCC",
        'gray-800': '#281815', 
        'gray-900': '#271718', 
      },

      fontFamily: {
        'sans': '"Bebas Neue"',
        'body': 'Roboto',
        'detail': 'Montserrat'
      },

      container: {
        center: true,
        
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '1.5rem',
          xl: '4rem',
          '2xl': '6rem',
        }
      },
      
      width: {
        '19': '4.5rem'
      },

      fontSize: {
        '2xs': '.625rem',
        '2sm': '1rem',
        'md' : '1.125rem',
        '2md': '1.25rem',
        'lg' : '1.6rem',
        'xl' : '2rem',
        '2xl' : '1.75rem',
      },

      borderRadius: {
        'rounded-3xl': '1.25rem',
      },
    },
  },
  plugins: [],
}

