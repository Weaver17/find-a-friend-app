/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#30A813",
                secondary: "#FFF714",
                light: {
                    100: "#D1F0CA",
                    200: "#94DE82",
                    300: "#3ACC17",
                },
                dark: {
                    100: "#29541E",
                    200: "#114A04",
                },
                accent: "#FFFA70",
            },
        },
    },
    plugins: [],
};
