// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/seo' — disabled: requires Nuxt <3.16; use useSeoMeta() in pages for meta/SEO
    '@nuxt/icon',
  ],

  // Pinia: use persistedstate plugin (registered in app plugin)
  pinia: {
    storesDirs: ['./entities/**/store/*.ts', './features/**/store/*.ts'],
  },

  // FSD: components at project root (Nuxt 4 srcDir is app/, so ../ goes to root)
  components: [
    { path: '../shared/ui', pathPrefix: false, prefix: 'Shared', extensions: ['.vue'] },
    { path: '../entities', pathPrefix: false, prefix: 'Entity', extensions: ['.vue'] },
    { path: '../features', pathPrefix: false, prefix: 'Feature', extensions: ['.vue'] },
    { path: '../widgets', pathPrefix: false, prefix: 'Widget', extensions: ['.vue'] },
  ],

  // SEO: use useSeoMeta() in pages; re-enable @nuxtjs/seo when Nuxt 4–compatible for sitemap/robots

  // TypeScript
  typescript: {
    strict: true,
  },

  // Nitro: server routes live in server/api
  nitro: {
    preset: 'node-server',
  },
})
