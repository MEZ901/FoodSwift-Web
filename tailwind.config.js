/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "6px",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
