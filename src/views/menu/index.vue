<template>
  <div class="flex-s">
    <s-menu style="width:200px" :data="data1" defaultActive="2"></s-menu>
    <s-infinite-menu style="width:200px" :data="data1" defaultActive="2"></s-infinite-menu>
  </div>
</template>

<script setup lang="ts">
const data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'Document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'Document',
              }
            ]
          }
        ]
      }
    ]
  },
]
</script>

<style scoped>
.flex-s {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
</style>
