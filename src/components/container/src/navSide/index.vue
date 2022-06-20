<template>
  <s-menu
    :collapse="collapse"
    :data="data"
    router
    :defaultActive="$route.path"
  ></s-menu>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean
}>()
const data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/chooseIcon'
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Star',
    name: '分数选择',
    index: '/chooseRate'
  },
  {
    icon: 'Bell',
    name: '通知菜案',
    index: '/notification'
  },
  {
    icon: 'Menu',
    name: '菜单',
    index: '/menu'
  },
]
</script>

<style lang="scss" scoped>
</style>