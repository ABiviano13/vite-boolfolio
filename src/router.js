//importiamo vue-router
import { createRouter, createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import AboutUs from './pages/AboutUs.vue'

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
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/aboutus',
            name: 'aboutus',
            component: AboutUs
        }
    ]
})

export { router }