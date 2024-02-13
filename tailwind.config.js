/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontSize: {
        'xl': '2rem', // Example text size
        'cardTitle': '1.6rem', // Example text size
      },
      // Define custom classes for height
      height: {
        'check': '40.5rem', // Example height
        'card': '27rem', // Example height
        'image': '21rem', // Example height
        'message': '12rem', // Example height
        
      },
      padding:{
        "intro":"5rem"
      }
    },
  },
  plugins: [],
}