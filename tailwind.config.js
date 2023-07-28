/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ss-blue-primary': '#1E66FF',
        'ss-blue-secondary': '#0E4B80',
        'ss-blue-accent': '#232347',
        'ss-light-blue-primary': '#CEF0FF',
        'ss-dark-blue-primary': '#001439',
        'ss-sky-blue-primary': '#4DC3F7',
        'ss-light-green-primary': '#77E9A6',
        'ss-yellow-primary': '#FFC221',
        'ss-grey-primary': '#7E7E7E',
        'ss-grey-secondary': '#F4F4F4',
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
      },
      backgroundImage: {
        'footer-bg': "url('/src/assets/icons/footer-bg.svg')",
        'testimonial-bg': "url('/src/assets/icons/testimonial-bg.svg')",
      }
    },
  },
  plugins: [],
}

