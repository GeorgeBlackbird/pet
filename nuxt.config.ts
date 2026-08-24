import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  modules: ['@nuxt/eslint'],

  css: ['~/assets/styles/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/scss/mixins" as *;`,
        },
      },
    },
  },
})
