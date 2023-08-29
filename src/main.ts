import { createApp } from 'vue'
import mitt from 'mitt'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

const emitter = mitt()

const app = createApp(App)

app.config.globalProperties.emitter = emitter

app.use(router).use(store).use(Toast)
app.mount('#app')
