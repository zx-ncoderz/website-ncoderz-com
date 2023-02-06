module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'json', 'arca'],
  settings: {
    react: { version: '18' },
  },
  rules: {
    'no-unused-vars': [1, { vars: 'all', args: 'none' }],
    'arca/import-ordering': [
      2,
      {
        hoistOneliners: true,
      },
    ],

    'arca/newline-after-import-section': [
      2,
      {
        enableOnelinerSections: true,
      },
    ],
    'arca/no-default-export': [2],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        // 'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // 'prettier/@typescript-eslint',
        // 'plugin:prettier/recommended',
        // 'plugin:react/recommended',
        // 'prettier',
        // 'plugin:jsx-a11y/recommended',
        // 'plugin:react-hooks/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          project: ['./tsconfig.json'],
        },
      },
      rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/prop-types': 0, // Makes no sense when using TypeScript
        '@typescript-eslint/no-unused-vars': [1, { vars: 'all', args: 'none' }],
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-inferrable-types': [
          1,
          {
            ignoreParameters: true,
            ignoreProperties: true,
          },
        ],
        '@typescript-eslint/ban-types': [
          2,
          {
            extendDefaults: true,
            types: {
              '{}': false,
            },
          },
        ],
      },
    },
    // {
    //   files: ['*.stories.tsx'],
    //   rules: {
    //     '@typescript-eslint/no-unused-vars': [2, { vars: 'all', args: 'none' }],
    //     '@typescript-eslint/no-empty-interface': 0,
    //   },
    // },
  ],
};
