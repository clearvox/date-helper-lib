module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2017: true,
        mocha: true,
    },
    extends: [
        'standard',
        'plugin:@typescript-eslint/recommended',
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
        '@typescript-eslint/no-useless-constructor': 'error',
        "@typescript-eslint/explicit-function-return-type": "off",
        'node/handle-callback-err': ["warn", "^(e|err|error)$"],
        'mocha/no-skipped-tests': 'error',
        'mocha/no-exclusive-tests': 'error',
        'camelcase': 'off',
        'security/detect-non-literal-fs-filename': 'off',
        'no-useless-constructor': 'off',
        'no-unused-vars': 'off',
        "no-console": "error",
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
