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
