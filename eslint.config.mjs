import eslint from '@eslint/js';
import eslintImport from 'eslint-plugin-import';
import eslintPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintPrettierRecommended,

  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            'rollup.config.mjs',
            'jest.config.mjs',
            'babel.config.mjs',
            'eslint.config.mjs',
            'mocks/*',
            '.storybook/*',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': eslintReactHooks,
    },
    extends: [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      eslintImport.flatConfigs.recommended,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      eslintImport.flatConfigs.typescript,
      eslintReact.configs.flat.recommended,
      eslintReact.configs.flat['jsx-runtime'],
    ],
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      'import/prefer-default-export': 'off', // prefer named to default exports
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '~/**',
              group: 'external',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
        },
      ],
    },
  },

  // Storybook
  {
    files: ['**/*.stories.@(ts|tsx)'],
    extends: [storybook.configs['flat/recommended']],
  },

  globalIgnores(['**/dist/', '**/storybook-static/']),
]);
