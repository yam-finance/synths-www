<template>
    <div class="nav-icon" :class="{ open: isOpen }" @click="clickHandler">
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
    width: 24px;
    height: 25px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
}

.nav-icon span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #7171b2;
    border-radius: 20px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
}

.nav-icon span:nth-child(1) {
    top: 0;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

.nav-icon span:nth-child(2) {
    top: 40%;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

.nav-icon span:nth-child(3) {
    top: 80%;
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
    top: 9%;
    left: 11%;
}

.nav-icon.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
}

.nav-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 80%;
    left: 8%;
}
</style>
