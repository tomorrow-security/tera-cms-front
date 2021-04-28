module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'tc-blue': '#04021D',
        'tc-red': '#E03300',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
