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
      imageWidth:{
        
      }
    },
  },
  plugins: [],
}
