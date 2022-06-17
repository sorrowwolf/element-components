<template>
  <div>
    <s-choose-icon title="选择图标" v-model:visible="visible">选择图标</s-choose-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const visible = ref<boolean>(false);

</script>

<style scoped>

</style>