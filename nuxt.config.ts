// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      domainName: 'http://localhost:3000/'
    }
  },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  supabase: {
    redirect: false
  }
})
