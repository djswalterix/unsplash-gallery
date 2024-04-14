<template>
  <div>
    <h1 class="title">The Unspash Gallery!</h1>
    <SearchBar
      @search-completed="handleSearchCompleted"
      @loading="handleLoading"
    />

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

<style scoped>
.title {
  text-align: center;
  padding: 20px;
  font-size: 24px;
}

@media (min-width: 768px) {
  .title {
    font-size: 32px;
  }
}
</style>
