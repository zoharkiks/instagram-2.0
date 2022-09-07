/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Use custom colors
    // colors: {
    //   'white': '#ffffff',
    //   'black':'#000000',
    // },
    extend: {
      fontFamily: {
       manrope: ["Manrope", "sans-serif"],
       gilRegular: ["Gilroy-Regular", "sans-serif"],
       gilMedium: ["Gilroy-Medium", "sans-serif"],  
       gilSemi: ["Gilroy-SemiBold", "sans-serif"],  
        gilBold: ["Gilroy-Bold", "sans-serif"],
       
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-border-gradient-radius')

  ],
}
