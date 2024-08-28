/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        jetBlack: "#121212",
      },
      keyframes:{
        animatedBackground: {
          "0%": {
            backgroundPosition: "0 0"
          },
          "100%": {
            backgroundPosition: "100% 0"
          }
        }
      },
      animation: {
        bgAnimate: 'animatedBackground 20s linear infinite'
      }
    },
  },
  plugins: [],
};
