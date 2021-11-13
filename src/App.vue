<template>
    <!--    TODO: experimental new feature Suspense-->
    <Suspense>
        <template v-if="!loadingStatus">
            <router-view />
        </template>
        <template v-else-if="loadingStatus">
            <p class="absolute left-1/2 top-1/2">Loading...</p>
        </template>
    </Suspense>
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
import { defineComponent, provide, ref, onUnmounted, onMounted } from "vue"

import { globalStore } from "@/composables"

export default defineComponent({
    setup() {
        // block number Eth
        const { loadBlockNumber } = globalStore()

        loadBlockNumber()

        //Setup window resize watcher
        const screenWidth = ref<number | null>(null)

        const resizeHandler = () => {
            screenWidth.value = window.innerWidth
        }

        window.addEventListener("resize", resizeHandler)

        const { addNewNotifications } = globalStore()

        onUnmounted(() => {
            window.removeEventListener("resize", resizeHandler)
        })

        provide("screen", screenWidth)

        return { screenWidth }
    },
    data() {
        return {
            loadingStatus: true,
        }
    },
    watch: {
        $route(to, from) {
            document.onreadystatechange = () => {
                let state = document.readyState
                if (state == "interactive") {
                    this.loadingStatus = true
                } else if (state == "complete") {
                    this.loadingStatus = false
                }
            }
        },
    },
    mounted() {
        document.onreadystatechange = () => {
            let state = document.readyState
            if (state == "interactive") {
                this.loadingStatus = true
            } else if (state == "complete") {
                this.loadingStatus = false
            }
        }
    },
    methods: {},
})
</script>
