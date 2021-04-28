module.exports = {
  purge: ['./apps/ngconf-tailwind/src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: 'var(--primary)',
          50: '#001100'
        },
        'accent': {
          DEFAULT: 'var(--accent)',
          50: '#001100'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
