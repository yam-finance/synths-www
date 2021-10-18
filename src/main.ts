import { createApp } from "vue"

import App from "@/App.vue"
import router from "@/router"

import VueClickAway from "vue3-click-away"

import "@/index.scss"

const app = createApp(App).use(VueClickAway).use(router).mount("#app")
