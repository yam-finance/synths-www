<template>
    <nav
            class="h-12 sticky overflow-hidden top-0 left-0 z-20 bg-navy-blue-800 text-white flex flex-col lg:flex-row border-b border-gray-700 bg-main"
    >
        <div class="flex p-2 border-r border-gray-700">
            <img src="../../../assets/images/yamIcon.png">
            <h3 class="logo font-bold text-emerald-500 my-auto ml-3">Yan Synths</h3>
            <span class="bg-blue-500 my-auto px-2 overflow-hidden ml-3 md:ml-16 rounded-full text-sm">v 3.0</span>
        </div>
        <ul
            class="flex space-x-8 overflow-hidden sticky left-64 my-auto px-4 rounded-full text-sm mx-4 my-4 py-1 font-semibold bg-dark txt-main invisible md:visible"
        >
            <li
                class="min-w-max cursor-pointer px-2"
                v-for="(tab, key) in tabs"
                :key="key"
                @click="selectTab(tab)"
                :class="tab.active==1? 'bg-white rounded-full': ''"
            >
                <span v-if="tab.active==1" class="text-black">{{ tab.title }}</span>
                <span v-else>{{ tab.title }}</span>
            </li>
        </ul>
        <div class="flex absolute w-96 right-0 p-2 text-right h-12 lg:border-l border-gray-700 invisible md:visible">
            <div class="flex absolute right-5">
                <span class="flex px-4 py-1.5 text-sm">
                    Help
                    <img src="../../../assets/images/dropdown.png" class="mx-2 my-auto h-4 cursor-pointer">
                </span>
                <button class="hover:shadow-lg rounded-full px-4 py-1.5 my-auto text-sm wallet-btn">
                    Connect Wallet
                </button>
            </div>
        </div>
        <div class="flex overflow-hidden absolute right-0 h-12 visible md:invisible">
            <div class="flex px-4 py-4">
                <img src="../../../assets/images/green.png" class="h-full py-0.5">
                <span class="px-1 text-xs my-auto font-normal px-3">13224549</span>
            </div>
        </div>
    </nav>
</template>

<script>
    let tabs = [
        {
            id: 1,
            title: "Explore Synths",
            active: 0,
        },
        {
            id: 2,
            title: "Markets",
            active: 1,
        },
        {
            id: 3,
            title: "Portfolio",
            active: 0,
        },
    ];
    export default {
        name: "Header",
        data() {
            return {
                tabs
            };
        },
        methods: {
            selectTab(item) {
                tabs.forEach(function(tab_item) {
                    tab_item.active = 0;
                });
                item.active = 1;
            }
        }
    }
</script>

<style scoped>

</style>
