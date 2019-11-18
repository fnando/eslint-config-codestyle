module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:jest/recommended"
  ],
  overrides: [
    {
      files: [
        "**/*.test.{js,jsx,ts,tsx}"
      ],
      env: {
        jest: true
      },
    }
  ],
  plugins: ["import", "jest"],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/first": "warn",
    "import/order": "warn",

    "arrow-body-style": ["warn", "as-needed"],
    "class-methods-use-this": "warn",
    "linebreak-style": ["error", "unix"],
    "lines-between-class-members": ["error", "always"],
    "no-array-constructor": "error",
    "no-console": "warn",
    "no-debugger": "warn",
    "no-undef": "error",
    "no-underscore-dangle": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "warn",
    "no-useless-constructor": "error",
    "object-shorthand": ["error", "always", { "avoidQuotes": true }],
    "prefer-const": "warn",
    "prefer-destructuring": "error",
    "require-await": "error",
    "valid-jsdoc": ["warn"],
  }
};
