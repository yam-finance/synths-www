import { createApp } from 'vue'
import App from '@/App.vue'
import router from "@/router"

import VueClickAway from "vue3-click-away";
import { i18n } from "./i18n";

import "@/index.scss";

const app = createApp(App).use(i18n).use(VueClickAway).use(router).mount('#app');
