const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    placeholderColor: {
      'primary': '#525284',
    }
    fontFamily: {
      openSauceSans: ['Open Sauce Sans','sans-serif'],
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      blackLight: '#11112F',
      blackDark: '#0C0C28',
      purpleLight: '#7171B2',
      purpleDark: '#525284',
      blueDark: '#212149',

    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
