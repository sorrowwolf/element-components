<template>
  <el-popover
    :placement="placement"
    :trigger="trigger"
  >
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge style="cursor: pointer" :value="value" :max="max" :is-dot="isDot">
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { toLine } from '../../../utils';
const props = defineProps({
  icon: {
    type: String,
    default: 'Bell'
  },
  value: {
    type: [String, Number],
    default: ''
  },
  max: {
    type: Number
  },
  isDot: {
    type: Boolean,
    default: false
  },
  trigger: {
    type: String
  },
  placement: {
    type: String
  }
})
</script>

<style scoped>

</style>