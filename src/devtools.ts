import { App, Plugin } from "vue"

export const devtools: Plugin = {
    install(app: App) {
        // @ts-ignore
        if (process.env.NODE_ENV === "development" && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
            // @ts-ignore
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
        }
    },
}
