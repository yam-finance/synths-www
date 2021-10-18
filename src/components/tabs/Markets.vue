<template>
    <div class="markets bg-light pb-10">
        <div class="w-full h-12 py-3 px-6 border-b bd-main">
            <span class="text-sm txt-main">Information</span>
        </div>

        <div class="grid grid-cols-1 2xl:grid-cols-2 border-b bd-main">
            <div class="px-6 py-4 border-r bd-main">
                <div class="w-full">
                    <div class="inline">
                        <img src="@/assets/images/zombie.png" class="h-6 inline mb-0.5">
                        <p class="font-semibold text-base inline ml-2">Sushi APY</p>
                    </div>
                    <div class="text-right mr-2 inline float-right">
                        <span class="rounded-xl bg-main px-4 py-2 font-normal text-sm txt-main">
                            Expiring 21st April
                            <img src="@/assets/images/arrow-down.png" class="h-6 inline mb-0.5 cursor-pointer">
                        </span>
                    </div>
                </div>

                <p class="text-[#CBCBFF] mt-8">
                    Sushi APY Long and Short tokens track an index
                    consisting of ten stocks that are most commented on
                    r/wallstreetbets. The initial Index constituents are
                    selected based on data from swaggystocks.com.
                </p>

                <div class="grid grid-cols-3 mt-4">
                    <div>
                        <p class="text-sm inline mr-1 md:mr-2">Learn More</p>
                        <img src="@/assets/images/external-link.svg" class="inline cursor-pointer">
                    </div>
                    <div>
                        <p class="text-sm inline mr-1 md:mr-2">Tutorial</p>
                        <img src="@/assets/images/external-link.svg" class="inline cursor-pointer">
                    </div>
                    <div>
                        <p class="text-sm inline mr-0.5 md:mr-2">Connect Address</p>
                        <img src="@/assets/images/external-link.svg" class="inline cursor-pointer">
                    </div>
                </div>

                <div class="grid grid-cols-2">
                    <div class="grid grid-cols-2">
                        <div class="p-2 pl-0">
                            <s-button class="mt-2.5" :buttonStyles="'!text-sm'" :color="'linear-gradient(180deg, #C8FF2D 0%, #008C0E 100%)'">
                                <template #buttonTitle>
                                    Go Long
                                </template>
                            </s-button>
                        </div>
                        <div class="p-2 pr-0">
                            <s-button class="mt-2.5" :buttonStyles="'!text-sm'" :color="'linear-gradient(180deg, #FF6ACC 0%, #DC1919 100%)'">
                                <template #buttonTitle>
                                    Go Short
                                </template>
                            </s-button>
                        </div>
                    </div>
                    <div class="my-auto">
                        <p class="txt-main text-sm mt-2 ml-2 cursor-pointer">Buy on Balancer</p>
                    </div>
                </div>
            </div>

            <div class="border-t bd-main">
                <div class="px-6 py-4">
                    <span class="text-sm txt-main">Manage your position</span>
                    <div class="grid grid-cols-3 xl:gap-4 mt-4">
                        <div class="card md:rounded-lg md:bg-light md:p-2">
                            <p class="text-lg font-bold inline">12</p>
                            <p class="text-xs txt-main inline ml-1">ETH</p>
                            <p class="text-xs txt-main">Collateral Used</p>
                        </div>
                        <div class="card md:rounded-lg md:bg-light md:p-2">
                            <p class="text-lg font-bold inline">120</p>
                            <p class="text-xs txt-main inline ml-1">SHI-A-L-1221</p>
                            <p class="text-xs txt-main">Longs Minted</p>
                        </div>
                        <div class="card md:rounded-lg md:bg-light md:p-2">
                            <p class="text-lg font-bold inline">120</p>
                            <p class="text-xs txt-main inline ml-1">SHI-A-S-1221</p>
                            <p class="text-xs txt-main">Short Tokens Minted</p>
                        </div>
                    </div>
                </div>

                <div class="w-full text-white border-t bd-main">
                    <div
                            v-for="(option, key) in options"
                            :key="key"
                            @click="selected_option=option.id"
                    >
                        <div class="w-full h-12 py-3 px-6 border-b bd-main cursor-pointer" :class="{'bg-[#4447BD]' : option.id==selected_option}">
                            <span class="font-semibold">{{option.title}}</span>
                            <img src="@/assets/images/arrow-right-pink.png" v-if="option.id==1" class="inline float-right w-6 h-6 cursor-pointer">
                            <img src="@/assets/images/arrow-right.svg" v-else class="inline float-right w-6 h-6 cursor-pointer">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-6 py-4 border-b md:border-0 bd-main">
            <SynthsSingleChart class="h-[200px]"/>
        </div>
        <div class="px-6 py-4 border-b md:border-0 bd-main hidden xl:block">
            <SynthsLongShortChart class="h-[400px] p-0"/>
        </div>
        <div class="px-6 py-4 border-b md:border-0 bd-main hidden xl:block">
            <SynthsLongShortChart class="h-[400px] p-0">
            </SynthsLongShortChart>
        </div>
        <div class="border-t bd-main">
            <div class="grid grid-cols-1 xl:grid-cols-2">
                <div class="px-6 py-4 pb-8 border-r border-b bd-main">
                    <p class="pb-4 text-lg font-semibold">Calculate returns at expiry</p>
                    <p class="text-sm txt-main pb-8">
                        Simulate your potential returns at expiry.
                        Edit the number of short or long tokens in your wallet.
                        with the chart to see your expected profit or loss
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="text-sm block pb-2">Long Tokens</label>
                            <input class="rounded-lg bg-main px-2 py-1 outline-none w-full" placeholder="0" name="long_token" id="long_token">
                        </div>
                        <div>
                            <label class="text-sm block pb-2">Short Tokens</label>
                            <input class="rounded-lg bg-main px-2 py-1 outline-none w-full" placeholder="0" name="short_token" id="short_token">
                        </div>
                    </div>

                    <div class="mt-2">
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox h-5 w-5">
                            <span class="ml-2 txt-main">Use wallet balances</span>
                        </label>
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
                    <div class="my-2">
                        <SynthsSingleChart class="rounded-t-md"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="min-w-[400px] hidden lg:block">
        <div
                v-for="(option, key) in options"
                :key="key"
                :class="(option.id==selected_option)?'h-full':''"
        >
            <SynthsSideBar
                    :settle="(option.slug=='Settle')?false:true"
                    :title="option.title"
                    :sub-title="option.description"
                    :button-name="option.slug"
                    v-if="option.id==selected_option"
            >
                <template #costs v-if="option.slug=='Settle'">
                    <hr class="bg-white opacity-10 mb-2"/>
                    <p><span>ETH Expiry Price</span> <span>$3,200</span></p>
                    <p><span>Long Token Expiry Price</span> <span>$120</span></p>
                    <p><span>Short Token Expiry Price</span> <span>$60</span></p>
                    <!-- -- Start of SDK Test -- --> 
                    <button @click="connectTo('ugas-0921')">Switch to ugas-0921</button>
                    <p v-if="loading"><span>Expiry Price in WEI</span> <span>loading</span></p>
                    <p v-else><span>Expiry Price in WEI</span> <span>{{data.empState.expiryPrice}}</span></p>
                    <!-- -- End of SDK Test -- -->
                </template>
            </SynthsSideBar>
        </div>
    </div>
