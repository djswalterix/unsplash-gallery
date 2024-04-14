<template>
  <div>
    <h1 class="title">The Unspash Gallery!</h1>
    <SearchBar @loading="handleLoading" />

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
  isLoading.value = loading; //loading status
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
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
html {
  font-family: Roboto;
}
</style>
