<template>
    <nav
        class="h-12 w-full overflow-hidden fixed bottom-0 left-0 z-20 text-white flex flex-col lg:flex-row border-t bd-main bg-main"
    >
        <div class="invisible md:visible">
            <div class="flex overflow-hidden absolute w-64 h-12 border-r bd-main">
                <a class="hover:opacity-50 flex px-4 py-4">
                    <img src="../../assets/images/green-dot.svg" class="h-full py-0.5">
                    <span class="px-1 text-xs my-auto font-normal px-3">13224549</span>
                    <img src="../../assets/images/external-link.svg" >
                </a>
            </div>
            <div class="flex items-center absolute w-96 mr-4 right-0 p-2 text-right h-12 lg:border-l bd-main">
                <a class="flex items-center absolute right-2">
                    <img src="../../assets/images/socials/twitter.svg" class="mx-2 my-auto hover:opacity-50 cursor-pointer">
                    <img src="../../assets/images/socials/discord.svg" class="mx-2 my-auto hover:opacity-50 cursor-pointer">
                </a>
            </div>
        </div>

        <transition
                enter-active-class="transition ease-in-out duration-100"
                leave-active-class="transition ease-in duration-75"
                leave-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
        >
            <div
                    class="transition ease-in-out"
                    v-if="isMenuOpen"
            >
                <ul
                    class="overflow-hidden w-full py-1 text-lg my-4 pt-8 text-left fixed bottom-8 z-30 visible md:invisible bg-main"
                >
                    <span class="px-4 txt-main">Menu</span>
                    <li class="min-w-max cursor-pointer border-t bd-main px-4 py-3"
                        v-for="(tab, key) in tabs"
                        :key="key"
                        @click="isMenuOpen = !isMenuOpen"
                    >
                        <router-link :to='"/" + tab.to'>
                        <span>{{ tab.title }}</span>
                        </router-link>
                    </li>
                </ul>

                <ul
                    class="overflow-hidden w-full my-auto py-1 text-lg my-4 text-left fixed bottom-60 z-30 visible md:invisible bg-main"
                >
                    <span class="px-4 txt-main">Help</span>
                    <li class="min-w-max cursor-pointer border-t bd-main px-4 py-3">
                        <span>Documentation</span>
                    </li>
                    <li class="min-w-max cursor-pointer border-t border-b bd-main px-4 py-3">
                        <span>Tutorials</span>
                    </li>
                </ul>

                <div class="w-full flex items-center fixed bottom-96 visible md:invisible px-2 py-3 mb-8 bg-main">
                    <div class="flex">
                        <img src="../../assets/images/socials/twitter.svg" class="mx-2 my-auto cursor-pointer">
                        <img src="../../assets/images/socials/discord.svg" class="mx-2 my-auto cursor-pointer">
                    </div>
                </div>
            </div>
        </transition>

        <div class="flex items-center absolute w-full right-0 p-2 text-right h-12 lg:border-l bd-main visible md:invisible">
            <div class="flex">
                <img class="hover:opacity-50" src="../../assets/images/x.svg" v-if="isMenuOpen" @click="isMenuOpen = !isMenuOpen">
                <img class="hover:opacity-50" src="../../assets/images/menu.svg" v-else @click="isMenuOpen = !isMenuOpen">
                <button class="hover:shadow-lg rounded-xl font-bold px-4 py-1.5 text-sm absolute top-2 right-2 primary-button">
                    Connect Wallet
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
    let isMenuOpen = 0;
    let tabs = [
        {
            id: 1,
            title: "Explore Synths",
            to: "explore-synths"
        },
        {
            id: 2,
            title: "Markets",
            to: "markets"
        },
        {
            id: 3,
            title: "Portfolio",
            to: "portfolio"
        },
    ];
    export default {
        name: "Footer",
        data() {
            return {
                isMenuOpen,
                tabs
            };
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
