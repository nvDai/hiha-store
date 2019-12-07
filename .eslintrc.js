module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    semi: [2, "never"],
    quotes: ["error", "single", { avoidEscape: true }],
    "react/jsx-props-no-spreading": 0,
    "react/jsx-curly-spacing": [
      2,
      {
        when: "always",
        children: true,
        spacing: {
          objectLiterals: "never"
        }
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "array-bracket-spacing": [2, "never"],
    "object-curly-spacing": ["error", "always"],
    "jsx-a11y/no-static-element-interactions": 0,
    "react/prop-types": 0,
    "max-len": [1, 80],
    "max-statements": [1, 15]
  }
};
