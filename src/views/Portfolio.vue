<template>
    <div class="w-full font-semibold hidden md:block mb-10">
        <div class="w-full h-12 py-3 px-4 border-b bg-main">
            <span class="text-sm txt-main">Portfolio</span>
        </div>
        <div
            class="
                p-4
                grid
                md:grid-cols-1
                lg:grid-cols-1
                xl:grid-cols-2
                2xl:grid-cols-4
                gap-4
                text-white
                border-b
                bg-main
            "
        >
            <div class="card min-h-[78px] rounded-lg bg-light px-6 py-4">
                <div v-if="!loading" class="text-xl font-bold">{{ $i18n.global.n(totalPortfolioValue, "currency") }}</div>
                <div v-else class="animate-pulse text-xl font-bold">...</div>
                <div class="text-sm pt-1 font-normal txt-main">Total Portfolio Value</div>
            </div>
            <div class="card min-h-[78px] rounded-lg bg-light px-6 py-4">
                <div v-if="!loading" class="text-xl font-bold">{{ totalSynthsMinted  }}</div>
                <div v-else class="animated-pulse text-xl font-bold">...</div>
                <div class="text-sm pt-1 font-normal txt-main">Synths Minted</div>
            </div>
            <div class="card min-h-[78px] rounded-lg bg-light px-6 py-4">
                <div class="flex">
                    <div class="text-xl font-bold">200</div>
                    <div class="text-sm txt-main ml-1 mt-2">Success</div>
                </div>
                <div class="text-sm pt-1 font-normal txt-main flex items-center">
                    Potential rewards
                    <img src="@/assets/images/help-circle.png" class="ml-2 h-4" />
                </div>
            </div>
            <div class="card min-h-[78px] rounded-lg bg-light px-6 py-4">
                <div class="flex">
                    <div class="text-xl font-bold">200</div>
                    <div class="text-sm txt-main ml-1 mt-2">Success in wallet</div>
                </div>
                <div class="text-sm mt-1 txt-main flex items-center">
                    <span class="rounded-xl wallet-btn text-xs text-white px-2 pb-0.5 font-bold">Redeem</span>
                    &nbsp;for
                    <span class="text-white font-normal">&nbsp;30 UMA</span>
                    <img src="@/assets/images/help-circle.png" class="ml-2 h-4" />
                </div>
            </div>
        </div>

        <div class="w-full h-12 px-2 border-b bg-main text-white text-lg flex justify-between">
            <span class="py-2 px-2">Your Synths</span>
            <div class="h-full w-[230px] py-2 px-3 flex">
                <img src="@/assets/images/search.svg" class="flex absolute my-1.5 mx-3" />
                <input
                    class="
                        flex flex-wrap
                        placeholder-gray-500
                        fo
                        pl-10
                        pr-1
                        py-4
                        h-full
                        w-full
                        focus:text-gray-300
                        dark:focus:text-gray-300
                        bg-dark
                        rounded-lg
                        outline-none
                        placeholder-primary
                        txt-main
                        text-sm
                    "
                    placeholder="Search Synths"
                    @keyup="filter($event)"
                />
            </div>
        </div>

        <table cellpadding="5" class="text-white border-b bg-main w-full font-normal hidden md:table">
            <thead class="lg:text-xs xl:text-sm txt-main text-left">
                <th class="py-2 px-4">Synths</th>
                <th>Amount Minted</th>
                <!-- <th>LP Amount</th> -->
                <th>Price</th> 
                <th>Collateral</th>
                <th>Status</th>
                <th></th>
            </thead>
            <tbody class="border-t bg-main lg:text-xs xl:text-sm 2xl:text-base">
                <tr v-for="(synth, key) in lspPortfolio" :key="key" class="border-b bg-main cursor-pointer basic-hover">
                    <td class="px-4 py-2 font-semibold flex">
                        <img src="@/assets/images/zombie.png" class="w-6 h-6" />
                        &nbsp;{{ synth.symbol }}
                    </td>
                    <td>{{ ethers.utils.formatEther(synth.balance) }}</td>
                    <!-- <td>{{ synth.lp_qty }}</td> -->
                    <td>{{ $i18n.global.n(synth.price, "currency") }}</td>
                    <td>{{ synth.collateralSymbol }}</td>
                    <td>
                        <div v-if="!synth.status">
                            <span class="text-white">Live</span>
                        </div>
                        <div v-else class="flex items-center">
                            <span class="txt-main mr-0.5">Expired</span>
                            <s-button
                                button-styles="wallet-btn ml-1 w-auto text-xs text-white px-2 py-0.5 my-auto font-bold block xl:inline"
                            >
                                <template #buttonTitle> Settle </template>
                            </s-button>
                        </div>
                    </td>
                    <td class="pr-2 m-0">
                        <img src="@/assets/images/arrow-right.svg" class="cursor-pointer" />
                    </td>
                </tr>
                <table-loader target="desktop" :loading="loading" />
            </tbody>
        </table>
        <div v-if="(!loading && !lspPortfolio) || (!loading && !lspPortfolio.length)" class="cursor-pointer bg-main text-center flex justify-center w-full mt-3">
            No synths to show
        </div>
    </div>

    <div class="min-w-[400px] border-l bg-main hidden lg:block">
        <!--Right Side-->
    </div>

    <div class="w-screen font-semibold block md:hidden text-white">
        <div class="w-full py-2 px-3 border-b bg-main">
            <span class="text-sm txt-main">Portfolio</span>
        </div>
        <div class="card p-3 border-b bg-main">
            <div v-if="!loading" class="text-lg font-bold">{{ $i18n.global.n(totalPortfolioValue, "currency") }}</div>
            <div v-else class="animated-pulse text-lg font-bold">...</div>
            <div class="text-xs txt-main">Total Portfolio Value</div>
        </div>
        <div class="w-full h-12 py-3 px-4 border-b bg-main text-white text-lg">Your Synths</div>
        <table class="text-white border-b bg-main w-full font-normal">
            <thead class="text-sm txt-main text-left">
                <th class="py-2 px-4">Synths</th>
                <th>Balance</th>
                <th>Price</th>
                <th>Status</th>
                <th></th>
            </thead>
            <tbody class="border-t bg-main text-base">
                <tr v-for="(synth, key) in lspPortfolio" :key="key" class="border-b bg-main basic-hover">
                    <td class="px-4 py-2 font-semibold flex">
                        <img src="@/assets/images/zombie.png" class="w-6 h-6" />
                        &nbsp;{{ synth.symbol }}
                    </td>
                    <td>{{ ethers.utils.formatEther(synth.balance) }}</td>
                    <td>{{ $i18n.global.n(synth.price, "currency") }}</td>
                    <td>
                        <div v-if="!synth.status">
                            <span class="text-white">Live</span>
                        </div>
                        <div v-else>
                            <span class="txt-main">Expired</span>

                            <s-button
                                color="linear-gradient(180deg, #F77FA0 0%, #DA4CAB 100%)"
                                button-styles="w-auto text-xs text-white px-2 pb-0.5 m-auto ml-0 font-bold"
                            >
                                <template #buttonTitle> Settle </template>
                            </s-button>
                        </div>
                    </td>
                    <td>
                        <router-link :to="{ name: 'Synths', params: { synth: synth.symbol } }">
                            <img src="@/assets/images/arrow-right.svg" class="cursor-pointer" />
                        </router-link>
                    </td>
                </tr>
                <table-loader target="mobile" :loading="loading" />
            </tbody>
        </table>
    </div>
</template>

<script>
import { computed, ref } from "vue"
import { ethers } from "ethers"
import { useSynthsSDK } from "@/composables/useSynthsSDK"
import SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue"
import TableLoader from "@/components/TableLoader.vue"

const filter_string = ref("");

export default {
    name: "Portfolio",
    components: {
        "s-button": SynthsRoundedButton,
        "table-loader": TableLoader,
    },
    setup() {
        const { loading, lspPortfolio, totalSynthsMinted, totalPortfolioValue } = useSynthsSDK()


        return {
           loading: computed(() => loading.value),
           lspPortfolio: computed(() => { 
               if (!loading.value) {
                    if (filter_string.value !== "") {
                        return lspPortfolio.value.filter((item) => item.symbol.toLowerCase().includes(filter_string.value.toLowerCase()))
                    } else return lspPortfolio.value
               }
            }),
           totalPortfolioValue: computed(() => { if (!loading.value) return totalPortfolioValue.value }),
           totalSynthsMinted: computed(() => { if (!loading.value) return totalSynthsMinted.value }),
        }
    },
    methods: {
        filter(event) {
            filter_string.value = event.target.value
        },
    },
}
</script>

<style scoped></style>
