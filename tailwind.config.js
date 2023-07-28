/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ss-blue-primary': '#1E66FF',
        'ss-sky-blue-primary': '#4DC3F7',
        'ss-light-green-primary': '#77E9A6',
        'ss-yellow-primary': '#FFC221',
      }
    },
  },
  plugins: [],
}

