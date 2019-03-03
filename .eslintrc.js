module.exports = {
	env: {
		commonjs: true,
		es6: true,
		jest: true
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single']
	}
};
