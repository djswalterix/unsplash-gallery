<template>
  <button @click="goBack" class="back-button">Back</button>
</template>

<script setup>
const router = useRouter();

function goBack() {
  router.back();
}
</script>
<style scoped>
.back-button {
  background-color: #007bff;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  padding: 10px;
}
</style>
