module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],
      rules: {
      "@typescript-eslint/rule-name": "error"
    }
  };

//Note: Make sure to use eslint --ext .js,.ts since by default eslint will only search for .js files.
// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md


// for TS => https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md
// https://github.com/typescript-eslint/typescript-eslint
// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/README.md
// https://eslint.org/blog/2019/01/future-typescript-eslint