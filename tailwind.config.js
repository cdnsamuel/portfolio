/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      fontFamily: {
        fira: ['"Fira Code"', "monospace"],
        josefin: ['"Josefin Sans"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        portfolioLight: {
          primary: "#FFF6E8", // papaya white
          secondary: "#D5DFE5", // alice blue
          accent: "#81412C", // brick red
          neutral: "#3D348B", // purple
          "base-100": "#195D9A", // lapis blue
          info: "#00AFB5", // vergridis blue
          success: "#8EA604", // apple green
          warning: "#EC9F05", // gamboge orange
          error: "#BF3100", // rust red
        },
      },
      {
        portfolioDark: {
          primary: "#442063", // purple
          secondary: "#1d3263", // blue
          accent: "#E19C8F", // melon
          neutral: "#7E99C2", // light blue
          "base-100": "#DDC4DD", // light purple
          info: "#00AFB5", // vergridis blue
          success: "#8EA604", // apple green
          warning: "#EC9F05", // gamboge orange
          error: "#BF3100", // rust red
        },
      },
    ],
    darkTheme: "portfolioDark",
  },
}
