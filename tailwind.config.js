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
                primary: "#061096",
                secondary: "#f5bf2c",
                light: {
                    100: "#868aba",
                    200: "#5e64b8",
                    300: "#333cb8",
                },
                dark: {
                    100: "#292c59",
                    200: "#0f145c",
                },
                accent: "#f7d372",
            },
        },
    },
    plugins: [],
};
