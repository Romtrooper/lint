/* global module*/

module.exports = {
	rules: {
		'@typescript-eslint/no-magic-numbers': ['error'], //eslint rule: 'no-magic-numbers'
		'@typescript-eslint/no-use-before-define': ['error'], //eslint rules: 'no-use-before-define'
		'@typescript-eslint/indent': ['error', 'tab'], // eslint rule: 'indent'
		'@typescript-eslint/require-await': 'error', // eslint rules: 'require-await'
		'@typescript-eslint/func-call-spacing': ['error', 'never'], // eslint rules: 'func-call-spacing'
		'@typescript-eslint/comma-spacing': ['error', { before: false, after: true }], // eslint rules: 'func-call-spacing'=> { not in tslint }


		'semi-style': ['error', 'last'], // ?? https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
		'no-empty-pattern': 1, //eslint _ recommended -> not in tslint
		'no-multi-spaces': 2, // https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noMultiSpacesRule.md
		'prefer-promise-reject-errors': 1,
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': [1, 'never'], // https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/arrayBracketSpacingRule.md
		'array-element-newline': ['warn', 'consistent'],
		'block-spacing': 1, // https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/blockSpacingRule.md
		camelcase: ['error', {properties: 'never', ignoreDestructuring: true}], // https://palantir.github.io/tslint/rules/variable-name/
		'computed-property-spacing': ['error', 'never'], //https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terComputedPropertySpacingRule.md
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'consistent'],
		'no-mixed-operators': 'error',
		'no-multi-assign': 'error',
		'no-constructor-return': 'error',
		'implicit-arrow-linebreak': ['error', 'beside'],
		'arrow-spacing': 'warn', // https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terArrowSpacingRule.md
		'no-useless-computed-key': 'error',
		// 'new-cap': ['warn', { newIsCap: true }], { not applicable }
		// 'array-callback-return': 2, { not in tslint }
		// 'comma-style': ['error', 'last'], { not in tslint }
		// 'id-length': ['error', { min: 2 }], { not in tslint }
		// 'jsx-quotes': [1, 'prefer-single'], { not in tslint }
		// 'key-spacing': ['error', { afterColon: true }], { not in tslint }
		// 'keyword-spacing': ['error', { before: true }], { not in tslint }
		// 'max-depth': ['error', 4], { not in tslint }
		// 'max-nested-callbacks': ['error', 3], //  { not in tslint }
		// 'no-new-object': 'warn', { not in tslint }
		// 'no-underscore-dangle': 'warn', { not in tslint }
		// 'no-unneeded-ternary': 'error', { not in tslint }
		// 'no-whitespace-before-property': 'error', { not in tslint }
		// 'no-negated-condition': 'warn', { not in tslint }
		// 'space-before-blocks': 'error', { not in tslint }
		// 'space-infix-ops': 'error', { not in tslint }
		// 'wrap-regex': 'error', { not in tslint }
		// 'no-duplicate-imports': 'error', { not in tslint }
	}
}
