/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/images/image-hero-desktop.png')"
      },
      fontFamily: {
        'epilogue': ['Epilogue']
      },
      backgroundColor: {
        'backdrop': 'rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}
