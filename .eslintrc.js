module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2017: true,
        mocha: true,
    },
    extends: [
        "plugin:prettier/recommended",
        'plugin:@fintechstudios/chai-as-promised/recommended',
        'plugin:security/recommended',
        'eslint:recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
    },
    plugins: [
        '@typescript-eslint',
        '@fintechstudios/eslint-plugin-chai-as-promised',
        'mocha',
        'security',
        'filenames'
    ],
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'mocha/no-skipped-tests': 'error',
        'mocha/no-exclusive-tests': 'error',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        camelcase: 'off',
        'no-unused-vars': 'off',
        'security/detect-non-literal-fs-filename': 'off',
        "no-console": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
    },
    "overrides": [
        {
            // enable the rule specifically for TypeScript files
            "files": ["*.ts", "*.tsx"],
            "rules": {
                "@typescript-eslint/explicit-function-return-type": ["error"]
            }
        }
    ]
};
