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
    //fetch data from cache
    hydrateImagesFromLocalStorage() {
      const lastSearchKeyword = localStorage.getItem("last_search_keyword");
      const cachedImages = localStorage.getItem(`images_${lastSearchKeyword}`);
      if (cachedImages) {
        this.images = JSON.parse(cachedImages);
        console.log(this.images);
      }
    },
    // http call
    async fetchImages(keyword) {
      localStorage.setItem("last_search_keyword", keyword);

      this.isLoading = true;
      const cacheKey = `images_${keyword}`;
      const cachedImages = localStorage.getItem(cacheKey);
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
          localStorage.setItem(cacheKey, JSON.stringify(this.images));
        } catch (error) {
          console.error("Error during image fetch:", error);
        }
        this.isLoading = false;
      }
      this.searchPerformed = true;
    },
    async fetchRandomImages() {
      localStorage.setItem("last_search_keyword", "");
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
