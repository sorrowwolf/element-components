import { App } from "vue"
import chooseArea from "./chooseArea"
import chooseIcon from "./chooseIcon"
import chooseRate from "./chooseRate"

const components = [
  chooseArea,
  chooseIcon,
  chooseRate
]

export default {
  install(app: App) {
    components.forEach(item => {
      app.use(item)
    })
  }
}