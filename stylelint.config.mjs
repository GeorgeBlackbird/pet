/** @type {import('stylelint').Config} */

const tailwindAtRules = [
  'tailwind',
  'apply',
  'layer',
  'config',
  'theme',
  'screen',
  'variants',
  'responsive',
  'custom-variant',
  'utility',
  'variant',
  'plugin',
  'source',
  'reference',
]

export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss'],
  ignoreFiles: [
    '**/.nuxt/**',
    '**/.output/**',
    '**/dist/**',
    '**/node_modules/**',
    '**/assets/styles/tailwind.css',
  ],
  rules: {
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$|^[a-z][a-zA-Z0-9]+$',
      {
        message: 'Expected class selector to be kebab-case or camelCase',
      },
    ],
    'at-rule-no-unknown': [true, { ignoreAtRules: tailwindAtRules }],
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: tailwindAtRules }],
  },
}
