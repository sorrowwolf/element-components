import { App } from 'vue'
import chooseRate from './src/index.vue'

export default {
  install(app: App) {
    app.component('s-choose-rate', chooseRate)
  }
}