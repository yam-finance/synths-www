<template>
    <router-view />
</template>

<style lang="scss">
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
import { defineComponent, provide, reactive, ref, onUnmounted } from "vue"
import { globalStore } from "@/composables"

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

        provide("userDetails", state)
        provide("updateUsername", updateUsername)
        provide("updateEmail", updateEmail)

        //Setup window resize watcher
        const screenWidth = ref<number | null>(null)

        const resizeHandler = () => {
            screenWidth.value = window.innerWidth
        }

        window.addEventListener("resize", resizeHandler)

        onUnmounted(() => {
            window.removeEventListener("resize", resizeHandler)
        })

        provide("screen", screenWidth)

        return { state, screenWidth }
    },
})
</script>
