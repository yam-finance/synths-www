<template>
    <nav
        class="h-12 sticky overflow-hidden top-0 left-0 z-20 bg-navy-blue-800 text-white flex flex-col lg:flex-row border-b bd-main bg-main"
    >
        <router-link to="/">
        <div class="w-64 h-12 flex md:border-r bd-main">
            <img src="../../assets/images/yamIcon.png" class="m-2">
            <h3 class="logo font-bold text-emerald-500 my-auto">Yam Synths</h3>
            <span class="home-btn-bg my-auto px-2 overflow-hidden ml-3 md:ml-16 rounded-full text-sm">v 3.0</span>
        </div>
        </router-link>
        <ul
            class="flex space-x-8 overflow-hidden sticky left-64 my-auto px-4 rounded-full text-sm mx-4 py-1 font-semibold bg-dark txt-main invisible md:visible"
        >
            <li
                class="min-w-max cursor-pointer px-2"
                v-for="(tab, key) in tabs"
                :key="key"
                :class="tab.title==$route.name? 'bg-white rounded-md': ''"
            >
                <router-link :to='"/" + tab.to'>
                    <span v-if="tab.title==$route.name" class="text-black">{{ tab.title }}</span>
                    <span v-else>{{ tab.title }}</span>
                </router-link>
            </li>
        </ul>
        <div class="flex absolute w-96 right-0 p-2 mr-4 text-right h-12 lg:border-l bd-main invisible md:visible">
            <div class="flex absolute right-1">
                <img src="../../assets/images/bell.png" class="cursor-pointer my-auto h-4">
                <span
                        class="flex px-4 py-1.5 text-sm cursor-pointer"
                        @click="isDropDownOpen = !isDropDownOpen"
                >
                    Help
                    <img src="../../assets/images/dropdown.svg" class="mx-2 my-auto h-4">
                </span>
                <button class="hover:shadow-lg rounded-full px-4 py-1.5 my-auto text-sm wallet-btn">
                    Connect Wallet
                </button>
            </div>
            <ul
                class="overflow-hidden my-auto p-2 text-sm text-left fixed top-9 right-44 bg-light rounded-xl"
                v-if="isDropDownOpen"
            >
                <li class="min-w-max cursor-pointer p-1">
                    <span>Documentation</span>
                </li>
                <li class="min-w-max cursor-pointer p-1">
                    <span>Tutorials</span>
                </li>
            </ul>
        </div>
        <div class="flex overflow-hidden absolute right-0 h-12 visible md:invisible">
            <div class="flex px-4 py-4">
                <img src="../../assets/images/green-dot.svg" class="h-full py-0.5">
                <span class="text-xs my-auto font-normal px-3">13224549</span>
            </div>
        </div>
    </nav>
</template>

<script>
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
    let isDropDownOpen = 0;
    let activeTab = 0;
    export default {
        name: "Header",
        data() {
            return {
                tabs,
                isDropDownOpen,
                activeTab
            };
        },
        methods: {
            selectTab(item) {
                this.activeTab = item.id;
            }
        }
    }
</script>

<style scoped>

</style>
