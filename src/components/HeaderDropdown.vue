<template>
    <ul
        class="
            overflow-hidden
            my-auto
            p-2
            text-sm text-left
            fixed
            top-9
            bg-light
            rounded-xl
            shadow-lg
        "
        :class=right
        @click="$emit('close')"
    >
        <li class="min-w-max cursor-pointer p-1">
            <span>{{menu1}}</span>
        </li>
        <li class="min-w-max cursor-pointer p-1" v-if="menu2">
            <span>{{menu2}}</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: "HeaderDropdown",
    methods: {
        close() {
            this.$emit("close")
        },
    },
    props: {
        right: {
            type: String,
            default: "",
        },
        menu1: {
            type: String,
            default: "",
        },
        menu2: {
            type: String,
            default: "",
        },
    }
}
</script>