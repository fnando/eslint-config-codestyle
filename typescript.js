const path = require("path");
const pkg = require(`${process.cwd()}/package.json`);
const usesReact = (pkg.dependencies && pkg.dependencies.react) ||
                  (pkg.devDependencies && pkg.devDependencies.react);

const reactRules = {
  "react/jsx-filename-extension": ["error", { extensions: ["tsx"] }],
};

module.exports = {
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
      ],
      settings: {
        "import/resolver": {
          node: {
            extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
          },
        },
      },
      plugins: ["@typescript-eslint"],
      files: "**/*.{ts,tsx}",
      rules: {
        ...(usesReact ? reactRules : {}),
        "react/prop-types": "off",
        "import/named": "off",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/no-use-before-define": [
          "warn",
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            args: "none",
            ignoreRestSiblings: true,
          },
        ],
        "@typescript-eslint/no-useless-constructor": "error",
      },
    },
  ],
}
