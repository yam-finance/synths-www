import { Buffer } from "buffer"
;(window as any).global = window
;(window as any).Buffer = Buffer
import { createApp } from "vue"
import App from "@/App.vue"
import router from "@/router"
import options from "@/utils/auth"
import { LockPlugin } from "@snapshot-labs/lock/plugins/vue3"
import "vue-js-modal/dist/styles.css"
import "@/index.scss"
import VueClickAway from "vue3-click-away"
import { i18n } from "@/i18n"
import VueClipboard from "vue3-clipboard"
import resize from "vue-element-resize-detector"

const app = createApp(App)
    .use(resize)
    .use(i18n)
    .use(router)
    .use(VueClickAway)
    .use(LockPlugin, options)
    .use(VueClipboard)

app.mount("#app")
// app.config.performance = true
app.config.globalProperties.$web3 = "web3"
app.config.globalProperties.$i18n = i18n

// //@ts-ignore
// app.config.devtools = true
