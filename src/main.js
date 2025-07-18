import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import router from '@/router'
import i18n from './i18en'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
