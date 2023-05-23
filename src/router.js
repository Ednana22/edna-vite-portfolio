import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'

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
            component: () => import(/* webpackChunkName: 'About' */ './pages/About.vue')
        },
        {
            path: '/market',
            name: 'ProjectMarket',
            component: () => import(/* webpackChunkName: 'Market' */ './pages/Projects/Market.vue')
        },
        {
            path: '/official-website',
            name: 'ProjectWeb',
            component: () => import(/* webpackChunkName: 'OfficialWebsite' */ './pages/Projects/OfficialWebsite.vue')
        },
        {
            path: '/pms',
            name: 'ProjectPMS',
            component: () => import(/* webpackChunkName: 'PMS' */ './pages/Projects/PMS.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            redirect: '/'
        }
    ]
})

export default router
