<template>
  <div v-if="image" class="image-details">
    <img
      v-if="image.urls.regular"
      :src="image.urls.regular"
      :alt="image.description"
      class="image"
    />
    <div class="details">
      <h2 class="title">Image Details</h2>
      <div class="detail-item" v-if="image.width">
        <span class="detail-label">Width: </span>
        <span>{{ image.width }}</span>
      </div>
      <div class="detail-item" v-if="image.height">
        <span class="detail-label">Height: </span>
        <span>{{ image.height }}</span>
      </div>
      <div class="detail-item" v-if="image.likes">
        <span class="detail-label">Likes: </span>
        <span>{{ image.likes }}</span>
      </div>
      <div class="detail-item" v-if="image.downloads">
        <span class="detail-label">Downloads: </span>
        <span>{{ image.downloads }}</span>
      </div>
      <div class="detail-item" v-if="image.color">
        <span class="detail-label">Color: </span>
        <span>{{ image.color }}</span>
      </div>
      <div class="detail-item" v-if="image.created_at">
        <span class="detail-label">Created at: </span>
        <span>{{ image.created_at }}</span>
      </div>
      <div class="detail-item" v-if="image.description">
        <span class="detail-label">Description: </span>
        <span>{{ image.description }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useImagesStore } from "@/store/images";
const store = useImagesStore();
const router = useRouter();
const getImageById = (id) => {
  return store.images.find((image) => image.id === id);
};

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const image = getImageById(id);
</script>
<style scoped>
.image {
  max-height: 50vh;
}
.detail-item {
  font-size: 20px;
}
.image-details {
  margin: 1rem;
}
@media (min-width: 768px) {
  .image-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
}
</style>
