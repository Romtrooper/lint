/* global module*/

module.exports = {
	rules: {
		'@typescript-eslint/no-magic-numbers': ['error'], //eslint rule: 'no-magic-numbers'
		'@typescript-eslint/no-use-before-define': ['error'], //eslint rules: 'no-use-before-define'
		'@typescript-eslint/indent': ['error', 'tab'], // eslint rule: 'indent'
		'@typescript-eslint/require-await': 'error', // eslint rules: 'require-await'
		'@typescript-eslint/func-call-spacing': ['error', 'never'], // eslint rules: 'func-call-spacing'
		'@typescript-eslint/comma-spacing': ['error', { before: false, after: true }], // eslint rules: 'func-call-spacing'=> { not in tslint }

		'@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
		'@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: false }],
		'@typescript-eslint/no-inferrable-types': ['warn', { ignoreParameters: false, ignoreProperties: false }], //default

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
