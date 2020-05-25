/* global module*/

module.exports = {
	extends: [
		'eslint:recommended',
	],
	rules: {
		curly: 2, //eslint core
		'no-empty': 2, //eslint core _ recommended
		'no-unused-expressions': 1, //eslint core
		'array-callback-return': 2,
		'no-empty-pattern': 1, //eslint _ recommended
		eqeqeq: ['error', 'smart'], //eslint core
		'no-magic-numbers': 1,
		'no-extra-bind': 2, //eslint core
		'no-multi-spaces': 2,
		yoda: 1, //eslint core
		'prefer-promise-reject-errors': 1,
		'require-await': 2,
		'no-use-before-define': 2,
		'no-undef-init': 1, //eslint core _ recommended
		quotes: ['error', 'single'], //eslint core
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': [1, 'never'],
		'array-element-newline': ['warn', 'consistent'],
		'block-spacing': 1,
		'brace-style': 'error', //eslint core
		camelcase: ['error', {properties: 'never', ignoreDestructuring: true}],
		'comma-spacing': ['error', { before: false, after: true }],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'func-call-spacing': ['error', 'never'],
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'consistent'],
		'id-length': ['error', { min: 2 }],
		indent: ['error', 'tab'],
		'jsx-quotes': [1, 'prefer-single'],
		'key-spacing': ['error', { afterColon: true }],
		'keyword-spacing': ['error', { before: true }],
		'max-len': ['error', { code: 90, ignoreComments: true, ignoreStrings: true }], //eslint core
		'max-depth': ['error', 4],
		'max-nested-callbacks': ['error', 3],
		'new-cap': ['warn', { newIsCap: true }],
		'new-parens': 'warn', //eslint core
		'no-mixed-operators': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': ['warn', { max: 3, maxEOF: 1 }], //eslint core
		'no-new-object': 'warn',
		'no-trailing-spaces': 'error', //eslint core
		'no-underscore-dangle': 'warn',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'no-constructor-return': 'error',
		'implicit-arrow-linebreak': ['error', 'beside'],
		'no-negated-condition': 'warn',
		'quote-props': ['error', 'as-needed'], //eslint core
		'semi-style': ['error', 'last'],
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', 'never'], //eslint core
		'space-infix-ops': 'error',
		'wrap-regex': 'error',
		'arrow-body-style': ['warn', 'as-needed'], //eslint core
		'arrow-parens': ['warn', 'as-needed'], //eslint core
		'arrow-spacing': 'warn',
		'no-duplicate-imports': 'error',
		'no-useless-computed-key': 'error',
		'no-var': 'error',
		'one-var': ['error', 'never'], //eslint core
		'prefer-const': 'error', //eslint core
		'prefer-template': 'warn', //eslint core
		'space-in-parens': ['warn', 'never'], //eslint core
	}
}

//why not rules
// https://eslint.org/docs/rules/eol-last //eslint core
// https://eslint.org/docs/rules/linebreak-style //eslint core
// https://eslint.org/docs/rules/padding-line-between-statements //eslint core

// https://eslint.org/docs/rules/comma-dangle
// https://eslint.org/docs/rules/func-names
// https://eslint.org/docs/rules/no-array-constructor
// https://eslint.org/docs/rules/object-curly-spacing
// https://eslint.org/docs/rules/object-property-newline
// https://eslint.org/docs/rules/space-unary-ops
// https://eslint.org/docs/rules/switch-colon-spacing
// https://eslint.org/docs/rules/no-sequences

// https://eslint.org/docs/user-guide/migrating-to-2.0.0 for ecmafeatures informations
// https://eslint.org/docs/rules/ || 0 => off, 1 => warn, 2 => error