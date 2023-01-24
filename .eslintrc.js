module.exports = {
    env: {
        mocha: true,
        node: true,
        commonjs: true,
        es2017: true
    },
    extends: [
        'standard',
        'plugin:@typescript-eslint/recommended',
        'plugin:security/recommended',
        'eslint:recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018
    },
    plugins: [
        '@fintechstudios/eslint-plugin-chai-as-promised',
        'mocha',
        '@typescript-eslint',
        'security',
        'filenames'
    ],
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        camelcase: 'off',
        'no-unused-vars': 'off',
        'security/detect-non-literal-fs-filename': 'off',
        'no-console': 'error',
        '@typescript-eslint/explicit-function-return-type': 'ERROR'
    }
}
