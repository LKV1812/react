module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            babelrc: false,
            configFile: false,
            // your babel options
            presets: ["@babel/preset-env"],
        },
    },
    "rules": {
        "no-unused-vars": "warn"
    },
    "env": {
        "browser": true,
        // "node": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        // "plugin:react/recommended",
        // "plugin:@typescript-eslint/eslint-plugin"
    ],
};