<template>
  <div class="s-choose-icon-el-dialog-body">
    <el-button @click="handleClick" type="primary">
      <slot></slot>
    </el-button>
    <el-dialog :title="title" v-model="dialogVisible" width="700px">
      <div class="container">
        <div class="item" v-for="(item, index) in Object.keys(ELIcons)" :key="index" @click="handleItem(item)">
          <div class="icon">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="text">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import * as ELIcons from '@element-plus/icons-vue'
import { toLine } from '../../../utils';
import { useCopy } from '../../../hooks/useCopy';

const props = defineProps<{
  title: string
  visible: boolean
}>()
const emits = defineEmits(['update:visible'])
// 避免直接修改父组件的值
const dialogVisible = ref<boolean>(props.visible)
const handleClick = () => {
  emits('update:visible', !props.visible)
}
const handleItem = (item:string) => {
  const text = `el-icon-${toLine(item)}`
  useCopy(text)
}
watch(() => props.visible, (val) => {
  dialogVisible.value = val
})
watch(() => dialogVisible.value, (val) => {
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}
.icon {
  font-size: 14px;
}
svg {
  width: 2em;
  height: 2em;
}
</style>