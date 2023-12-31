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
        'ss-light-blue-secondary': '#F4FCFF',
        'ss-dark-blue-primary': '#001439',
        'ss-sky-blue-primary': '#4DC3F7',
        'ss-light-green-primary': '#77E9A6',
        'ss-yellow-primary': '#FFC221',
        'ss-grey-primary': '#7E7E7E',
        'ss-grey-secondary': '#F4F4F4',
        'ss-grey-accent': '#F5F5F5',
        'ss-light-grey-primary': '#F0F0F0',
        'ss-white-primary': '#FFFDFE',
        'ss-light-orange-primary': '#FAD6C1',
        'ss-light-orange-secondary': '#FF4516',
        'ss-light-purple-primary': '#E4DFFF',
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
        'spectral': ["'Spectral'", 'serif'],
        'roboto': ["'Roboto'", 'sans-serif'],
      },
      backgroundImage: {
        'footer-bg': "url('/src/assets/icons/footer-bg.svg')",
        'testimonial-bg': "url('/src/assets/icons/testimonial-bg.svg')",
        'social-bg': "url('/src/assets/icons/social-bg.svg')",
        'popular-brands-bg': "url('/src/assets/icons/popular-brands-bg.svg')",
        'banner-bg': "url('/src/assets/icons/banner-bg.svg')",
        'banner-pattern': "url('/src/assets/icons/banner-pattern.svg')",
        'trending-card-bg': 'linear-gradient(234deg, #C0D4FE 0%, #ECF1FD 100%)',
      },
      boxShadow: {
        'ss-shadow': '5px 13px 18px -5px rgba(127.50, 127.50, 127.50, 0.10)',
        'ss-featured-card-shadow': '0px 8px 18px -7px rgba(0, 0, 0, 0.10)',
      },
      gridTemplateRows: {
        'ss-trending': '100px 40px',
        'ss-featured-card': '320px 100px',
        'ss-featured-card-text': '1fr 0.5fr',
      }
    },
  },
  plugins: [],
}

