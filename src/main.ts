import { Buffer } from 'buffer';
(window as any).global = window;
(window as any).Buffer = Buffer;
import { createApp } from 'vue'
import App from '@/App.vue'
import '@/index.scss'
import router from "@/router"
import options from '@/utils/auth';
import { LockPlugin } from '@snapshot-labs/lock/plugins/vue3';
import 'vue-js-modal/dist/styles.css'
const app = createApp(App);
app.use( router);
app.use(LockPlugin, options);

app.mount('#app');



