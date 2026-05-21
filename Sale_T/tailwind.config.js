/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{tsx,js,ts,jsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Jakarta", "sans-serif"],
        JakartaBold: ["JakartaBold", "sans-serif"],
        JakartaExtraBold: ["JakartaExtraBold", "sans-serif"],
        JakartaExtraLight: ["JakartaExtraLight", "sans-serif"],
        JakartaLight: ["JakartaLight", "sans-serif"],
        JakartaMedium: ["JakartaMedium", "sans-serif"],
        JakartaSemiBold: ["JakartaSemiBold", "sans-serif"],
      },
      colors: {
        primary: "#ffb13a",
        secondary: "#000000",
        white: "#ffffff",
        gray: "#808080",
        lightGray: "#d3d3d3",
      },
    },
  },
  plugins: [],
};
