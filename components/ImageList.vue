<template>
  <div>
    <div v-if="images && images?.length > 0">
      <div v-for="image in images" :key="image.id">
        <NuxtLink :to="`/imageView?id=${image.id}`">
          <img :src="image.urls.thumb" :alt="image.description" />
        </NuxtLink>
      </div>
    </div>
    <p v-if="searchPerformed && images.length == 0">Images not found!</p>
    <p v-if="isLoading">Loading ...</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useImagesStore } from "@/store/images";
import { storeToRefs } from "pinia";

const store = useImagesStore();

const { images, searchPerformed, isLoading } = storeToRefs(store);
</script>
