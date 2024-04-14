import { defineStore } from "pinia";
import axios from "axios";
import { useRuntimeConfig } from "#imports";

export const useImagesStore = defineStore("images", {
  state: () => ({
    images: [], // images cahce
    isLoading: false, //loading
    searchPerformed: false,
  }),
  actions: {
    // http call
    async fetchImages(keyword) {
      this.isLoading = true;
      const cacheKey = `images_${keyword}`;
      const cachedImages = sessionStorage.getItem(cacheKey);
      //check cache
      if (cachedImages) {
        this.images = JSON.parse(cachedImages);
        this.isLoading = false;
      } else {
        const config = useRuntimeConfig();
        try {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos`,
            {
              params: {
                query: keyword,
                per_page: 12,
                client_id: config.public.unsplashAccessKey,
              },
            }
          );
          //save
          this.images = response.data.results;
          sessionStorage.setItem(cacheKey, JSON.stringify(this.images));
        } catch (error) {
          console.error("Error during image fetch:", error);
        }
        this.isLoading = false;
      }
      this.searchPerformed = true;
    },
    async fetchRandomImages() {
      this.isLoading = true;
      const config = useRuntimeConfig();
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random`,
          {
            params: {
              count: 12,
              client_id: config.public.unsplashAccessKey,
            },
          }
        );
        //save
        this.images = response.data;
      } catch (error) {
        console.error("Error during image fetch:", error);
      }
      this.isLoading = false;
      this.searchPerformed = true;
    },
  },
});
