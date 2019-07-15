module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  plugins: [
    'vue',
    'html',
  ],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 'off',
    'no-undef': 'off',
  },
}
