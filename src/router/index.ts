import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
    },
    {
        path: '/explore',
        name: 'Explore',
        component: () => import('../views/explore/index.vue'),
    },
    {
        path: '/insidebar',
        name: 'InsideBar',
        component: () => import('../views/elements/insidebar.vue'),
    },
    {
        path: '/synths/:synth',
        name: 'Synth',
        component: () => import('../views/sidemenu/sidemenu.vue'),
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
