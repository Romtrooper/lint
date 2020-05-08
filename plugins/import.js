/* global module*/

module.exports = {
	plugins: ['import'],
	rules: {
		'import/export': 1,
		'import/first': 2,
		'import/group-exports': 2,
		'import/max-dependencies': 1,
		'import/named': 2,
		'import/newline-after-import': 1,
		'import/no-absolute-path': 2,
		'import/no-cycle': 2,
		'import/no-duplicates': 2,
		'import/no-extraneous-dependencies': 1,
		'import/no-mutable-exports': 2,
		'import/no-named-as-default-member': 1,
		'import/no-named-as-default': 2,
		'import/no-named-default': 2,
		'import/no-self-import': 2,
		'import/no-unresolved': 2,
		'import/no-useless-path-segments': 2,
		'import/prefer-default-export': 1,
	}
}

// https://github.com/benmosher/eslint-plugin-import
