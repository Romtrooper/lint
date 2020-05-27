/* global module*/

module.exports = {
	extends: [
		'../rules/eslint-core.js', // extends eslint recommended
		'../rules/eslint.js',
		'../rules/plugin-react.js',
		'../rules/plugin-import.js',
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
		'react',
	],
}
