const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      neutral: colors.neutral,
      red: colors.red,
      blue: colors.blue
    },
    extend: {},
  },
  plugins: [],
};
