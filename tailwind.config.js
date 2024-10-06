/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#E58411',
        'secondary':'#1e1e1e',
        'secondary-bg':'#f7f7f7',
      },
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
        'navfont': ['Poppins', 'sans-serif'],
        'bannerfont': ['Marcellus', 'serif'],
      },
      
      container: {
        center: true,
        screens: {
          '2xl': '1200px', // Setting the container width for 2xl screens to 1000px
        },
    },
  },
  plugins: [
    daisyui,
  ],
}
}
