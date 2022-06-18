<template>
  <div :style="fontStyle">
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontWidth">
        <span @click="change(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"

const props = withDefaults(defineProps<{
  modelValue?: number
  color?: string
  size?: string
}>(), {
  modelValue: 0
})
// const rate = computed(() => '★★★★★☆☆☆☆☆'.slice(5 - props.value, 10 - props.value))
const fontStyle = computed(() => {
  return `color:${props.color};font-size:${props.size}`
})
const width = ref(props.modelValue)
const mouseOver = (i: number) => {
  width.value = i
}
const mouseOut = () => {
  width.value = props.modelValue
}
const fontWidth = computed(() => `width:${width.value * 20}%`)
const emits = defineEmits(['update:modelValue'])
const change = (i: number) => {
  emits('update:modelValue', i)
}

</script>

<style lang="scss" scoped>
.rate {
  position: relative;
  display: inline-block;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
  cursor: pointer;
}
</style>