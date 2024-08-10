module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', '@stylistic/js'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
};
