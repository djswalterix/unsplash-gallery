<template>
  <div class="view">
    <ImageDetails />
    <BackButton />
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
<style scoped>
.view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
