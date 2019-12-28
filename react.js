module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:import/typescript",
  ],
  plugins: ["react", "react-hooks"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json"],
      },
    },
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  overrides: [
    {
      files: "**/*.{tsx,jsx}",
      rules: {
        "jsx-quotes": ["error", "prefer-double"],
        "react/jsx-child-element-spacing": "off",
        "react/jsx-max-depth": "off",
        "react/display-name": ["off", { ignoreTranspilerName: false }],
        "react/forbid-dom-props": ["off", { forbid: [] }],
        "react/jsx-space-before-closing": ["off", "always"],
        "react-hooks/exhaustive-deps": "off",
        "react/jsx-key": "error",
        "react/no-multi-comp": "off",
        "react/no-unused-prop-types": "error",
        "react/jsx-no-useless-fragment": "error",
        "react/sort-comp": "warn",
        "react/no-access-state-in-setstate": "error",
        "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
        "react/default-props-match-prop-types": "error",
        "react/no-unused-state": "error",
        "react/no-typos": "error",
        "react/jsx-filename-extension": ["error", { extensions: ["tsx"] }],
        "react/jsx-no-comment-textnodes": "error",
        "react/no-danger-with-children": "error",
        "react/style-prop-object": "error",
        "react/no-unescaped-entities": "error",
        "react/no-children-prop": "error",
        "react/jsx-boolean-value": ["error", "never", { always: [] }],
        "react/jsx-closing-bracket-location": ["error", "line-aligned"],
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-spacing": ["error", "never", { allowMultiline: true }],
        "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
        "react/jsx-no-literals": "off",
        "react/jsx-no-undef": "error",
        "react/jsx-uses-react": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-will-update-set-state": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-is-mounted": "error",
        "react/jsx-uses-vars": "error",
        "react/no-danger": "error",
        "react/no-set-state": "error",
        "react/no-string-refs": "error",
        "react/no-unknown-property": "error",
        "react/no-deprecated": "error",
        "react/react-in-jsx-scope": "error",
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-indent": ["error", 2],
        "react/no-array-index-key": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/destructuring-assignment": ["error", "always"],
        "react/jsx-props-no-multi-spaces": "error",
        "react/no-unsafe": "error",
        "react/jsx-fragments": ["error", "syntax"],
        "react/static-property-placement": ["error", "property assignment"],
        "react/prefer-read-only-props": "off",

        "react/sort-prop-types": [
          "error",
          {
            ignoreCase: true,
            callbacksLast: false,
            requiredFirst: false,
            sortShapeProp: true,
          },
        ],

        "react/jsx-props-no-spreading": [
          "error",
          {
            html: "enforce",
            custom: "enforce",
            exceptions: [],
          },
        ],

        "react/jsx-curly-newline": [
          "error",
          {
            multiline: "consistent",
            singleline: "consistent",
          },
        ],

        "react/jsx-curly-brace-presence": [
          "error",
          { props: "never", children: "never" },
        ],

        "react/require-default-props": [
          "error",
          {
            forbidDefaultForRequired: true,
          },
        ],

        "react/prefer-stateless-function": [
          "error",
          { ignorePureComponents: true },
        ],

        "react/jsx-sort-default-props": [
          "error",
          {
            ignoreCase: true,
          },
        ],

        "react/jsx-sort-props": [
          "error",
          {
            ignoreCase: true,
            callbacksLast: false,
            shorthandFirst: false,
            shorthandLast: false,
            noSortAlphabetically: false,
            reservedFirst: true,
          },
        ],

        "react/jsx-pascal-case": [
          "error",
          {
            allowAllCaps: true,
            ignore: [],
          },
        ],

        "react/jsx-max-props-per-line": [
          "error",
          { maximum: 1, when: "multiline" },
        ],

        "react/jsx-handler-names": [
          "error",
          {
            eventHandlerPrefix: "handle",
            eventHandlerPropPrefix: "on",
          },
        ],

        "react/forbid-prop-types": [
          "error",
          {
            forbid: ["any", "array", "object"],
            checkContextTypes: true,
            checkChildContextTypes: true,
          },
        ],

        "react/prop-types": [
          "error",
          {
            ignore: [],
            customValidators: [],
            skipUndeclared: false,
          },
        ],

        "react/jsx-wrap-multilines": [
          "error",
          {
            declaration: "parens-new-line",
            assignment: "parens-new-line",
            return: "parens-new-line",
            arrow: "parens-new-line",
            condition: "parens-new-line",
            logical: "parens-new-line",
            prop: "parens-new-line",
          },
        ],

        "react/jsx-tag-spacing": [
          "error",
          {
            closingSlash: "never",
            beforeSelfClosing: "always",
            afterOpening: "never",
            beforeClosing: "never",
          },
        ],

        "react/boolean-prop-naming": [
          "error",
          {
            propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
            rule: "^(is|has|must|will|did|should)[A-Z]([A-Za-z0-9]?)+",
          },
        ],

        "react/jsx-no-bind": [
          "error",
          {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowFunctions: false,
            allowBind: false,
            ignoreDOMComponents: true,
          },
        ],
      }
    }
  ]
}
