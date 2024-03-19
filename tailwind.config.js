/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0px 6px rgba(0, 0, 0, 0.5)', // Customize the shadow values here
      },
    },
  },
  plugins: [],
}