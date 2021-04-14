const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { ...colors },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
