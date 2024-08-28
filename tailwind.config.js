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
        blueText: "#63A1EF"
      },
      keyframes:{
        animatedBackground: {
          "0%": {
            backgroundPosition: "0 0"
          },
          "100%": {
            backgroundPosition: "100% 0"
          }
        },
        textTyping: {
          "10%,15%,30%,35%,50%,55%,70%,75%,90%,95%": {
            width: "0%"
          },
          "5%,20%,25%,40%,45%,60%,65%,80%,85%": {
            width: "calc(100% + 8px)"
          }
        },
        cursorBlink: {
          "0%": {
            cursorColor: 'transparent'
          },
          "100%": {
            cursorColor: '#63a1ef'
          }
        },
        changeWord: {
          "0%,50%": {
            content: "Software Developer"
          },
          "51%,100%": {
            content: "Frontend Developer"
          }
        }
      },
      animation: {
        bgAnimate: 'animatedBackground 20s linear infinite',
        textyping: 'cursorBlink 0.8s infinite, textTyping 10s steps(14) infinite',
        changeWord: 'changeWord 5s linear infinite',
        cursorBlink: ''
      }
    },
  },
  plugins: [],
};
