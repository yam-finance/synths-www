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
import { defineComponent, provide, reactive, ref, onUnmounted, onMounted } from "vue"
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

        const { addNewNotifications } = globalStore()

        onMounted(() => {
            addNewNotifications({
                style: 0,
                link: "https://github.com/yam-finance/synths-www/issues/75",
                title: "Title1",
                content: "Transaction sent. Minting 8 Long & 8 Short with 4 ETH",
            })
            setTimeout(() => {
                addNewNotifications({
                    style: 0,
                    link: "https://github.com/yam-finance/synths-www/issues/75",
                    title: "Title2",
                    content: "Transaction sent. Minting 8 Long & 8 Short with 4 ETH",
                })
            }, 2000)
            setTimeout(() => {
                addNewNotifications({
                    style: 0,
                    link: "https://github.com/yam-finance/synths-www/issues/75",
                    title: "Title3",
                    content: "Transaction sent. Minting 8 Long & 8 Short with 4 ETH",
                })
            }, 3000)
            setTimeout(() => {
                addNewNotifications({
                    style: 0,
                    link: "https://github.com/yam-finance/synths-www/issues/75",
                    title: "Title244",
                    content: "Transaction sent. Minting 8 Long & 8 Short with 4 ETH",
                })
            }, 4000)
        })

        onUnmounted(() => {
            window.removeEventListener("resize", resizeHandler)
        })

        provide("screen", screenWidth)

        return { state, screenWidth }
    },
})
</script>
