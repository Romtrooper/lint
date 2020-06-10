/* global module*/

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		project: './tsconfig.json'
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'./rules/eslint-core.js', // extends eslint recommended
		'./rules/typescript.js',
	],
};
