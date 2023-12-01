import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      gold: "#EFB520",
      green: "#BEFF04",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        spinSlow: {
          "0%": {
            transform: "rotate(0deg)",
            animationTimingFunction: "ease-in-out",
          },
          "100%": {
            transform: "rotate(780deg)",
            animationTimingFunction: "ease-in-out",
          },
        },
        spinSlowSecond: {
          "0%": {
            transform: "rotate(780deg)",
            animationTimingFunction: "ease-in-out",
          },
          "100%": {
            transform: "rotate(1280deg)",
            animationTimingFunction: "ease-in-out",
          },
        },
      },
      animation: {
        "spin-slow": "spinSlow 3s forwards", // Измените 3s на желаемую продолжительность
        "spin-slow-second": "spinSlowSecond 3s forwards", // Измените 3s на желаемую продолжительность
      },
    },
  },
  plugins: [],
};
export default config;
