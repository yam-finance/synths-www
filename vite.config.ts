import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import visualizer from "rollup-plugin-visualizer"
import ViteComponents from "unplugin-vue-components/vite"
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
