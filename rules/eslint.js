/* global module*/

module.exports = {
	rules: {
		'array-callback-return': 2,
		'no-empty-pattern': 1, //eslint _ recommended
		'no-magic-numbers': 1,
		'no-multi-spaces': 2,
		'prefer-promise-reject-errors': 1,
		'require-await': 2,
		'no-use-before-define': 2,
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': [1, 'never'],
		'array-element-newline': ['warn', 'consistent'],
		'block-spacing': 1,
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
		'max-nested-callbacks': ['error', 3],
		'new-cap': ['warn', { newIsCap: true }],
		'no-mixed-operators': 'error',
		'no-multi-assign': 'error',
		'no-new-object': 'warn',
		'no-underscore-dangle': 'warn',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'no-constructor-return': 'error',
		'implicit-arrow-linebreak': ['error', 'beside'],
		'no-negated-condition': 'warn',
		'semi-style': ['error', 'last'],
		'space-before-blocks': 'error',
		'space-infix-ops': 'error',
		'wrap-regex': 'error',
		'arrow-spacing': 'warn',
		'no-duplicate-imports': 'error',
		'no-useless-computed-key': 'error',
	}
}

//why not rules
// https://eslint.org/docs/rules/eol-last // @typescript-eslint core
// https://eslint.org/docs/rules/linebreak-style // @typescript-eslint core
// https://eslint.org/docs/rules/padding-line-between-statements // @typescript-eslint core

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