import js from '@eslint/js';
import * as importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'arrow-body-style': ['error', 'as-needed'],
      'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
      complexity: ['warn', 20],
      'eol-last': ['warn', 'always'],
      eqeqeq: 'error',
      indent: ['warn', 2, { SwitchCase: 1 }],
      'jsx-quotes': ['warn', 'prefer-double'],
      'keyword-spacing': 'warn',
      'no-console': ['error', { allow: ['debug', 'info', 'warn', 'error'] }],
      'no-multi-spaces': 'warn',
      'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
      'no-prototype-builtins': 'off',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unsafe-optional-chaining': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true, varsIgnorePattern: '^_' }],
      'object-curly-spacing': ['warn', 'always'],
      'object-shorthand': ['warn', 'properties'],
      quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'react-hooks/exhaustive-deps': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-tag-spacing': 'warn',
      'react/prop-types': 'off',
      semi: ['error', 'always'],
      // 'sort-keys': ['warn', 'asc', { allowLineSeparatedGroups: true, caseSensitive: false, natural: true }],
      'space-before-blocks': 'warn',
      'space-infix-ops': 'warn',
      'import/no-named-as-default': 'off',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Built-in imports (come from NodeJS native) go first
            'external', // <- External imports
            'internal', // <- Absolute imports
            ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
          ],
          pathGroups: [{ pattern: '@mui/**', group: 'internal', position: 'after' }],
          pathGroupsExcludedImportTypes: ['@mui/**'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
