module.exports = {
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: [
    "import",
    "prettier",
    "vue"
  ],
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  globals: {
    expect: true
  },
  rules: {
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "vue/html-indent": [
      2,
      2
    ],
    "comma-dangle": [
      2,
      "never"
    ],
    "arrow-body-style": [
      2,
      "always"
    ],
    "prefer-arrow-callback": [
      1
    ],
    "no-else-return": [
      1
    ],
    "no-unused-vars": [
      1
    ],
    "vars-on-top": [
      1
    ],
    "quotes": [
      "warn",
      "single"
    ],
    "no-alert": [
      1
    ],
    "import/extensions": [
      0
    ],
    "import/no-unresolved": [
      0
    ],
    "class-methods-use-this": [
      0
    ],
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": false,
        "object": true
      }
    }, {
      "enforceForRenamedProperties": false
    }],
    "no-param-reassign": [
      "error", {
        "props": false
      }
    ],
    "no-restricted-properties": [
      0
    ],
    "semi": [
      2,
      "always"
    ],
    "no-console": 1,
    "eqeqeq": 1,
    "space-before-blocks": 1,
    "keyword-spacing": 1,
    "vue/html-self-closing": 0,
    "vue/singleline-html-element-content-newline": 0
  }
}
