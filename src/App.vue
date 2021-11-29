<template>
    <template v-if="!loadingStatus">
        <router-view />
    </template>
    <template v-else-if="loadingStatus">
        <p class="absolute left-1/2 top-1/2">Loading...</p>
    </template>
</template>

<style lang="scss">
#app {
    @apply relative h-full overflow-auto;
}
#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>

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

        const { loadBlockNumber } = globalStore()

        loadBlockNumber()

        //Setup window resize watcher
        const screenWidth = ref<number | null>(null)

        const resizeHandler = () => {
            screenWidth.value = window.innerWidth
        }

        window.addEventListener("resize", resizeHandler)

        // const { addNewNotifications } = globalStore();

        onUnmounted(() => {
            window.removeEventListener("resize", resizeHandler)
        })

        provide("screen", screenWidth)

        const { init } = useApp()
        onMounted(async () => {
            init()
        })
        return { state, screenWidth }
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
            var obj = this
            document.onreadystatechange = function () {
                var state = document.readyState
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
