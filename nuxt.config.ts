export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
  ],

  css: ['~/assets/styles/tailwind.css'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/scss/mixins" as *;`,
        },
      },
    },
  },
})
