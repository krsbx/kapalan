module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'comma-dangle': 'off',
        'object-curly-newline': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react-native/no-inline-styles': 'off',
        curly: 'off',
      },
    },
  ],
};
