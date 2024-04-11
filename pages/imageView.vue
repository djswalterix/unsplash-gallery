<template>
  <div>
    <ImageDetails />
    <button @click="goBack">Back</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useImagesStore } from "@/store/images";
import { storeToRefs } from "pinia";
const store = useImagesStore();
const router = useRouter();
const { images } = storeToRefs(store);

function goBack() {
  router.back();
}
</script>
