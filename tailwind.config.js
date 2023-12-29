/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg: 'hsl(var(--color-bg) / <alpha-value>)' ,
        content: 'hsl(var(--color-content) / <alpha-value>)',
      },
      fontFamily:{
        poppins:'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
  // darkMode:'class'
}