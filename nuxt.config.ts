// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    { src: '~/plugins/pwc.js', mode: 'client' }
  ],

  vue: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('pwc-'),
      },
  },
})
