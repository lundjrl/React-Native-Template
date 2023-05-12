module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src/']],
        extensions: ['.ts', '.js', '.tsx'],
      },
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  plugins: ['react-hooks', '@typescript-eslint', 'import', 'simple-import-sort', 'unused-imports', 'prettier'],
  extends: [
    '@react-native-community',
    'plugin:react-native-a11y/all',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'require-jsdoc': 'off',
    semi: 'off',
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'no-underscore-dangle': 0,
    '@typescript-eslint/semi': ['warn', 'never'],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'react/prop-types': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'unused-imports/no-unused-imports-ts': 2,
    'import/no-cycle': 1,
    'import/extensions': 0,
    'sort-imports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$', '^react', '^@react'],
          ['^@?\\w'],
          ['~/src'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
}
