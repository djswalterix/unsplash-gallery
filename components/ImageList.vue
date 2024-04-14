<template>
  <div class="image-list">
    <div v-if="images && images?.length > 0" class="images-container">
      <div v-for="image in images" :key="image.id" class="image-item">
        <NuxtLink :to="`/imageView?id=${image.id}`">
          <img
            :src="image.urls.regular"
            :alt="image.description"
            class="image"
          />
        </NuxtLink>
      </div>
    </div>
    <p v-if="searchPerformed && images.length == 0" class="not-found">
      Images not found!
    </p>
    <p v-if="isLoading" class="loading">Loading ...</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useImagesStore } from "@/store/images";
import { storeToRefs } from "pinia";

const store = useImagesStore();

const { images, searchPerformed, isLoading } = storeToRefs(store);
</script>
<style scoped>
.images-container {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: 20px;
}
.images-container img {
  max-width: 75vw;
}
@media (min-width: 768px) {
  .images-container {
    margin: 20px;
    grid-template-columns: repeat(4, 1fr);
    gap: 1vh;
  }
  .images-container img {
    max-width: 23vw;
    max-height: 23vw;
    object-fit: cover;
  }
}
</style>
