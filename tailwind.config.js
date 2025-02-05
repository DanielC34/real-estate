/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  plugins: ["nativewind/babel"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        rubikBold: ["Rubik-Bold", "sans-serif"],
        rubikMedium: ["Rubik-Medium", "sans-serif"],
        rubikLight: ["Rubik-Light", "sans-serif"],
        rubikSemibold: ["Rubik-SemiBold", "sans-serif"],
        rubikExtrabold: ["Rubik-ExtraBold", "sans-serif"],
      },
      colors: {
        primary: {
          4: "rgba(0, 97, 255, 0.04)", // 4% opacity
          10: "rgba(0, 97, 255, 0.1)", //10% opacity
          full: "rgb(0, 97, 255)", //Full color
        },
        accent: {
          100: "rgb(251, 251, 253)",
        },
        black: {
          default: "#00000",
          100: "rgb(140, 142, 152)",
          200: "rgb(102, 104, 118)",
          300: "rgb(25, 29, 49)",
        },
        danger: "rgb(247, 85, 85)",
      },
    },
  },
  plugins: [],
};
