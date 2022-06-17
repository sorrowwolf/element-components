<template>
  <div>
    <sChooseIcon title="选择图标" v-model:visible="visible">选择图标</sChooseIcon>
  </div>
</template>

<script setup lang="ts">
import sChooseIcon from '../../components/chooseIcon/src/index.vue';
import { ref } from 'vue';
const visible = ref<boolean>(false);

</script>

<style scoped>

</style>