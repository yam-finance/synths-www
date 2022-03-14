<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    msg: {
        type: String,
        default: () => "",
    },
})
</script>
