import { defineComponent, PropType, useAttrs } from 'vue'
import { MenuItem } from './type'
import * as Icons from '@element-plus/icons-vue'
import './styles/index.scss'

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
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
  },
  setup(props, ctx) {
    return () => {
      const renderMenu = (data: any[]) => {
        return data.map((item: any) => {
          item.i = (Icons as any)[item[props.icon]!]
          const slots = {
            title: () => {
              return <>
                <item.i />
                <span>{ item[props.name] }</span>
              </>
            }
          }
          if (item[props.children] && item[props.children].length) {
            return (
              <el-sub-menu index={item[props.index]} v-slots={slots}>
                { renderMenu(item[props.children]) }
              </el-sub-menu>
            )
          }
          return (
            <el-menu-item index={item[props.index]}>
              <item.i />
              <span>{ item[props.name] }</span>
            </el-menu-item>
          )
        })
      }
      const attrs = useAttrs()
      return (
        <el-menu
          defaultActive={props.defaultActive}
          router={props.router}
          {...attrs}
        >
          { renderMenu(props.data) }
        </el-menu>
      )
    }
  }
})