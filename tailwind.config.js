/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1D4FD8",
      hp: "#1E3FAF",
      darkPrimary: "#1D4FD8",
    },
    extend: {},
  },
  plugins: [],
});
