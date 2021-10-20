import { createApp } from 'vue'
import App from '@/App.vue'
import router from "@/router"

import VueClickAway from "vue3-click-away";
import { i18n } from "./i18n";

import "@/index.scss";

const app = createApp(App)).use(i18n).use(VueClickAway).use(router);
app.mount('#app');

app.config.performance = true
app.config.globalProperties.$web3 = 'web3';

//@ts-ignore
app.config.devtools = true
