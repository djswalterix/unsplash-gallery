<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="keyword"
      @keyup.enter="searchImages"
      placeholder="Search Images"
      class="search-input"
    />
    <button @click="searchImages" :disabled="isLoading" class="search-button">
      {{ isLoading ? "Loading..." : "Search" }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useImagesStore } from "@/store/images";
import { storeToRefs } from "pinia";
const store = useImagesStore();
const { isLoading } = storeToRefs(store);

const keyword = ref("");

const emit = defineEmits(["search-completed"]);

function searchImages() {
  if (keyword.value !== "") {
    store.fetchImages(keyword.value);
  } else {
    store.fetchRandomImages();
  }
}
</script>

<style scoped>
.search-bar {
  display: flex;
  flex-direction: column;
}
.search-button,
.search-input {
  font-size: 20px;
  border: none;
  border-radius: 5px;
  padding: 10px;
}
.search-button {
  background-color: #007bff;
  color: white;
}
.search-input {
  background-color: rgba(222, 222, 222, 0.67);
}
@media (min-width: 768px) {
  .search-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
