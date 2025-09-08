/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        surface: "#FFFFFF",
        ink: "#2C3E50",
        primary: {
          default: "#8A2BE2",
          dark: "#6A1B9A"
        },
        accent: {
          default: "#4B77BE",
          cyan: "#00CED1",
        },
        section: "#F8F9FA"
      }
    },
  },
  plugins: [],
}
