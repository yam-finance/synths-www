import { Buffer } from 'buffer';
(window as any).global = window;
(window as any).Buffer = Buffer;
import { createApp } from 'vue'


import App from '@/App.vue'
import router from "@/router"
import options from '@/utils/auth';
import { LockPlugin } from '@snapshot-labs/lock/plugins/vue3';

import VueClickAway from "vue3-click-away";

import '@/index.scss'

const app = createApp(App).use(VueClickAway).use(router).use(LockPlugin, options).mount('#app');
