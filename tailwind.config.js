/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "100px",
      md: "540px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        blue: "#4285f4",
        violet: "#9b72cb",
        brick: "#d96570",
        dark: "#131313",
      },

      backgroundImage: (theme) => ({
        gradient_text: `linear-gradient(74deg,${theme("colors.blue")} 0,${theme(
          "colors.violet"
        )} 9%,${theme("colors.brick")} 20%,${theme("colors.brick")} 24%,${theme(
          "colors.violet"
        )} 35%,${theme("colors.blue")} 44%,${theme(
          "colors.violet"
        )} 50%,${theme("colors.brick")} 56%,${theme("colors.dark")} 75%,${theme(
          "colors.dark"
        )} 100%)`,
        hero: "url('/assets/bg_top.jpg')",
      }),
      keyframes: {
        animatedBackground: {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "100% 0",
          },
        },
      },
      animation: {
        bgAnimate: "animatedBackground 25s linear infinite",
      },
    },
  },
  plugins: [],
};
