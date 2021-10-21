import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/AppView.vue"),
        meta: {hasSideBar: 1},
        children: [
            {
                path: "/explore",
                name: "Explore Synths",
                component: () => import("@/views/ExploreSynths.vue"),
                meta: {hasSideBar: 0},
            },
            {
                path: "/synths/:synth",
                name: "Synths",
                component: () => import("@/views/Markets.vue"),
                meta: {hasSideBar: 1},
            },
            {
                path: "/portfolio",
                name: "Portfolio",
                component: () => import("@/views/Portfolio.vue"),
                meta: {hasSideBar: 0},
            },
        ]
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
