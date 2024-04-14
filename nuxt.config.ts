// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Unshplash Gallery",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "Image Searcher",
          name: "Image Searcher",
          content: "Web app who searchh images base on keyword on random",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
    },
  },
  modules: ["@pinia/nuxt"],
});
