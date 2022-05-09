module.exports = {
  purge: {
    enabled: true,
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark'], //specific classes
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {},
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
  mode: 'jit',
}