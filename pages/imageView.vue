<template>
  <div class="view">
    <ImageDetails />
    <BackButton />
  </div>
</template>

<script setup>
/*
simple layout component
 */
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
