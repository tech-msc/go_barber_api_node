module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard'],  
  plugins: [],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {    
    'class-methods-use-this' : 'off',
    'no-param-reassign' : 'off',
    'camelcase' : 'off',
    'no-unused-vars' : ['error', {'argsIgnorePattern': 'next'}],
  }
}
