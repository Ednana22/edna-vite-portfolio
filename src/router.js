import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import ProjectMarket from './pages/Projects/Market.vue'
import ProjectWeb from './pages/Projects/OfficialWebsite.vue'
import ProjectPMS from './pages/Projects/PMS.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
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
