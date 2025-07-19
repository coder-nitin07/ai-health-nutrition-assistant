/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',       // blue-500
        'primary-dark': '#2563EB' // blue-600
      }
    },
  },
  plugins: [],
};
