import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Setting from './components/Setting.vue'
import Upload from './components/Upload.vue'
import Markdown from './components/Markdown.vue'
import ToolBox from './components/ToolBox.vue'

import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'


const routes = [
    { path: '/home/:id', component: Home },
    { path: '/about', component: About },
    { path: '/setting', component: Setting },
    { path: '/upload', component: Upload },
    { path: '/markdown', component: Markdown },
    { path: '/tools', component: ToolBox }
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(ElementUI)
app.use(router)

app.mount('#app')
