import './assets/styles/main.scss'
import appConfig from '../app.config'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

document.title = appConfig.documentTitle

app.mount('#app')
