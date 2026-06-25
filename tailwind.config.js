/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4A8EE0',
          soft: '#DCECFF',
          deep: '#012233',
          ink: '#012233',
          cream: '#F6F2E7',
          lime: '#9DF201',
          limeSoft: '#ECFFBC',
          purple: '#C994FF',
          purpleSoft: '#F7E7F8',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 15px 35px rgba(1, 34, 51, 0.14)',
      },
    },
  },
  plugins: [],
};
