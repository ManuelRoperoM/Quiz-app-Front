import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsEslintParser from '@typescript-eslint/parser'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsEslintParser,
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'no-unused-vars': ['error', { 'args': 'none' }],
      'no-magic-numbers': ['error', { 'ignore': [0, 1] }],
      'space-before-function-paren': ['error', 'never'],
      'no-var': 'error',
      'arrow-parens': ['error', 'always'],
      'eol-last': ['error', 'always'],
      'object-curly-spacing': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'template-curly-spacing': ['error', 'never'],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]