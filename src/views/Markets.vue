<template>
    <div class="markets pb-10 bg-light border-r bg-main">
        <div class="w-full h-12 py-3 px-6 border-b bg-main">
            <span class="text-sm txt-main">Information</span>
        </div>

        <div class="grid grid-cols-1 2xl:grid-cols-2 border-b bg-main bg-light">
            <div class="px-6 py-4 border-r bg-main">
                <div class="w-full">
                    <div class="inline">
                        <img src="@/assets/images/zombie.png" class="h-6 inline mb-0.5" />
                        <p class="font-semibold text-base inline ml-2">Sushi APY</p>
                    </div>
                    <div class="text-right mr-0 inline float-right">
                        <div
                            class="rounded-xl bg-main p-2 shadow-inner font-normal text-sm txt-main text-white"
                            @click="isDropDown = !isDropDown"
                        >
                            Expiring 21st April
                            <img
                                src="@/assets/images/arrow-down.png"
                                :class="{ 'rotate-180': isDropDown }"
                                class="h-6 inline ml-2 mb-0.5 cursor-pointer"
                            />
                        </div>
                        <ul
                            v-if="isDropDown"
                            v-click-away="closeDown"
                            class="overflow-hidden my-auto text-sm text-left fixed bg-light rounded-br-xl rounded-bl-xl"
                        >
                            <RouterLink to="/#">
                                <li class="min-w-max cursor-pointer p-1">
                                    <span class="px-4 py-2 font-normal text-sm txt-main"> Expiring 23rd April</span>
                                </li>
                            </RouterLink>
                            <RouterLink to="/#">
                                <li class="min-w-max cursor-pointer p-1">
                                    <span class="px-4 py-2 font-normal text-sm txt-main"> Expiring 23rd April</span>
                                </li>
                            </RouterLink>
                        </ul>
                    </div>
                </div>

                <p class="text-[#CBCBFF] mt-8">
                    Sushi APY Long and Short tokens track an index consisting of ten stocks that are most commented on
                    r/wallstreetbets. The initial Index constituents are selected based on data from swaggystocks.com.
                </p>

                <div class="flex flex-wrap space-x-4 mt-4">
                    <RouterLink to="/#" class="cursor-pointer">
                        <p class="text-sm inline mr-1 md:mr-2">Learn More</p>
                        <external-link-svg class="inline cursor-pointer w-[12px] h-[12px]" />
                    </RouterLink>
                    <RouterLink to="/#" class="cursor-pointer">
                        <p class="text-sm inline mr-1 md:mr-2">Tutorial</p>
                        <external-link-svg class="inline cursor-pointer w-[12px] h-[12px]" />
                    </RouterLink>
                    <RouterLink to="/#" class="cursor-pointer">
                        <p class="text-sm inline mr-0.5 md:mr-2">Connect Address</p>
                        <external-link-svg class="inline cursor-pointer w-[12px] h-[12px]" />
                    </RouterLink>
                </div>

                <div class="flex">
                    <div class="grid grid-cols-1">
                        <div class="p-2 pl-0">
                            <s-button
                                class="mt-2.5 py-2 px-4 long rounded-3xl"
                                :button-styles="'!text-sm'"
                                :color="'linear-gradient(180deg, #C8FF2D 0%, #008C0E 100%)'"
                            >
                                <template #buttonTitle> Go Long </template>
                            </s-button>
                        </div>
                    </div>
                    <div class="grid grid-cols-1">
                        <div class="p-2 pr-0">
                            <s-button
                                class="mt-2.5 py-2 px-4 short rounded-3xl"
                                :button-styles="'!text-sm'"
                                :color="'linear-gradient(180deg, #FF6ACC 0%, #DC1919 100%)'"
                            >
                                <template #buttonTitle> Go Short </template>
                            </s-button>
                        </div>
                    </div>
                    <div class="my-auto">
                        <p class="txt-main text-sm mt-2 ml-2 cursor-pointer">Buy on Balancer</p>
                    </div>
                </div>
            </div>

            <div class="bg-main">
                <div class="px-6 py-4">
                    <span class="text-sm txt-main">Manage your position</span>
                    <div class="grid grid-cols-3 xl:gap-4 mt-4">
                        <div class="card md:rounded-lg shadow-lg md:bg-light md:p-2">
                            <p class="text-lg font-bold inline">12</p>
                            <p class="text-xs txt-main inline ml-1">ETH</p>
                            <p class="text-xs txt-main">Collateral Used</p>
                        </div>
                        <div class="card md:rounded-lg shadow-lg md:bg-light md:p-2">
                            <p class="text-lg font-bold inline">120</p>
                            <p class="text-xs txt-main inline ml-1">SHI-A-L-1221</p>
                            <p class="text-xs txt-main">Longs Minted</p>
                        </div>
                        <div class="card md:rounded-lg shadow-lg md:bg-light md:p-2">
                            <p class="text-lg font-bold inline">120</p>
                            <p class="text-xs txt-main inline ml-1">SHI-A-S-1221</p>
                            <p class="text-xs txt-main">Short Tokens Minted</p>
                        </div>
                    </div>
                </div>

                <div class="w-full text-white">
                    <div
                        v-for="(option, key) in options"
                        :key="key"
                        class="border-t bg-main"
                        @click="selected_option = option.id"
                    >
                        <div
                            class="w-full h-12 py-3 px-6 cursor-pointer"
                            :class="{ 'bg-[#4447BD]': option.id === selected_option }"
                        >
                            <span class="font-semibold">{{ option.title }}</span>
                            <img
                                v-if="option.id == selected_option"
                                src="@/assets/images/arrow-right-pink.png"
                                class="inline float-right w-6 h-6 cursor-pointer"
                            />
                            <arrow-right-svg v-else class="inline float-right w-6 h-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-6 py-4 border-b md:border-0 bg-main">
            <SynthChart />
        </div>
        <div class="px-6 py-4 border-b md:border-0 bg-main xl:block">
            <SynthChart :is-long-short="true" class="p-0" :text-title="textTitle" :btn-color="BtnColor" />
        </div>
        <div class="px-6 py-4 border-b md:border-0 bg-main xl:block">
            <SynthChart :is-long-short="true" class="p-0" :text-title="textTitles" :btn-color="BtnShortColor" />
        </div>
        <div class="border-t bg-main">
            <div class="grid grid-cols-1 xl:grid-cols-2">
                <div class="px-6 py-4 pb-8 border-r border-b bg-main">
                    <p class="pb-4 text-lg font-semibold">Calculate returns at expiry</p>
                    <p class="text-sm txt-main pb-8">
                        Simulate your potential returns at expiry. Edit the number of short or long tokens in your
                        wallet. with the chart to see your expected profit or loss
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="text-sm block pb-2">Long Tokens</label>
                            <input
                                id="long_token"
                                class="rounded-lg bg-main px-2 py-1 outline-none w-full"
                                placeholder="0"
                                name="long_token"
                            />
                        </div>
                        <div>
                            <label class="text-sm block pb-2">Short Tokens</label>
                            <input
                                id="short_token"
                                class="rounded-lg bg-main px-2 py-1 outline-none w-full"
                                placeholder="0"
                                name="short_token"
                            />
                        </div>
                    </div>

                    <div class="mt-2">
                        <div class="checkbox inline-flex items-center mt-4 cursor-pointer">
                            <input id="chk_wallet" type="checkbox" class="form-checkbox relative h-5 w-5 opacity-0" />
                            <label
                                for="chk_wallet"
                                class="
                                    ml-2
                                    txt-main
                                    cursor-pointer
                                    relative
                                    ml-8
                                    before:w-6
                                    before:h-6
                                    before:-ml-8
                                    before:absolute
                                    before:border
                                    before:border-purpleLight
                                    before:rounded-md
                                    before:z-20
                                    after:absolute
                                    after:w-[16px]
                                    after:h-[16px]
                                    after:z-30
                                    after:-ml-8
                                    after:top-1
                                    after:left-1
                                    after:bg-checkbox
                                    after:bg-no-repeat
                                    after:bg-cover
                                    after:rounded-sm
                                "
                                :class="{ 'after:content-none': isUseWallet === 0 }"
                                @click="isUseWallet = 1 - isUseWallet"
                            >
                                Use wallet balances
                            </label>
                        </div>
                    </div>
                </div>
                <div class="px-6 py-4">
                    <div class="grid grid-cols-2 gap-1">
                        <div class="bg-[#212149] px-6 py-4 rounded-md rounded-tl-2xl">
                            <p class="text-lg font-bold text-[#2DFF42] inline">+$140</p>
                            <p class="text-xs txt-main">Returns at expiry</p>
                        </div>
                        <div class="bg-[#212149] px-6 py-4 rounded-md rounded-tr-2xl">
                            <p class="text-lg font-bold inline">44%</p>
                            <p class="text-xs txt-main">xSUSHI APY at Expiry</p>
                        </div>
                    </div>
                    <div class="my-1">
                        <SynthChart class="rounded-t-md" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="isLg" class="min-w-[400px] block">
        <div v-for="(option, key) in options" :key="key" :class="option.id == selected_option ? 'h-full' : ''">
            <SynthsInsideBar
                v-if="option.id == selected_option"
                :settle="option.slug == 'Settle' ? false : true"
                :title="option.title"
                :sub-title="option.description"
                :button-name="option.slug"
                :loading="loading"
                :expiry-price="expiryPrice"
                @sidebar-closed="sidebarClosed"
            />
        </div>
    </div>
    <div v-if="!isLg" class="min-w-[400px] block absolute top-14 right-2 left-2">
        <div v-for="(option, key) in options" :key="key" :class="option.id == selected_option ? 'h-full' : ''">
            <SynthsInsideBar
                v-if="option.id == selected_option"
                :settle="option.slug == 'Settle' ? false : true"
                :title="option.title"
                :sub-title="option.description"
                :button-name="option.slug"
                :loading="loading"
                :expiry-price="expiryPrice"
                @sidebar-closed="sidebarClosed"
            />
        </div>
    </div>
