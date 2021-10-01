module.exports = {
  // purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    placeholderColor: {
      'primary': '#525284',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
