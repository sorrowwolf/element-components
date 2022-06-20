import { App } from 'vue'
import menu from './src/index.vue'
import infiniteMenu from './src/menu'

export default {
  install(app: App) {
    app.component('s-menu', menu)
    app.component('s-infinite-menu', infiniteMenu)
  }
}