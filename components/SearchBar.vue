<template>
  <div>
    <input
      type="text"
      v-model="keyword"
      @keyup.enter="searchImages"
      placeholder="Search Images ."
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { unsplashService } from "~/Services/unsplash";

const keyword = ref("");
const isLoading = ref(false);
const emit = defineEmits(["search-completed"]);

const searchImages = async () => {
  isLoading.value = true;
  emit("loading", true);
  try {
    const result = await unsplashService.searchImages(keyword.value);
    emit("search-completed", result.results);
  } catch (err) {
    console.error("Error during search: ", err);
  } finally {
    isLoading.value = false;
    emit("loading", false);
  }
};
</script>
