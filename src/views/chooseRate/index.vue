<template>
  <div>
    <s-choose-rate v-model="value" color="red" size="30px"></s-choose-rate>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)

</script>

<style scoped>

</style>
