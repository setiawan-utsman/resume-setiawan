/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, html}",
    "./node_modules/svg-map-drawer/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["selector", '[data-mode="dark"]'],
  // darkMode: "class",

  // darkMode: "selector",
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        appear: "appear 1s ease-in-out",
        typing: "typing 1.5s steps(20) infinite alternate, blink .7s infinite",
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      serif: ["Mozilla Headline", "sans-serif"],
    },
  },
  plugins: [],
};