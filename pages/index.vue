<template>
  <div>
    <SearchBar
      @search-completed="handleSearchCompleted"
      @loading="handleLoading"
    />
    <div v-if="isLoading">Loading...</div>
    <ImageList :images="images" />
  </div>
</template>

<script setup>
import SearchBar from "@/components/SearchBar.vue";
import ImageList from "@/components/ImageList.vue";
import { ref } from "vue";

const images = ref([]);
const isLoading = ref(false);

const handleLoading = (loading) => {
  isLoading.value = loading;
};
const handleSearchCompleted = (searchResults) => {
  images.value = searchResults;
};
</script>
