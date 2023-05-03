//importiamo vue-router
import { createRouter, createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'

//creiamo i router

const history = createWebHistory()
console.log('history: ', history)

const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: Home
        }
    ]
})

export { router }