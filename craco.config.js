const { ESLINT_MODES } = require("@craco/craco");
const path = require("path");

module.exports = {
    webpack: {
        alias: {
            components: path.resolve(__dirname, "src/components/"),
            data: path.resolve(__dirname, "src/data/"),
            screens: path.resolve(__dirname, "src/screens/")
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "^components(.*)$": "<rootDir>/src/components$1",
                "^data(.*)$": "<rootDir>/src/data$1",
                "^screens(.*)$": "<rootDir>/src/screens$1"
            }
        },
        setupFilesAfterEnv: ["<rootDir>/jest-setup-framework.js"]
    },
    eslint: {
        mode: ESLINT_MODES.file
    }
};
