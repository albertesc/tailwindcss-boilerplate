const _ = require("lodash");

const customColors = {
    primary: {
        100: '#84e0ff',
        200: '#70ccff',
        300: '#5cb8ff',
        400: '#48a4f0',
        500: '#3490DC',
        600: '#207cc8',
        700: '#0c68b4',
        800: '#0054a0',
        900: '#00408c'
    },
};

module.exports = {
    theme: {
        extend: {
            fontSize: {
                base: "15px",
            },
            fontFamily: {
                heading: ["Rubik", "sans-serif"],
                body: ["Rubik", "sans-serif"]
            },
            colors: {
                ...customColors
            },
            textColor: {
                ...customColors
            },
            backgroundColor: {
                ...customColors
            }
        }
    },
    variants: {},
    plugins: [
        require("@tailwindcss/ui")
    ],
    purge: [
        './public/**/*.html',
        './src/**/*.js'
    ],
};
