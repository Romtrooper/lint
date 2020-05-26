/* global module*/

module.exports = {
	extends: [
		'eslint:recommended',
	],
	rules: {
		'@typescript-eslint/no-magic-numbers': ['error'], //eslint rule: 'no-magic-numbers'
		'@typescript-eslint/no-use-before-define': ['error'], //eslint rules: 'no-use-before-define'
		'@typescript-eslint/indent': ['error', 'tab'], // eslint rule: indent

		'array-callback-return': 2,
		'no-empty-pattern': 1, //eslint _ recommended
		'no-multi-spaces': 2, // https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noMultiSpacesRule.md
		'prefer-promise-reject-errors': 1,
		'require-await': 2,
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': [1, 'never'], // https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/arrayBracketSpacingRule.md
		'array-element-newline': ['warn', 'consistent'],
		'block-spacing': 1,
		camelcase: ['error', {properties: 'never', ignoreDestructuring: true}],
		'comma-spacing': ['error', { before: false, after: true }], // not in tslint
		'comma-style': ['error', 'last'], // not in tslint
		'computed-property-spacing': ['error', 'never'], //https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terComputedPropertySpacingRule.md
		'func-call-spacing': ['error', 'never'], // https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terFuncCallSpacingRule.md
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'consistent'],
		'id-length': ['error', { min: 2 }], //not in tslint
		'jsx-quotes': [1, 'prefer-single'], //not in tslint
		'key-spacing': ['error', { afterColon: true }], //not in tslint
		'keyword-spacing': ['error', { before: true }], //not in tslint
		'max-depth': ['error', 4], //not in tslint
		'max-nested-callbacks': ['error', 3], //  //not in tslint
		'new-cap': ['warn', { newIsCap: true }], // Not applicable
		'no-mixed-operators': 'error',
		'no-multi-assign': 'error',
		'no-new-object': 'warn', //not in tslint
		'no-underscore-dangle': 'warn', //not in tslint
		'no-unneeded-ternary': 'error', //not in tslint
		'no-whitespace-before-property': 'error', //not in tslint
		'no-constructor-return': 'error',
		'implicit-arrow-linebreak': ['error', 'beside'],
		'no-negated-condition': 'warn', //not in tslint
		'semi-style': ['error', 'last'],
		'space-before-blocks': 'error', //not in tslint
		'space-infix-ops': 'error', //not in tslint
		'wrap-regex': 'error', //not in tslint
		'arrow-spacing': 'warn', // https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terArrowSpacingRule.md
		'no-duplicate-imports': 'error', // not in tslint
		'no-useless-computed-key': 'error',
	}
}


// https://openbase.io/js/tslint-eslint-rules