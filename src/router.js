//importiamo vue-router
import { createRouter, createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import AboutUs from './pages/AboutUs.vue'
import ProjectsShow from './pages/ProjectsShow.vue'

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
            name: 'about.us',
            component: AboutUs
        },
        {
			path: '/blog/:slug',
			name: 'projects.show',
			component: ProjectsShow,
		}
    ]
})

export { router }