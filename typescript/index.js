/* global module*/

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'../rules/eslint-core.js', // extends eslint recommended
		'../rules/typescript.js',
	],
	rules: {
		'@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
		'@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: false }],
		'@typescript-eslint/no-inferrable-types': ['warn', {
			ignoreParameters: false,
			ignoreProperties: false,
		}], //default
	}
};


// TypeScript-specific
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
// https://github.com/TristonJ/eslint-plugin-prefer-arrow
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md


// Functionality [check rules included in eslintjs]

// Maintainability [check rules included in eslintjs]

// Style [check rules included in eslintjs]

// tslint-microsoft-contrib rules [check rules included in eslintjs]


//Note: Make sure to use eslint --ext .js,.ts since by default eslint will only search for .js files.
// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
// https://github.com/typescript-eslint/typescript-eslint
// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/README.md
// https://eslint.org/blog/2019/01/future-typescript-eslint

/*
https://stackoverflow.com/questions/56557988/eslint-in-vsc-not-working-for-ts-and-tsx-files
"eslint.validate": [
	"javascript",
	"javascriptreact",
	"typescript",
	"typescriptreact",
],
*/