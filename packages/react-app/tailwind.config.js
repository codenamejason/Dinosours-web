const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: ["dinosour-background"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "dinosour-background": "url('/src/assets/img/iconbg.png')",
      },
      colors: {
        orange: colors.orange,
        green: {
          "050": "#6dc5a040",
          "dark-green": "#337062",
          teal: "#2CAE92",
        },
        yellow: {
          gold: "#C2A800",
          brown: "#6F6210",
        },
        gray: {
          "intro-gray": "#2D2C31",
        },
      },
    },
    fontFamily: {
      junge: ["Junge"],
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      intro: "890px",
      "intro-mobile": "450px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
