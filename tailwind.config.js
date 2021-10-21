const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    mode: "jit",
    darkMode: false,
    theme: {
        fontFamily: {
            openSauceSans: ["Open Sauce Sans", "sans-serif"],
        },
        colors: {
            white: "#ffffff",
            black: "#000000",
            blackLight: "#11112F",
            blackDark: "#0C0C28",
            purpleLighter: "#CBCBFF",
            purpleLight: "#7171B2",
            purpleDark: "#525284",
            blueDark: "#212149",
        },
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
        placeholderColor: {
            primary: "#525284",
        },
        backgroundImage: {
            checkbox: "url('/src/assets/images/tik.png')",
        },
    },
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    variants: {
        extend: {},
    },
    plugins: [],
}
