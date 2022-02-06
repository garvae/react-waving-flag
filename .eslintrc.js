/* eslint-disable sort-keys-fix/sort-keys-fix */

const commonExtends = [
  'airbnb/hooks',
  'eslint:recommended',
  'plugin:import/errors',
  'plugin:import/recommended',
  'plugin:import/warnings',
  'plugin:prettier/recommended',
  'plugin:react/recommended',
  'react-app'
];

const typescriptExtends = [
  'airbnb-typescript',
  'plugin:@typescript-eslint/recommended',
  'plugin:import/typescript',
];

const commonPlugins = [
  '@getify/proper-arrows',
  '@getify/proper-ternary',
  'array-func',
  'import',
  'jest',
  'modules-newline',
  'newline-destructuring',
  'no-unsanitized',
  'optimize-regex',
  'sort-destructure-keys',
  'sort-keys-fix',
  'unused-imports',
  'prettier',
  'react',
];

const typescriptPlugins = [
  '@typescript-eslint',
  '@typescript-eslint',
  'typescript-sort-keys',
];

const commonRules = {
  /* --- eslint config --- */
  'array-bracket-spacing': ['error', 'always'],
  'array-callback-return': 'warn',
  'arrow-parens': [2, 'as-needed'],
  'class-methods-use-this': 0,
  'consistent-return': 'warn',
  'func-names': ['error', 'never'],
  indent: ['warn', 2, { ignoredNodes: ['JSXElement'], SwitchCase: 1 }],
  'jsx-a11y/label-has-associated-control': 0,
  'linebreak-style': 'off',
  'max-classes-per-file': ['error', 100],
  'no-console': 'warn',
  'no-implicit-coercion': 'off',
  'no-mixed-operators': 'error',
  'no-multiple-empty-lines': [
    'error',
    {
      max: 2,
      maxBOF: 1,
      maxEOF: 10,
    },
  ],
  'no-plusplus': 0,
  'no-shadow': 'off',
  'no-underscore-dangle': 0,
  'object-curly-spacing': ['error', 'always'],
  'padded-blocks': 0,
  'prefer-promise-reject-errors': 'warn',
  quotes: ['error', 'single', { allowTemplateLiterals: false }],
  semi: ['error', 'always'],
  'space-in-parens': ['error', 'never'],

  /* --- newline / wrapping --- */
  'array-bracket-newline': ['error', { minItems: 3 }],
  'array-element-newline': ['error', { minItems: 3 }],
  'function-call-argument-newline': ['error', 'consistent'],
  'function-paren-newline': ['error', { minItems: 4 }],
  'modules-newline/export-declaration-newline': 'warn',
  'modules-newline/import-declaration-newline': 'warn',
  'newline-destructuring/newline': [
    'error',
    {
      items: 2,
      itemsWithRest: 2,
      maxLength: 20,
    },
  ],
  'newline-per-chained-call': ['error'],
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: { multiline: true, minProperties: 3 },
      ObjectPattern: { multiline: true, minProperties: 3 },
      ImportDeclaration: { multiline: true, minProperties: 3 },
      ExportDeclaration: { multiline: true, minProperties: 3 },
    },
  ],
  'object-property-newline': [
    'error',
    { allowMultiplePropertiesPerLine: true },
  ],

  /* --- optimize-regex --- */
  'optimize-regex/optimize-regex': 'warn',

  /* --- array-func --- */
  'array-func/prefer-array-from': 0,
  'array-func/avoid-reverse': 0,
  'array-func/prefer-flat-map': 'error',
  'array-func/prefer-flat': 'error',

  /* --- unused detection --- */
  'no-unused-vars': 'off',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'warn',
    {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    },
  ],

  /* --- sorting --- */
  'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: true }],
  'sort-keys-fix/sort-keys-fix': 'error',

  /* --- imports --- */
  'import/no-anonymous-default-export': 'off',
  'import/no-unresolved': 'error',
  'import/prefer-default-export': 'warn',
  'import/named': 'error',
  // 'import/namespace': 'error',
  'import/no-named-as-default': 'off',
  'import/export': 'error',
  'import/order': [
    'error',
    {
      alphabetize: { order: 'asc', caseInsensitive: true },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
    },
  ],

  /* --- react --- */
  'react-hooks/exhaustive-deps': 0,
  'react/destructuring-assignment': 0,
  'react/function-component-definition': [
    2,
    { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
  ],
  'react/jsx-boolean-value': 2,
  'react/jsx-closing-bracket-location': [2, 'line-aligned'],
  'react/jsx-closing-tag-location': [2, 'line-aligned'],
  'react/jsx-curly-newline': [
    2,
    { multiline: 'require', singleline: 'forbid' },
  ],
  'react/jsx-equals-spacing': 2,
  'react/jsx-filename-extension': [
    2,
    {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  ],
  'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
  'react/jsx-fragments': [2, 'syntax'],
  'react/jsx-indent': [
    2,
    2,
    { indentLogicalExpressions: true, checkAttributes: false },
  ],
  'react/jsx-indent-props': [2, 2],
  'react/jsx-key': 2,
  'react/jsx-max-props-per-line': [1, { maximum: 1 }],
  'react/jsx-newline': [2, { prevent: false }],
  'react/jsx-no-comment-textnodes': 1,
  'react/jsx-no-bind': 0,
  'react/jsx-no-constructed-context-values': 1,
  'react/jsx-no-duplicate-props': 2,
  'react/jsx-no-target-blank': [
    2,
    { allowReferrer: false, enforceDynamicLinks: 'always' },
  ],
  'react/jsx-no-useless-fragment': 2,
  'react/jsx-props-no-multi-spaces': 2,
  'react/jsx-props-no-spreading': 0,
  'react/jsx-sort-default-props': 1,
  'react/jsx-sort-props': 2,
  'react/jsx-tag-spacing': [
    2,
    {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    },
  ],
  'react/jsx-wrap-multilines': [
    2,
    {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    },
  ],
  'react/no-danger': 2,
  'react/no-typos': 2,
  'react/no-unescaped-entities': 2,
  'react/no-unstable-nested-components': [1, { allowAsProps: true }],
  'react/no-unused-prop-types': 1,
  'react/prop-types': 0,
  'react/react-in-jsx-scope': 2,
  'react/react/jsx-curly-brace-presence': 0,
  'react/require-default-props': [0],
  'react/sort-comp': 2,

  /* --- @getify/proper-arrows --- */
  '@getify/proper-arrows/name': 'off',
  '@getify/proper-arrows/params': [
    'error',
    {
      unused: 'trailing',
      count: 2,
      trivial: true,
      length: 0,
    },
  ],
  '@getify/proper-arrows/return': [
    'error',
    {
      object: false,
      chained: true,
      sequence: true,
      trivial: true,
      ternary: 2,
    },
  ],
  '@getify/proper-arrows/this': 'off',
  '@getify/proper-arrows/where': 'off',

  /* --- @getify/proper-ternary --- */
  '@getify/proper-ternary/nested': 'error',
  '@getify/proper-ternary/parens': 0,
  '@getify/proper-ternary/where': [
    'error',
    {
      statement: true,
      property: false,
      argument: true,
      return: false,
      default: true,
      sub: true,
      assignment: false,
    },
  ],

  /* --- no-unsanitized --- */
  'no-unsanitized/method': 'error',
  'no-unsanitized/property': 'error',

  /* --- jest --- */

  'jest/no-disabled-tests': 'warn',
  'jest/no-focused-tests': 'error',
  'jest/no-identical-title': 'error',
  'jest/prefer-to-have-length': 'warn',
  'jest/valid-expect': 'error',

  /* --- prettier config --- */
  'prettier/prettier': [
    'error',
    {
      arrowParens: 'avoid',
      bracketSameLine: false,
      bracketSpacing: true,
      embeddedLanguageFormatting: 'auto',
      endOfLine: 'auto',
      htmlWhitespaceSensitivity: 'css',
      insertPragma: false,
      jsxSingleQuote: true,
      lineLength: 120,
      printWidth: 120,
      proseWrap: 'preserve',
      quoteProps: 'as-needed',
      rangeEnd: 0,
      rangeStart: 0,
      requirePragma: false,
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'all',
      useTabs: false,
      vueIndentScriptAndStyle: false,
    },
  ],
};

const typescriptRules = {
  /* --- TypeScript-eslint rules --- */
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
  '@typescript-eslint/no-unused-vars': 'off',
  'typescript-sort-keys/interface': 'error',
  'typescript-sort-keys/string-enum': 'error',
  '@typescript-eslint/naming-convention': [
    2,
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
    },
    {
      selector: 'function',
      format: ['PascalCase', 'camelCase'],
    },
    {
      selector: 'interface',
      format: ['PascalCase'],
      trailingUnderscore: 'allow',
      custom: {
        regex: '^I[A-Z]',
        match: true,
      },
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: 'typeAlias',
      format: ['PascalCase'],
      custom: {
        regex: '^T[A-Z]',
        match: true,
      },
    },
  ],
};

const typescriptOverrides = {
  files: ['*.ts', '*.tsx'],

  extends: [
    ...commonExtends,
    ...typescriptExtends,
  ],

  plugins: [
      ...commonPlugins,
      ...typescriptPlugins
  ],

  parserOptions: {
    project: ['./tsconfig.json'],
  },

  rules: {
    ...commonRules,
    ...typescriptRules,
  },
}

const config = {
  root: true,
  extends: [ ...commonExtends ],
  plugins: [ ...commonPlugins ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    document: true,
    window: true
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      'typescript': {},
    },
    },
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
    commonjs: true
  },
  parser: "@babel/eslint-parser",
  rules: {
   ...commonRules,
  },

  /* --- typescript fix --- */
  overrides: [ typescriptOverrides ],

  /* --- ignore --- */
  ignorePatterns: [
    '**/.nyc_output',
    '**/build',
    '**/coverage',
    '**/dist',
    '**/dist-dev',
    '**/fixture',
    '**/node_modules',
    '**/package-lock.json',
    '**/temp',
    'src/styles',
    "*.js",
  ],
};

module.exports = config;
/* eslint-enable sort-keys-fix/sort-keys-fix */
