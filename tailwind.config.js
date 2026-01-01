/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        netflix: "#e50914",
        darkbg: "#0f0f0f"
      }
    },
  },
  plugins: [],
}
