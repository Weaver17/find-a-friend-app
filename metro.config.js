const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.resolver = {
    ...config.resolver,
    alias: {
        "@": __dirname, // Map "@" to the root directory
    },
};

module.exports = withNativeWind(config, { input: "./app/global.css" });