</template>

<script lang="ts">
import SynthChart from "@/components/charts/SynthChart.vue"
import SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue"
import SynthsInsideBar from "@/components/SynthsInsideBar.vue"
import synthsLogo from "@/assets/images/logo.png"
import externalLinkSvg from "@/assets/images/external-link.svg"
import arrowRightSvg from "@/assets/images/arrow-right.svg"

import { mixin as VueClickAway, directive as onClickaway } from "vue3-click-away"
import { globalStore } from "@/composables/global"

/* -- Start of SDK Test -- */
import { useSynthsSDK } from "../composables/useSynthsSDK"
import { computed } from "vue"
/* -- End of SDK Test -- */

let options = [
    {
        id: 1,
        title: "Mint a position",
        description: "Deposit WETH collateral to mint Long and Short tokens of equal value",
        slug: "Mint",
    },
    {
        id: 2,
        title: "Redeem your position",
        description: "Burn Long and Short tokens to receive your WETH collateral",
        slug: "Redeem",
    },
    {
        id: 3,
        title: "Settle",
        description: "Burn Long and Short tokens for ETH",
        slug: "Settle",
    },
]

let selected_option = 0
let isUseWallet = 0
let isDropDown = false
let highlight = false

export default {
    name: "Markets",
    components: {
        SynthChart,
        "s-button": SynthsRoundedButton,
        SynthsInsideBar,
        externalLinkSvg,
        arrowRightSvg,
    },
    directives: {
        ClickAway: onClickaway,
    },
    mixins: [VueClickAway],
    setup() {
        /* -- Start of SDK Test -- */
        /// @notice Synth SDK Init test
        // const url = `${import.meta.env.VITE_INFURA_URL}`
        // const provider = new providers.JsonRpcProvider(url)
        const { data, loading } = useSynthsSDK()
        const { isLg } = globalStore()
        /* -- End of SDK Init Test -- */

        return {
            isLg,

            /* -- Start of SDK Test -- */
            loading: loading,
            expiryPrice: computed(() => {
                if (!loading.value) return data.value["upunks-0921"]["empState"].expiryPrice
                return null
            }),
            /* -- End of SDK Test -- */
        }
    },
    data() {
        return {
            synthsLogo,
            options,
            selected_option,
            isUseWallet,
            isDropDown,
            highlight,
            textTitle: "Go Long",
            textTitles: "Go Short",
            BtnColor: "linear-gradient(180deg, #C8FF2D 0%, #008C0E 100%)",
            BtnShortColor: "linear-gradient(180deg, #FF6ACC 0%, #DC1919 100%)",
        }
    },
    methods: {
        closeDown(e: any) {
            this.isDropDown = false
        },
        sidebarClosed(sidebarStatus) {
            this.selected_option = sidebarStatus
        },
    },
}
</script>
<style scoped lang="scss">
@media (min-width: 1280px) {
    .card {
        @apply bg-blueDark;
    }
}
</style>
