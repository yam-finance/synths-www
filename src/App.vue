<template>
    <template v-if="!loadingStatus">
        <router-view />
    </template>
    <template v-else-if="loadingStatus">
        <p class="absolute left-1/2 top-1/2">Loading...</p>
    </template>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref, onUnmounted, onMounted } from "vue"
import { globalStore } from "@/composables/global"
import { useApp } from "@/composables/useApp"

export default defineComponent({
    setup() {
        //Setup Simple Data
        const state = reactive({
            name: "John Doe",
            email: "john@gmail.com",
        })

        const updateUsername = (name: string) => {
            state.name = name
        }

        const updateEmail = (email: string) => {
            state.email = email
        }

        const { loadBlockNumber, setScreenWidth } = globalStore()

        loadBlockNumber()

        //Setup window resize watcher`

        const resizeHandler = () => {
            setScreenWidth(window.innerWidth)
        }

        // const { addNewNotifications } = globalStore();

        onUnmounted(() => {
            window.removeEventListener("resize", resizeHandler)
        })

        const { init } = useApp()
        onMounted(async () => {
            window.addEventListener("resize", resizeHandler)
            resizeHandler()
            init()
        })
        return {}
    },
    data() {
        return {
            loadingStatus: true,
        }
    },
    watch: {
        $route(to, from) {
            if (from.fullPath !== "/" || (from.fullPath == "/" && from.name)) {
                this.loadingHandler()
            }
        },
    },
    mounted() {
        this.loadingHandler()
    },
    methods: {
        loadingHandler() {
            let obj = this
            document.onreadystatechange = function () {
                let state = document.readyState
                if (state == "interactive") {
                    obj.loadingStatus = true
                } else if (state == "complete") {
                    obj.loadingStatus = false
                }
            }
        },
    },
})
</script>

<style lang="scss">
#app {
    @apply relative h-full overflow-auto;
}
</style>
