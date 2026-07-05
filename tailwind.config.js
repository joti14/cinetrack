/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        reel: {
          bg: "#0B0D10",
          surface: "#15181D",
          surface2: "#1D2127",
          border: "#262B33",
          text: "#EDEEF0",
          muted: "#8A8F98",
          amber: "#E8A33D",
          amberDark: "#C67F1F",
          red: "#C1443C",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wideish: "0.04em",
      },
    },
  },
  plugins: [],
};
