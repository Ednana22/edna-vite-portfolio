import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import ProjectMarket from './pages/Projects/Market.vue'
import ProjectWeb from './pages/Projects/OfficialWebsite.vue'
import ProjectPMS from './pages/Projects/PMS.vue'

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior (to, from, savedPosition) {
        return savedPosition ?? { top: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/market',
            name: 'ProjectMarket',
            component: ProjectMarket
        },
        {
            path: '/official-website',
            name: 'ProjectWeb',
            component: ProjectWeb
        },
        {
            path: '/pms',
            name: 'ProjectPMS',
            component: ProjectPMS
        }
    ]
})

export default router
