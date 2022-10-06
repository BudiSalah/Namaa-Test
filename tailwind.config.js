/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
      },
      colors: {
        black: {
          100: '#181C32',
        },
        gray: {
          100: '#F9F9F9',
          200: '#E4E4E4',
          300: '#F5F8FA',
        },
        orange: {
          100: '#EF5B0C1a',
          900: '#EF5B0C',
        },
      },
      fontFamily: {
        tajawalMedium: 'tajawal-medium',
        tajawalBold: 'tajawal-bold',
        ajannatLTRegular: 'ajannatLT-regular',
        ajannatLTBold: 'ajannatLT-bold',
      },
    },
  },
  plugins: [],
}
