import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import visualizer from "rollup-plugin-visualizer"
import ViteComponents from "unplugin-vue-components/vite"
import PrerenderSpaPlugin from "prerender-spa-plugin"
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            script: {
                refSugar: true,
            },
        }),
        ViteComponents({ directoryAsNamespace: true }),
        visualizer({
            filename: "./dist/stats.html",
            template: "sunburst",
            gzipSize: true,
        }),
        PrerenderSpaPlugin({
            // Absolute path to compiled SPA
            staticDir: path.resolve(__dirname, './dist'),
            // List of routes to prerender
            routes: [ '/', '/portfolio', '/explore' ],
            // Options
            postProcess(context) {
                let titles = {
                    '/': 'Home',
                    '/explore': 'Explore',
                    '/portfolio': 'Portfolio'
                };
                context.html = context.html.replace(
                    /<title>[^<]*<\/title>/i,
                    `<title>${titles[context.route]}</title>`
                )
                return context
            }
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
        extensions: [".js", ".vue", ".json", ".ts", ".png"],
    },
    define: {
        "process.env": process.env,
    },
    optimizeDeps: {
        include: ["color"],
        // @ts-ignore
        allowNodeBuiltins: ["stream"],
    },
})
