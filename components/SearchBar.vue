<template>
  <div>
    <input
      type="text"
      v-model="keyword"
      @keyup.enter="searchImages"
      placeholder="Search Images"
    />
    <button @click="searchImages" :disabled="isLoading">
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
  store.fetchImages(keyword.value);
  console.log(store.images);
}
</script>
