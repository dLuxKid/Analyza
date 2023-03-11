/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "680px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      dispaly: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    colors: {
      black1: "#181c1e",
      black2: "#323335",
      natural1: "#5B5C5E",
      natural2: "#4C4D4F",
      natural3: "#858688",
      fill: "#F7F7FC",
      white: "#ffffff",
      green: "#0CAF60",
      red: "#FA5F1C",
      "half-transparent": "rgba(0,0,0,0.5)",
    },
    extend: {
      backgroundColor: {
        black1: "#181c1e",
        black2: "#323335",
        natural1: "#5B5C5E",
        natural2: "#4C4D4F",
        natural3: "#858688",
        fill: "#F7F7FC",
        white: "#ffffff",
        green: "#0CAF60",
        red: "#FA5F1C",
        "half-transparent": "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