</template>

<script lang="ts">
    import SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue";
    import SynthsSingleChart from "@/components/charts/SynthsSingleChart.vue";
    import SynthsLongShortChart from "@/components/charts/SynthsLongShortChart.vue";
    import SynthsSideBar from "@/components/SynthsInsideBar.vue";
    import SynthsNew from "@/components/SynthsNew.vue";
    import synthsLogo from "@/assets/images/logo.png";
    import {inject} from "vue";
    
    /* -- Start of SDK Test -- */
    import { computed } from 'vue';
    import { useSynthsSDK } from "../../stores/sdk-store";
    import { providers } from "ethers";
    /* -- End of SDK Test -- */

    let options = [
        {
            id: 1,
            title: "Mint a position",
            description: 'Deposit WETH collateral to mint Long and Short tokens of equal value',
            slug: "Mint"
        },
        {
            id: 2,
            title: "Redeem your position",
            description: 'Burn Long and Short tokens to receive your WETH collateral',
            slug: "Redeem"
        },
        {
            id: 3,
            title: "Settle",
            escription: 'Burn Long and Short tokens for ETH',
            slug: "Settle"
        },
    ];

    let selected_option = 0;

    export default {
        name: "Markets",
        components: {
            SynthsSingleChart,
            SynthsLongShortChart,
            's-button': SynthsRoundedButton,
            SynthsSideBar,
            SynthsNew,
        },
        data() {
            return {
                synthsLogo,
                options,
                selected_option
            };
        },
        setup() {
            /* -- Start of SDK Test -- */
            /// @notice Synth SDK Init test
            const url = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
            const provider = new providers.JsonRpcProvider(url);
            const { connectTo, data, loading } = useSynthsSDK(provider);

            connectTo("upunks-0921");
            /* -- End of SDK Test -- */
            const userDetails: any = inject("userDetails");
            return {
                userDetails
                /* -- Start of SDK Test -- */
                loading,
                data,
                connectTo
                /* -- End of SDK Test -- */
            };
        }
    }
</script>
<style scoped lang="scss">
    @media (min-width: 1280px){
        .card{
            @apply bg-blueDark;
        }
    }
</style>
