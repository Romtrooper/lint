/* global module*/

module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended'
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
		'jsx-a11y/no-static-element-interactions': 0,
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
		'react/display-name': 'off',
		'react/jsx-no-comment-textnodes': 'off',
		'react/no-children-prop': 'off',
		'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: true }],
		'react/destructuring-assignment': ['warn', 'always'],
		'react/no-access-state-in-setstate': 1,
		'react/no-array-index-key': 1,
		'react/no-danger': 2,
		'react/no-multi-comp': 1,
		'react/no-redundant-should-component-update': 2,
		'react/no-this-in-sfc': 2,
		'react/no-typos': 2,
		'react/no-unsafe': 1,
		'react/no-unused-prop-types': 1,
		'react/no-unused-state': 1,
		'react/prefer-es6-class': [2, 'always'],
		'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
		'react/boolean-prop-naming': ['error'],
		'react/require-default-props': 1,
		'react/self-closing-comp': 2,
		'react/button-has-type': [2],
		'react/sort-comp': [2],
		'react/no-will-update-set-state': [2],
		'react/prefer-read-only-props': 2,
		'react/jsx-closing-bracket-location': 1,
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-key': [2, { checkFragmentShorthand: true }],
		'react/jsx-closing-tag-location': 1,
		'react/jsx-equals-spacing': [2, 'never'],
		'react/jsx-fragments': [1, 'syntax'],
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-no-undef': [2, { allowGlobals: true }],
		'react/jsx-no-useless-fragment': 1,
		'react/jsx-boolean-value': [1, 'never'],
		'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
		'react/jsx-max-props-per-line': [1, { maximum: 2 }],
		'react/jsx-pascal-case': 2,
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-indent': [2, 'tab', {indentLogicalExpressions: true}]
	}
}

// Eslint-plugin-react recommended rules => https://github.com/yannickcr/eslint-plugin-react#recommended

// https://eslint.org/docs/rules/ || 0 => off, 1 => warn, 2 => error

//see
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md

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
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md //in recommended

// https://eslint.org/docs/user-guide/migrating-to-2.0.0 for ecmafeatures informations