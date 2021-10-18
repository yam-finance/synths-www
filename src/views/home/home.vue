<template>
    <div class="bg-main font-openSauceSans">
        <nav
                class="h-12 sticky overflow-hidden top-0 left-0 z-20 bg-navy-blue-800 text-white flex flex-col lg:flex-row bg-main"
        >
            <router-link to="/">
                <div class="w-64 h-12 flex">
                    <img src="@/assets/images/yamIcon.png" class="m-2 h-8 w-8">
                    <h3 class="logo font-bold text-emerald-500 my-auto">Yam Synths</h3>
                    <span class="bg-[#3468FF] my-auto px-2 overflow-hidden ml-3 md:ml-16 rounded-full text-sm">v 3.0</span>
                </div>
            </router-link>
            <div class="flex absolute right-1 p-2">
            <span class="flex px-4 py-1.5 text-sm cursor-pointer">
                Learn
            </span>
            <router-link to="/explore-synths">
            <s-button buttonStyles="wallet-btn px-4 py-1.5 my-auto text-sm font-normal">
                <template #buttonTitle>
                    Explore Synths
                </template>
            </s-button>
            </router-link>
            </div>
        </nav>
        <div class="container-fluid max-w-[1000px] m-auto">
            <div class="home-content text-center text-white mt-16">
                <div class="inline">
                    <span class="txt-main">BUILT BY</span>
                    <img src="@/assets/images/logo.png" class="inline w-6 h-6">YAM
                </div>
                <div class="text-3xl md:text-5xl lg:text-7xl mt-8 mb-16 font-semibold">Go Long or Short<br>on Anything</div>
                <div>
                    <img src="@/assets/images/pages/market.png" class="m-auto mb-0">
                </div>
                <div class="text-xl md:text-3xl lg:text-4xl font-semibold">
                    Messing with collateral ratios & getting <br>
                    liquidated on leverage isn't run
                </div>
                <div class="text-lg md:text-xl lg:text-2xl text-[#CBCBFF] m-8 sm:mx-40">
                    Yam Synths’ LSP* contracts enable easy minting and low risk leverage on all sorts of Synths.
                </div>
                <div class="text-sm txt-main m-8">
                    *Long & Short Position
                </div>
                <div class="grid grid-cols-3 m-auto">
                    <div>
                        <img src="@/assets/images/check.png" class="mb-1 inline">
                        <span class="ml-1">Non-liquidatable positions</span>
                    </div>
                    <div>
                        <img src="@/assets/images/check.png" class="mb-1 inline">
                        <span class="ml-1">Capital efficient minting</span>
                    </div>
                    <div>
                        <img src="@/assets/images/check.png" class="mb-1 inline">
                        <span class="ml-1">Another benefit here</span>
                    </div>
                </div>

                <div class="mt-16 lg:mt-40 txt-main text-sm">
                    GET STARTED
                </div>
                <div class="m-8 text-2xl lg:text-3xl font-semibold">
                    Hedge, trade or earn on our synths
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-2">
                    <div
                            v-for="(menu, key) in menus"
                            :key="key"
                            class="card rounded-lg bg-[#272760] px-6 py-4 m-2 lg:w-72"
                    >
                        <div class="grid grid-cols-2 mb-4">
                            <div class="flex">
                                <img src="@/assets/images/zombie.png" class="w-6 h-6 mb-1">
                                <span class="text-base font-semibold ml-2">{{menu.title}}</span>
                            </div>
                            <div>
                                <div class="bg-[#3468FF] my-auto px-3 py-0.5 mt-0.5 rounded-full text-xs font-bold float-right">30% APY</div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="flex">
                                <span class="px-1 my-auto font-bold">${{menu.price}}</span>
                                <img src="@/assets/images/arrow-up-right.svg" class="h-full py-0.5">
                                <span class="px-1 my-auto text-sm text-[#9A9AC8]">15%</span>
                            </div>
                            <router-link :to="'/synths/' + menu.to">
                            <div>
                                <img src="@/assets/images/arrow-right.svg" class="float-right">
                            </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <router-link to="/explore-synths">
                <button class="hover:shadow-lg rounded-xl px-4 py-2 my-auto text-base font-bold wallet-btn">
                    Explore Synths
                </button>
                </router-link>

                <div class="grid grid-cols-2 md:grid-cols-4 m-4 my-16">
                    <div class="font-semibold">
                        <p class="text-4xl md:text-5xl lg:text-6xl">$2.0m</p>
                        <p class="text-sm txt-main mt-2">TOTAL VALUE LOCKED</p>
                    </div>
                    <div class="font-semibold">
                        <p class="text-4xl md:text-5xl lg:text-6xl">$324k</p>
                        <p class="text-sm txt-main mt-2">TOTAL SYNTH MARKETCAP</p>
                    </div>
                    <div class="font-semibold">
                        <p class="text-4xl md:text-5xl lg:text-6xl">$1.4m</p>
                        <p class="text-sm txt-main mt-2">TOTAL SYNTH LIQUIDITY</p>
                    </div>
                    <div class="font-semibold">
                        <p class="text-4xl md:text-5xl lg:text-6xl">$500k</p>
                        <p class="text-sm txt-main mt-2">VOLUME LAST 24H</p>
                    </div>
                </div>

                <div class="mx-20 md:mx-10 lg:mx-40 font-semibold">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="grid grid-rows-2 gap-4">
                            <div class="card rounded-lg bg-[#272760] h-56 px-4 sm:px-16 py-4 flex flex-col">
                                <div class="mt-auto">
                                    <p class="text-[#CBCBFF] text-sm leading-8 font-medium">CAPITAL EFFICIENT</p>
                                    <p class="text-lg leading-6">Mint positions at a 1:1 ratio, always</p>
                                </div>
                            </div>
                            <div class="card rounded-lg bg-[#272760] h-56 px-4 sm:px-16 py-4 flex flex-col">
                                <div class="mt-auto">
                                    <p class="text-[#CBCBFF] text-sm leading-8 font-medium">CAPITAL EFFICIENT</p>
                                    <p class="text-lg leading-6">Mint positions at a 1:1 ratio, always</p>
                                </div>
                            </div>
                        </div>
                        <div class="card rounded-lg bg-[#272760] px-4 sm:px-16 py-4 flex flex-col min-h-[224px]">
                            <div class="mt-auto">
                                <p class="text-[#CBCBFF] text-sm leading-8 font-medium">LOW RISK LEVERAGE</p>
                                <p class="text-lg leading-6">Market buy up to 6x leverage positions</p>
                            </div>
                        </div>
                    </div>
                    <div class="card rounded-lg bg-[#272760] h-56 px-4 sm:px-16 py-4 my-4 lg:mx-20 flex flex-col min-h-[224px]">
                        <div class="mt-auto">
                            <p class="text-[#CBCBFF] text-sm leading-8 font-normal">OPTIONATED LP</p>
                            <p class="text-lg leading-6 sm:mx-20">Provide liquidity in neutral, bullish, or bearish pools</p>
                        </div>
                    </div>
                </div>

                <div class="mt-32 text-lg">
                    <span class="txt-main">Build by</span>
                    🍠 YAM
                </div>
                <div class="text-lg">
                    <span class="txt-main">Powered by </span>
                    🐙 UMA
                </div>

                <ul
                    class="inline-flex space-x-8 text-[#CBCBFF] mt-8"
                >
                    <li class="cursor-pointer">Documentation</li>
                    <li class="cursor-pointer">FAQs</li>
                    <li class="cursor-pointer">Newsletter</li>
                </ul>

                <div>
                    <div class="inline-flex mt-8">
                        <img src="@/assets/images/socials/twitter.svg" class="mx-2 my-auto cursor-pointer">
                        <img src="@/assets/images/socials/discord.svg" class="mx-2 my-auto cursor-pointer">
                    </div>
                </div>

                <div class="p-8 font-normal text-sm txt-main">
                    © 2021 Yam Synths. All rights reserved.
                </div>
            </div>
        </div>


    </div>

</template>

<script>
    import SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue";
    let menus = [
        {
            id: 1,
            title: "ETH/DAI IL",
            price: 120,
            to: "eth-dai-il",
        },
        {
            id: 2,
            title: "ETH/DAI IL",
            price: 120,
            to: "eth-dai-il",
        },
        {
            id: 3,
            title: "ETH/DAI IL",
            price: 120,
            to: "eth-dai-il",
        },
        {
            id: 4,
            title: "ETH/DAI IL",
            price: 120,
            to: "eth-dai-il",
        },
        {
            id: 5,
            title: "ETH/DAI IL",
            price: 120,
            to: "eth-dai-il",
        },
        {
            id: 6,
            title: "ETH/DAI IL",
            price: 120,
            to: "eth-dai-il",
        },
    ];
    export default {
        name: "HomePage",
        components: {
            's-button': SynthsRoundedButton,
        },
        data() {
            return {
                menus
            };
        },
    }
</script>

<style scoped>

</style>
