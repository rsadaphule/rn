/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        rubikBold: ["Rubik-Bold", "sans-serif"],
        rubikMedium: ["Rubik-Medium", "sans-serif"],
        rubikSemiBold: ["Rubik-SemiBold", "sans-serif"],
      },
      colors: {
        "primary": {
          "200": "#0061FF1A",
          "300": "##0061FF",
        },
        "accent": {
          "100": "#FBFBFD",
        },
        "black" : {
          "DEFAULT": "#000000",
          "100": "#8C8E98",
          "200": "#666876",
          "300": "#191d31",
        },
        "danger" : "#F75555",
    },
  },
  plugins: [],
}

