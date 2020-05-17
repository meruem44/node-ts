module.exports = {
  parser:'@typescript-eslint/parser',
  plugins: ['@typescrip-eslint'],
  env: {
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:@typescrip-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
