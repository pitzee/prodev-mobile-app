/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    "./interfaces/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#34967C",
          50: "#f0f9f6",
          100: "#dcf2eb",
          200: "#bce4d7",
          300: "#8dd0b8",
          400: "#56b594",
          500: "#34967C",
          600: "#2a7a66",
          700: "#236254",
          800: "#204e45",
          900: "#1e413a",
        },
        secondary: {
          DEFAULT: "#0601B4",
          50: "#f0f0ff",
          100: "#e6e6ff",
          200: "#d1d1ff",
          300: "#b3b3ff",
          400: "#8a8aff",
          500: "#6666ff",
          600: "#0601B4",
          700: "#4d4dff",
          800: "#3333ff",
          900: "#1a1aff",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
