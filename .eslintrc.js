module.exports = {
	root: true,
	env: {
		browser: true,
		jest: true
	},
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname
	},
	ignorePatterns: [
		'.storybook/',
		'.eslintrc.js',
		'tailwind.config.js',
		'node_modules/',
		'package*.json',
		'config/',
		'scripts/',
		'packages/',
		'src/stories/'
	],
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:import/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'plugin:storybook/recommended'
	],
	plugins: ['prettier'],
	rules: {
		'react/require-default-props': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'no-nested-ternary': 0,
		'global-require': 0,
		'react/display-name': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/ban-types': 0,
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto'
			}
		],
		'react/react-in-jsx-scope': 0,
		'react/jsx-props-no-spreading': 0,
		// jsx-a11y/label-has-associated-control has some weird requirements; disabling.
		'jsx-a11y/label-has-associated-control': 0,
		// I feel like this is requiring too much to be in "dependencies" rather than "devDependencies" and it's giving weird results
		'import/no-extraneous-dependencies': 0,
		// This doesn't allow typescript-only imported objects
		'import/named': 0
	}
};
