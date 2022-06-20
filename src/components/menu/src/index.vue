<template>
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    :router="router"
    v-bind="$attrs"
  >
    <template v-for="item in data">
      <el-menu-item
        v-if="!item[children] || !item[children].length"
        :index="item[index]"
      >
        <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <el-sub-menu
        v-if="item[children] && item[children].length"
        :index="item[index]"
      >
        <template #title>
          <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item
          v-for="(itm, inx) in item[children]"
          :key="inx"
          :index="itm[index]"
        >
          <component v-if="itm[icon]" :is="`el-icon-${toLine(itm[icon])}`"></component>
          <span>{{ itm[name]}}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { toLine } from '../../../utils';

const props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true
  },
  // 默认选中的菜单
  defaultActive: {
    type: String,
    default: ''
  },
  // 是否是路由模式
  router: {
    type: Boolean,
     default: false
  },
  // 菜单标题键名
  name: {
    type: String,
    default: 'name'
  },
  // 菜单标识键名
  index: {
    type: String,
    default: 'index'
  },
  // 菜单图标键名
  icon: {
    type: String,
    default: 'icon'
  },
  // 子菜单键名
  children: {
    type: String,
    default: 'children'
  },
})
</script>

<style lang="scss" scoped>
svg {
  margin-right: 4px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>