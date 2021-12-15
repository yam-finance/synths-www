import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/",
        name: "Layout",
        component: () => import("@/views/Layout.vue"),
        meta: { hasSideBar: 1 },
        children: [
            {
                path: "/explore",
                name: "Explore",
                component: () => import("@/views/Explore.vue"),
                meta: { hasSideBar: 0 },
            },
            {
                path: "/markets/:synth?",
                name: "Markets",
                component: () => import("@/views/Markets.vue"),
                meta: { hasSideBar: 1 },
            },
            {
                path: "/portfolio",
                name: "Portfolio",
                component: () => import("@/views/Portfolio.vue"),
                meta: { hasSideBar: 0 },
            },
        ],
    },
    {
        path: "/testsidebar",
        name: "Testsidebar",
        component: () => import("@/components/testsidebar/index.vue"),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
