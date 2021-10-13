import { createApp } from 'vue'
import App from './App.vue'

import router from "./router/index"
import store from "./store";

import './index.scss'

const app = createApp(App).use(router).use(store);
app.mount('#app');

app.config.performance = true
app.config.globalProperties.$web3 = 'web3';

//@ts-ignore
app.config.devtools = true