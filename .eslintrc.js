const defaultConfig = require( '@wordpress/scripts/config/.eslintrc.js' );
module.exports = {
	...defaultConfig,
	parser: "@typescript-eslint/parser",
	extends: [
		...defaultConfig.extends,
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
};
