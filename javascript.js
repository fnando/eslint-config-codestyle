const packageJson = require(process.cwd() + "/package.json");
const jestSupport = Boolean(
  packageJson.devDependencies?.jest || packageJson.dependencies?.jest,
);

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    module: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:@fnando/consistent-import/recommended",
    jestSupport ? "plugin:jest/recommended" : null,
  ].filter(Boolean),
  overrides: [
    {
      files: ["**/*.test.{js,jsx,ts,tsx}"],
      env: {
        jest: true,
      },
    },
  ],
  plugins: [
    "import",
    "@fnando/consistent-import",
    jestSupport ? "jest" : null,
  ].filter(Boolean),
  rules: {
    "import/no-unresolved": "off",
    "class-methods-use-this": "off",
    "import/first": "warn",
    "import/order": "warn",

    "import/no-extraneous-dependencies": "error",
    "arrow-body-style": ["warn", "as-needed"],
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
    "object-shorthand": ["error", "always", { avoidQuotes: true }],
    "prefer-const": "warn",
    "prefer-destructuring": "error",
    "require-await": "error",
    "valid-jsdoc": ["warn"],
  },
};
