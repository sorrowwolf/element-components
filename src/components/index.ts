import { App } from "vue"
import chooseArea from "./chooseArea"
import chooseIcon from "./chooseIcon"
import chooseRate from "./chooseRate"
import notification from "./notification"
import menu from './menu'

const components = [
  chooseArea,
  chooseIcon,
  chooseRate,
  notification,
  menu
]

export default {
  install(app: App) {
    components.forEach(item => {
      app.use(item)
    })
  }
}