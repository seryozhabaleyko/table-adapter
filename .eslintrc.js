module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.eslint.json'
    },
    ignorePatterns: ['.eslintrc.js'],
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        // this option sets a specific tab width for your code
        // https://eslint.org/docs/rules/indent
        indent: ['error', 4, { SwitchCase: 1 }],
        '@typescript-eslint/indent': 'off',

        // https://eslint.org/docs/rules/default-case
        'default-case': 'off',

        'import/prefer-default-export': 'off',

        // only .tsx files may have JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

        // Enforce JSX indentation
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': ['error', 4, { checkAttributes: true }],

        // Validate props indentation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': ['error', 4],

        // Enforce a specific function type for function components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
        'react/function-component-definition': ['error', {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
        }],

        // Enforce a convention in module import order
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
        'import/order': [
            'error', {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
                'newlines-between': 'always'
            }
        ],

        // Prevent usage of Array index in keys
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        'react/no-array-index-key': 'off',

        // Detect missing key prop
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        'react/jsx-key': 'off',

        'react/jsx-props-no-spreading': 'off',
    },
};
