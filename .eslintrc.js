module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    semi: ['error', 'always'],
    'no-var': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        trailingComma: 'es5',
        jsxSingleQuote: true,
        singleQuote: true,
        jsxBracketSameLine: false,
        endOfLine: 'auto',
      },
    ],
  },
};
