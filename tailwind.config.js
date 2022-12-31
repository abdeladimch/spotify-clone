/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      screens: {
        sm: "530px",
      },
      fontFamily: {
        GothamBold: ["GothamBold", "sans-serif"],
        GothamMedium: ["GothamMedium", "sans-serif"],
        GothamLight: ["GothamLight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
