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
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router