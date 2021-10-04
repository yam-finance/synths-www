<template>
        <aside
            class="sticky justify-center w-64 top-12 overflow-auto bg-navy-blue-100 dark:bg-black-500 dark:text-gray-100 text-left font-semibold bg-main txt-main invisible md:visible border-r bd-main "
            style="height: calc(100vh - 96px)"
        >
            <div class="w-full h-12 py-3 px-3 border-b bd-main">
                <span class="text-sm">All Synths</span>
            </div>
            <div class="w-full h-12 py-3 px-3 flex">
                <img src="../../assets/images/search.png" class="flex absolute my-1.5 mx-3">
                <input
                    class="flex flex-wrap placeholder-gray-500 fo px-10 py-4 h-full w-full focus:text-gray-300 dark:focus:text-gray-300 bg-dark rounded-full outline-none placeholder-primary txt-main"
                    placeholder="Search Synths"
                    @keyup="filter($event)"
                />
            </div>
            <ul class="w-full py-4">

                <li
                     v-for="(menu, key) in menus"
                     :key="key"
                     @click="selectMenu(menu)"
                >
                    <router-link :to="'/synths/' + menu.to">
                        <div
                                v-if="menu.title.toLowerCase().includes(filter_string)"
                                class="px-4 py-2 my-auto flex border-b bd-main cursor-pointer" :class="this.activeTab==menu.id? 'bg-light': ''"
                        >
                            <img src="../../assets/images/group.png">
                            <span class="px-2 text-sm my-auto text-white">{{ menu.title }}</span>
                            <div class="flex my-0.5 absolute" :class="this.activeTab==menu.id? 'left-32': 'left-40'">
                                <span class="px-1 text-sm my-auto font-normal">$120</span>
                                <img src="../../assets/images/arrow-up.png" class="h-full py-0.5">
                                <span class="px-1 text-sm my-auto font-normal">15%</span>
                                <img src="../../assets/images/arrow-right.png" v-if="this.activeTab==menu.id">
                            </div>
                        </div>
                    </router-link>
                </li>

            </ul>
        </aside>

</template>

<script>
    let menus = [
        {
            id: 1,
            title: "ETH/DAI IL",
            to: "eth-dai-il",
        },
        {
            id: 2,
            title: "Sushi APY",
            to: "sushi-api",
        },
        {
            id: 3,
            title: "DPI 2x",
            to: "dpi-2x",
        },
        {
            id: 4,
            title: "YAM/ETH IL",
            to: "yam-eth-il",
        },
        {
            id: 5,
            title: "New...",
            to: "new",
        },
        {
            id: 6,
            title: "New...",
            to: "new",
        },
        {
            id: 7,
            title: "New...",
            to: "new",
        },
        {
            id: 8,
            title: "New...",
            to: "new",
        },
        {
            id: 9,
            title: "New...",
            to: "new",
        },
        {
            id: 10,
            title: "New...",
            to: "new",
        },
        {
            id: 11,
            title: "New...",
            to: "new",
        },
        {
            id: 12,
            title: "New...",
            to: "new",
        },
        {
            id: 13,
            title: "New...",
            to: "new",
        },
        {
            id: 14,
            title: "New...",
            to: "new",
        },
        {
            id: 15,
            title: "New...",
            to: "new",
        },
        {
            id: 16,
            title: "New...",
            to: "new",
        },
        {
            id: 17,
            title: "New...",
            to: "new",
        },
        {
            id: 18,
            title: "New...",
            to: "new",
        },
        {
            id: 19,
            title: "New...",
            to: "new",
        },
        {
            id: 20,
            title: "New...",
            to: "new",
        },
        {
            id: 21,
            title: "New...",
            to: "new",
        },
    ];
    let filter_string = "";
    let activeTab = 1;
    export default {
        name: "SideBar",
        data() {
            return {
                menus,
                filter_string,
                activeTab
            };
        },
        methods: {
            selectMenu(item) {
                this.activeTab = item.id;
            },
            filter(event) {
                this.filter_string = event.target.value;
            }
        }
    }
</script>

<style scoped>

</style>
