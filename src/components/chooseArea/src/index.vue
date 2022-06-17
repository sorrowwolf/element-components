<template>
  <div>
    <el-select placeholder="请选择省份" v-model="province" clearable>
      <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select :disabled="!province" style="margin: 0 10px" placeholder="请选择城市" v-model="city" clearable>
      <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select :disabled="!province || !city" placeholder="请选择区域" v-model="area" clearable>
      <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import allAreas from '../lib/pca-code.json'

interface AreaItem {
  name: string
  code: string
  children?: AreaItem[]
}

interface Data {
  name: string
  code: string
}

const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
const areas = ref(allAreas)

const selectCity = ref<AreaItem[]>([])

const selectArea = ref<AreaItem[]>([])

const emits = defineEmits(['change'])

watch(() => province.value, val => {
  if (val) {
    const cities = areas.value.find(item => item.code === val)!.children
    selectCity.value = cities
  }
  city.value = ''
  area.value = ''
})

watch(() => city.value, val => {
  if (val) {
    const area = selectCity.value.find(item => item.code === val)!.children!
    selectArea.value = area
  }
  area.value = ''
})

watch(() => area.value, val => {
  if (!val) return;
  const provinceData: Data = {
    name: province.value && areas.value.find(item => item.code === province.value)!.name,
    code: province.value
  }
  const cityData: Data = {
    name: city.value && selectCity.value.find(item => item.code === city.value)!.name,
    code: city.value
  }
  const areaData: Data = {
    name: val && selectArea.value.find(item => item.code === val)!.name,
    code: area.value
  }
  emits('change', {
    province: provinceData,
    city: cityData,
    area: areaData
  })
})

</script>

<style lang="scss" scoped>

</style>