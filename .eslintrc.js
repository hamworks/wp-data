module.exports = {
	root: true,
	"parser": "@typescript-eslint/parser",
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended',
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		// Temporary workaround to use linting rules for both e2e and unit tests with all files
		// until override files globbing logic is fixed when using with --config.
		// @see https://github.com/eslint/eslint/issues/11558
		'plugin:@wordpress/eslint-plugin/test-e2e',
		'plugin:@wordpress/eslint-plugin/test-unit',
	],
};
