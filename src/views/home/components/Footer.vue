<template>
    <nav
        class="h-12 w-full overflow-hidden fixed bottom-0 left-0 z-20 text-white flex flex-col lg:flex-row border-t border-gray-700 bg-main"
    >
        <div class="invisible md:visible">
            <div class="flex overflow-hidden absolute w-64 h-12 border-r border-gray-700">
                <div class="flex px-4 py-4">
                    <img src="../../../assets/images/green.png" class="h-full py-0.5">
                    <span class="px-1 text-xs my-auto font-normal px-3">13224549</span>
                    <img src="../../../assets/images/external.png" >
                </div>
            </div>
            <div class="flex absolute w-96 right-0 p-2 text-right h-12 lg:border-l border-gray-700">
                <div class="flex absolute right-2">
                    <img src="../../../assets/images/twitter.png" class="mx-2 my-auto cursor-pointer">
                    <img src="../../../assets/images/discord.png" class="mx-2 my-auto cursor-pointer">
                </div>
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
                    class="overflow-hidden w-full my-auto py-1 text-lg my-4 text-left fixed bottom-12 z-30 visible md:invisible"
                >
                    <span class="px-4 txt-main">Menu</span>
                    <li class="min-w-max cursor-pointer border-t border-gray-700 px-4 py-3">
                        <span>Explore Synths</span>
                    </li>
                    <li class="min-w-max cursor-pointer border-t border-gray-700 px-4 py-3">
                        <span>Markets</span>
                    </li>
                    <li class="min-w-max cursor-pointer border-t border-gray-700 px-4 py-3">
                        <span>Portfolio</span>
                    </li>
                </ul>

                <ul
                    class="overflow-hidden w-full my-auto py-1 text-lg my-4 text-left fixed bottom-64 z-30 visible md:invisible"
                >
                    <span class="px-4 txt-main">Help</span>
                    <li class="min-w-max cursor-pointer border-t border-gray-700 px-4 py-3">
                        <span>Documentation</span>
                    </li>
                    <li class="min-w-max cursor-pointer border-t border-b border-gray-700 px-4 py-3">
                        <span>Tutorials</span>
                    </li>
                </ul>

                <div class="flex fixed bottom-96 mb-12 visible md:invisible px-2 py-3">
                    <div class="flex">
                        <img src="../../../assets/images/twitter.png" class="mx-2 my-auto cursor-pointer">
                        <img src="../../../assets/images/discord.png" class="mx-2 my-auto cursor-pointer">
                    </div>
                </div>
            </div>
        </transition>

        <div class="flex absolute w-full right-0 p-2 text-right h-12 lg:border-l border-gray-700 visible md:invisible">
            <div class="flex">
                <img src="../../../assets/images/menu_fold.png" v-if="isMenuOpen" @click="isMenuOpen = !isMenuOpen">
                <img src="../../../assets/images/menu_open.png" v-else @click="isMenuOpen = !isMenuOpen">
                <button class="hover:shadow-lg rounded-full px-4 py-1.5 my-auto text-sm absolute right-5 wallet-btn">
                    Connect Wallet
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
    let isMenuOpen = 0;
    export default {
        name: "Footer",
        data() {
            return {
                isMenuOpen
            };
        },
    }
</script>

<style scoped>

</style>
