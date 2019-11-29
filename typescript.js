const path = require("path");

module.exports = {
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: path.join(process.cwd(), "tsconfig.json")
      },
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
        "react/jsx-filename-extension": ["error", { extensions: ["tsx"] }],
        "@typescript-eslint/consistent-type-assertions": "warn",
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
      }
    }
  ]
}
