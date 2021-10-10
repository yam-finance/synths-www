import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        meta: { hasSideBar: 1 },
        children: [
            {
                path: '/explore-synths',
                name: 'Explore Synths',
                component: () => import('../components/tabs/ExploreSynths.vue'),
                meta: { hasSideBar: 1 }
            },
            {
                path: '/markets',
                name: 'Markets',
                component: () => import('../components/tabs/Markets.vue'),
                meta: { hasSideBar: 1 }
            },
            {
                path: '/portfolio',
                name: 'Portfolio',
                component: () => import('../components/tabs/Portfolio.vue'),
                meta: { hasSideBar: 0 }
            },
            {
                path: '/synths/:synth',
                name: 'Synths',
                component: () => import('../components/tabs/ExploreSynths.vue'),
                meta: { hasSideBar: 1 }
            },

        ]
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
        path: '/markets',
        name: 'Markets',
        component: () => import('../views/markets/index.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
