/* global module*/

module.exports = {
	extends: [
		'eslint:recommended',
		'./plugin-react.js',
		'./plugin-import.js'
	],
	root: true,
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		parser: 'babel-eslint',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		es2017: true
	},
	plugins: [
		'react'
	],
	rules: {
		'no-empty': 2,
		'array-callback-return': 2,
		'no-empty-pattern': 1,
		eqeqeq: ['error', 'smart'],
		curly: 2,
		'no-magic-numbers': 1,
		'no-extra-bind': 2,
		'no-multi-spaces': 2,
		'no-unused-expressions': 1,
		yoda: 1,
		'prefer-promise-reject-errors': 1,
		'require-await': 2,
		'no-use-before-define': 2,
		'no-undef-init': 1,
		quotes: ['error', 'single'],
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': [1, 'never'],
		'array-element-newline': ['warn', 'consistent'],
		'block-spacing': 1,
		'brace-style': 'error',
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
		'max-depth': ['error', 4],
		'max-len': ['error', { code: 90, ignoreComments: true, ignoreStrings: true }],
		'max-nested-callbacks': ['error', 3],
		'new-cap': ['warn', { newIsCap: true }],
		'new-parens': 'warn',
		'no-mixed-operators': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': ['warn', { max: 3, maxEOF: 1 }],
		'no-new-object': 'warn',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 'warn',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'no-constructor-return': 'error',
		'implicit-arrow-linebreak': ['error', 'beside'],
		'no-negated-condition': 'warn',
		'quote-props': ['error', 'as-needed'],
		'semi-style': ['error', 'last'],
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', 'never'],
		'space-infix-ops': 'error',
		'wrap-regex': 'error',
		'arrow-body-style': ['warn', 'as-needed'],
		'arrow-parens': ['warn', 'as-needed'],
		'arrow-spacing': 'warn',
		'no-duplicate-imports': 'error',
		'no-useless-computed-key': 'error',
		'no-var': 'error',
		'one-var': ['error', 'never'],
		'prefer-const': 'error',
		'prefer-template': 'warn',
		'space-in-parens': ['error', 'always'],
	}
}

//why not rules
// https://eslint.org/docs/rules/comma-dangle
// https://eslint.org/docs/rules/eol-last
// https://eslint.org/docs/rules/func-names
// https://eslint.org/docs/rules/linebreak-style
// https://eslint.org/docs/rules/no-array-constructor
// https://eslint.org/docs/rules/object-curly-spacing
// https://eslint.org/docs/rules/object-property-newline
// https://eslint.org/docs/rules/padding-line-between-statements
// https://eslint.org/docs/rules/space-unary-ops
// https://eslint.org/docs/rules/switch-colon-spacing

// https://eslint.org/docs/user-guide/migrating-to-2.0.0 for ecmafeatures informations
// https://eslint.org/docs/rules/ || 0 => off, 1 => warn, 2 => error