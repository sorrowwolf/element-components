<template>
  <div>
    <el-select placeholder="请选择省份" v-model="province">
      <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select :disabled="!province" style="margin: 0 10px" placeholder="请选择城市" v-model="city">
      <el-option>1</el-option>
      <el-option>2</el-option>
    </el-select>
    <el-select :disabled="!province || !city" placeholder="请选择区域" v-model="area">
      <el-option>1</el-option>
      <el-option>2</el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import allAreas from '../lib/pca-code.json'

const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
const areas = ref(allAreas)

</script>

<style lang="scss" scoped>

</style>