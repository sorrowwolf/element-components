import { App } from 'vue'
import chooseArea from './src/index.vue'

export default {
  install(app: App) {
    app.component('s-choose-area', chooseArea)
  }
}