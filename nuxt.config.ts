// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/icon', 
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],

  pinia: {
    storesDirs: ['./app/entities/**/store/*.ts', './app/features/**/store/*.ts'],
  },

  components: [
    { path: '~/shared/ui', pathPrefix: false, prefix: 'Shared', extensions: ['.vue'] },
    { path: '~/entities', pathPrefix: false, prefix: 'Entity', extensions: ['.vue'] },
    { path: '~/features', pathPrefix: false, prefix: 'Feature', extensions: ['.vue'] },
    { path: '~/widgets', pathPrefix: false, prefix: 'Widget', extensions: ['.vue'] },
  ],

  typescript: {
    strict: true,
  },

  nitro: {
    preset: 'node-server',
  },

  css: ['~/assets/css/main.css'],
})