<template>
    <div class="nav-icon w-[24px] h-[25px] relative cursor-pointer" :class="{ open: isOpen }" @click="clickHandler">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
    name: "SynthBurgerButton",
    props: {
        isOpen: Boolean,
    },
    emits: ["click"],
    methods: {
        clickHandler() {
            this.$emit("click")
        },
    },
}
</script>

<style scoped>
.nav-icon {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
}

.nav-icon span {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    @apply block absolute h-[2px] w-full bg-[#7171b2] rounded-[20px] opacity-100 left-0;
}

.nav-icon span:nth-child(1) {
    @apply top-0;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

.nav-icon span:nth-child(2) {
    @apply top-[40%];
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

.nav-icon span:nth-child(3) {
    @apply top-[80%];
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

.nav-icon.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    @apply top-[9%] left-[11%];
}

.nav-icon.open span:nth-child(2) {
    @apply w-[0%] opacity-0;
}

.nav-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    @apply top-[80%] left-[8%];
}
</style>
