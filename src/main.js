import './assets/main.css'

import App from "@/App.vue";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import { authService, TOKEN_KEY } from "@/api/authService";



const token = localStorage.getItem(TOKEN_KEY)

if(token){
    authService.setToken(token)
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
