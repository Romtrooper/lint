/* global module*/
module.exports = {
	extends: [
		'plugin:react/recommended'
	],
	rules: {
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
		'react/jsx-indent': [2, 'tab', {indentLogicalExpressions: true}],
		'react/jsx-curly-brace-presence': [1, 'never'],
		'react/jsx-curly-newline': [1, { multiline: 'consistent', singleline: 'consistent' }],
		'react/jsx-curly-spacing': [1, { when: 'never'}],
		'react/jsx-handler-names': 1,
		'react/jsx-props-no-spreading': [1, {
			html: 'ignore',
			custom: 'enforce',
			explicitSpread: 'ignore',
			exceptions: []
		}]
	}
}

//see
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md //in recommended


// Eslint-plugin-react recommended rules => https://github.com/yannickcr/eslint-plugin-react#recommended
