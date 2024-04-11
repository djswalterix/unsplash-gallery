<template>
  <div v-if="image">
    <img
      v-if="image.urls.thumb"
      :src="image.urls.thumb"
      :alt="image.description"
    />
    <p v-if="image.width">width:{{ image.width }}</p>
    <p v-if="image.height">height:{{ image.height }}</p>
    <p v-if="image.likes">likes:{{ image.likes }}</p>
    <p v-if="image.description">description:{{ image.description }}</p>
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
