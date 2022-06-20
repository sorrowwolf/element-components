<template>
  <el-container>
    <el-aside width="auto">
      <nav-side v-model:collapse="collapse" />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="collapse" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue"
import navHeader from './navHeader/index.vue'
import navSide from './navSide/index.vue'

const collapse = ref(false);

</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>