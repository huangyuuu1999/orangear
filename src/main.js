import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'


const routes = [
    { path: '/home/:id', component: Home },
    { path: '/about', component: About },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(ElementUI)
app.use(router)

app.mount('#app')
