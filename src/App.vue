<template>
    <suspense>
        <router-view />
        <template #fallback>
            <p class="absolute left-1/2 top-1/2">Loading...</p>
        </template>
    </suspense>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { globalStore } from "@/composables/global"
import { useApp } from "@/composables/useApp"

const { init } = useApp()
const { loadBlockNumber } = globalStore()

loadBlockNumber()
onMounted(async () => {
    await init()
})
</script>

<style lang="scss">
#app {
    @apply relative h-full overflow-auto;
}
</style>
