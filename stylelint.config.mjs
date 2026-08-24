/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss'],
  ignoreFiles: ['**/.nuxt/**', '**/.output/**', '**/dist/**', '**/node_modules/**'],
  rules: {},
}
