/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        headerColor: '#030303',
        fontPrimaryColor: '#181818',
        fontSecondaryColor: '#636364',
        bgRedColor: '#EA454C',
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
      dropShadow: {
        red: '0px 4px 10px rgba(233, 68, 75, 0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
