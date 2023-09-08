module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'default-param-last': 'off',
    'func-names': 'off',
    'no-console': 'off',
    'react/jsx-no-bind': 'off',
    'no-unused-vars': 'off',
  },
};
