<template>
        <aside
            class="sticky justify-center w-64 top-12 overflow-auto bg-navy-blue-100 dark:bg-black-500 dark:text-gray-100 text-left font-semibold bg-main txt-main invisible md:visible"
            style="height: calc(100vh - 96px)"
        >
            <div class="w-full h-12 py-3 px-3 border-b border-gray-700">
                <span class="text-sm">All Synths</span>
            </div>
            <div class="w-full h-12 py-3 px-3 flex">
                <img src="../../assets/images/search.png" class="flex absolute my-1.5 mx-3">
                <input
                    class="flex flex-wrap placeholder-gray-500 fo px-10 py-4 h-full w-full focus:text-gray-300 dark:focus:text-gray-300 bg-dark rounded-full outline-none placeholder-primary txt-main"
                    placeholder="Search Synths"
                    @keydown="filter($event)"
                />
            </div>
            <ul class="w-full py-4">
                <router-link to="/synths">
                <li
                     v-for="(menu, key) in menus"
                     :key="key"
                     @click="selectMenu(menu)"
                >
                    <div
                            v-if="menu.title.toLowerCase().includes(filter_string)"
                            class="px-4 py-2 my-auto flex border-b border-gray-700 cursor-pointer" :class="menu.active==1? 'bg-light': ''"
                    >
                        <img src="../../assets/images/group.png">
                        <span class="px-2 text-sm my-auto text-white">{{ menu.title }}</span>
                        <div class="flex my-0.5 absolute" :class="menu.active==1? 'left-32': 'left-40'">
                            <span class="px-1 text-sm my-auto font-normal">$120</span>
                            <img src="../../assets/images/arrow-up.png" class="h-full py-0.5">
                            <span class="px-1 text-sm my-auto font-normal">15%</span>
                            <img src="../../assets/images/arrow-right.png" v-if="menu.active==1">
                        </div>
                    </div>
                </li>
                </router-link>
            </ul>
        </aside>

</template>

<script>
    let menus = [
        {
            id: 1,
            title: "ETH/DAI IL",
            active: 0,
        },
        {
            id: 2,
            title: "Sushi APY",
            active: 1,
        },
        {
            id: 3,
            title: "DPI 2x",
            active: 0,
        },
        {
            id: 4,
            title: "YAM/ETH IL",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
        {
            id: 5,
            title: "New...",
            active: 0,
        },
    ];
    let filter_string = "";
    export default {
        name: "SideBar",
        data() {
            return {
                menus,
                filter_string
            };
        },
        methods: {
            selectMenu(item) {
                menus.forEach(function(menu_item) {
                    menu_item.active = 0;
                });
                item.active = 1;
            },
            filter(event) {
                this.filter_string = event.target.value;
            }
        }
    }
</script>

<style scoped>

</style>
