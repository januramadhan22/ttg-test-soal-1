/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#353535",
          green: "#6ec041",
          gray: "#d4dbe3",
        },
      },
    },
  },
  plugins: [],
};
