<template>
  <div>
    <s-choose-area @change="changeArea"></s-choose-area>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const changeArea = (val: any) => {
  console.log(val)
}

</script>

<style scoped>

</style>