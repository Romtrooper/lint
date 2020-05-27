/* global module*/

module.exports = {
	extends: [
		'eslint:recommended',
	],
	rules: {
		curly: 2, // @typescript-eslint core
		'no-empty': 2, // @typescript-eslint core _ recommended
		'no-unused-expressions': 1, // @typescript-eslint core
		eqeqeq: ['error', 'smart'], // @typescript-eslint core
		'no-extra-bind': 2, // @typescript-eslint core
		yoda: 1, // @typescript-eslint core
		'no-undef-init': 1, // @typescript-eslint core _ recommended
		quotes: ['error', 'single'], // @typescript-eslint core
		'brace-style': 'error', // @typescript-eslint core
		'max-len': ['error', { code: 90, ignoreComments: true, ignoreStrings: true }], // @typescript-eslint core
		'new-parens': 'warn', // @typescript-eslint core
		'no-multiple-empty-lines': ['warn', { max: 3, maxEOF: 1 }], // @typescript-eslint core
		'no-trailing-spaces': 'error', // @typescript-eslint core
		'quote-props': ['error', 'as-needed'], // @typescript-eslint core
		'space-before-function-paren': ['error', 'never'], // @typescript-eslint core
		'arrow-body-style': ['warn', 'as-needed'], // @typescript-eslint core
		'arrow-parens': ['warn', 'as-needed'], // @typescript-eslint core
		'no-var': 'error', // @typescript-eslint core
		'one-var': ['error', 'never'], // @typescript-eslint core
		'prefer-const': 'error', // @typescript-eslint core
		'prefer-template': 'warn', // @typescript-eslint core
		'space-in-parens': ['warn', 'never'], // @typescript-eslint core
	}
}