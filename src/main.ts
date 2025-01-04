import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import NewsPage from '@/pages/NewsPage.vue'

const routes = [
    {path:'/home', component:HomePage},
    {path:'/about', component:AboutPage},
    {path:'/news', component:NewsPage}
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})
let app = createApp(App)
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
