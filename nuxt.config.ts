// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  vue: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('pwc-'),
      },
  },
})
