/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4CAF50', // A green similar to Tokopedia
        'secondary': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
