<template>
  <div>
    <div v-if="images && images.length > 0">
      <div v-for="image in images" :key="image.id">
        <img :src="image.urls.thumb" :alt="image.description" />
      </div>
    </div>
    <p v-else>Images not found!</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  images: Array,
});
</script>
