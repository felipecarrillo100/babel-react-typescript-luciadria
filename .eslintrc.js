module.exports = {
    parser:  '@typescript-eslint/parser',
    extends:  [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
    },
    plugins: ["prettier"],
    rules: {
        "no-unused-vars": "off",
        "no-useless-escape": "warn",
        "no-irregular-whitespace": "warn",
        "no-self-assign": "warn",
        "no-prototype-builtins": "off",
        "no-control-regex": "off",
        "no-constant-condition": "warn",
        "no-case-declarations": "off",
        "camelcase": "off",
        "react/jsx-no-target-blank": "off",    // Needs review
        "react/no-find-dom-node": "off",       // Needs review
        "react/prop-types": [2, { ignore: ['children', 'customValidators'] }],
        "react/no-unescaped-entities": "off",
        "react/display-name": "off",
        "react/no-deprecated": "warn",
        "react/no-children-prop": "off",
        "prettier/prettier": ["error", {
            "endOfLine":"auto",
            singleQuote: true,
        }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off"
    },
    settings: {
        "react": {
            "version": "detect",
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
};
