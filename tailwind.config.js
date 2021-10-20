const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  darkMode: false,
  theme: {
    fontFamily: {
      openSauceSans: ["Open Sauce Sans", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        blackLight: "#11112F",
        blackDark: "#0C0C28",
        purpleLight: "#7171B2",
        purpleDark: "#525284",
        blueDark: "#212149",
        blue: "515FFF",
        purpleDarkest: "#19193F",
      },
      boxShadow: {
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.15)",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    placeholderColor: {
      primary: "#525284",
    },
  },
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  variants: {
    extend: {},
  },
  plugins: [],
}
