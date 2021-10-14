<template>
    <div class="markets bg-light mb-10 pb-10 visible md:invisible lg:visible">
        <div class="w-full h-12 py-3 px-6 border-b bd-main">
            <span class="text-sm txt-main">Information</span>
        </div>

        <div class="grid grid-cols-1 2xl:grid-cols-2 border-b bd-main">
            <div class="px-6 py-4 border-r bd-main">
                <div class="w-full">
                    <div class="inline">
                        <img src="../../assets/images/zombie.png" class="h-6 inline mb-0.5">
                        <p class="font-semibold text-base inline ml-2">Sushi APY</p>
                    </div>
                    <div class="text-right mr-2 inline float-right">
                        <span class="rounded-xl bg-main px-4 py-2 font-normal text-sm txt-main">
                            Expiring 21st April
                            <img src="../../assets/images/arrow-down.png" class="h-6 inline mb-0.5 cursor-pointer">
                        </span>
                    </div>
                </div>

                <p class="txt-sub-light mt-8">
                    Sushi APY Long and Short tokens track an index
                    consisting of ten stocks that are most commented on
                    r/wallstreetbets. The initial Index constituents are
                    selected based on data from swaggystocks.com.
                </p>

                <div class="grid grid-cols-3 mt-4">
                    <div>
                        <p class="text-sm inline mr-1 md:mr-2">Learn More</p>
                        <img src="../../assets/images/external-link.svg" class="inline cursor-pointer">
                    </div>
                    <div>
                        <p class="text-sm inline mr-1 md:mr-2">Tutorial</p>
                        <img src="../../assets/images/external-link.svg" class="inline cursor-pointer">
                    </div>
                    <div>
                        <p class="text-sm inline mr-0.5 md:mr-2">Connect Address</p>
                        <img src="../../assets/images/external-link.svg" class="inline cursor-pointer">
                    </div>
                </div>

                <div class="grid grid-cols-2">
                    <div class="grid grid-cols-2">
                        <div class="p-2 pl-0">
                            <s-button class="mt-2.5" :buttonStyles="'!w-[83px] !text-xs'" :color="'linear-gradient(180deg, #C8FF2D 0%, #008C0E 100%)'">
                                <template #buttonTitle>
                                    Go Long
                                </template>
                            </s-button>
                        </div>
                        <div class="p-2 pr-0">
                            <s-button class="mt-2.5" :buttonStyles="'!w-[83px] !text-xs'" :color="'linear-gradient(180deg, #FF6ACC 0%, #DC1919 100%)'">
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
                        <div class="w-full h-12 py-3 px-6 border-b bd-main cursor-pointer" :class="{'bg-mint' : option.id==selected_option}">
                            <span class="font-semibold">{{option.title}}</span>
                            <img src="../../assets/images/arrow-right-pink.png" v-if="option.id==1" class="inline float-right w-6 h-6 cursor-pointer">
                            <img src="../../assets/images/arrow-right.svg" v-else class="inline float-right w-6 h-6 cursor-pointer">
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
    </div>
</template>

<script lang="ts">
    import { defineComponent, inject, computed } from "vue";
    import SynthsRoundedButton from "../buttons/SynthsRoundedButton.vue";
    import SynthsSingleChart from '../charts/SynthsSingleChart.vue'
    import SynthsLongShortChart from '../charts/SynthsLongShortChart.vue'

    let options = [
        {
            id: 1,
            title: "Mint a position",
            slug: "mint"
        },
        {
            id: 2,
            title: "Redeem your position",
            slug: "redeem"
        },
        {
            id: 3,
            title: "Settle",
            slug: "settle"
        },
    ];

    let selected_option = 0;

    export default defineComponent({
        name: "Markets",
        components: {
            SynthsSingleChart,
            SynthsLongShortChart,
            's-button': SynthsRoundedButton,
        },
        data() {
            return {
                options,
                selected_option
            };
        },
    })
</script>
<style scoped lang="scss">
    @media (min-width: 1280px){
        .card{
            @apply bg-blueDark;
        }
    }
</style>
