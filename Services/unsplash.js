// services/unsplash.js
import axios from "axios";
import { useRuntimeConfig } from "#imports";

export const unsplashService = {
  /**
   * Find images using Unsplash API
   * @param {string} keyword The Key for the search
   * @returns object with images
   */
  async searchImages(keyword) {
    const config = useRuntimeConfig();
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query: keyword,
            per_page: 10,
            client_id: config.public.unsplashAccessKey,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error during search: ", error);
      throw error;
    }
  },
};
