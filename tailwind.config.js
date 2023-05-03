/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        boxShadow: {
          'custom': '5px 1px 5px 15px lightblue',
        }
      }
    },
  },
  plugins: [],
}

