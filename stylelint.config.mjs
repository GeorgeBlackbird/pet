/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss'],
  ignoreFiles: ['**/.nuxt/**', '**/.output/**', '**/dist/**', '**/node_modules/**'],
  rules: {
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$|^[a-z][a-zA-Z0-9]+$',
      {
        message: 'Expected class selector to be kebab-case or camelCase',
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'config',
          'theme',
          'screen',
          'variants',
          'responsive',
        ],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'config',
          'theme',
          'screen',
          'variants',
          'responsive',
        ],
      },
    ],
  },
}
