<template>
    <div v-if="isLongShort">
        <div v-if="isXl" class="slsc-wrapper rounded-xl grid items-start grid">
            <div class="slsc__stats-item !rounded-tl-xl">
                <p class="flex items-end font-semibold text-2xl">$323k</p>
                <p class="text-xs text-purpleLight">Long Token Liquidity</p>
            </div>
            <div class="slsc__stats-item">
                <p class="flex items-end font-semibold text-2xl">$323k</p>
                <p class="text-xs text-purpleLight">Long Token Liquidity</p>
            </div>
            <div class="slsc__stats-item">
                <p class="flex items-end font-semibold text-2xl">$323k</p>
                <p class="text-xs text-purpleLight">Long Token Liquidity</p>
            </div>
            <div class="slsc__stats-item !rounded-bl-xl">
                <p class="text-xs text-purpleLight">Buy on Balancer</p>
                <div>
                    <s-button class="mt-2.5 py-2 px-2 long rounded-3xl" :button-styles="'!text-xs'" :color="BtnColor">
                        <template #buttonTitle>{{ textTitle }} </template>
                    </s-button>
                </div>
            </div>
            <div class="slsc__charts h-full flex flex-col justify-between">
                <div class="slsc__charts-stats flex justify-start w-full">
                    <div class="slsc__charts-stat">
                        <p class="flex items-end font-semibold leading-5">
                            <span class="text-2xl">42%</span>
                            <svg
                                id="arrow-up-right"
                                class="w-4 h-4 stroke-current text-[#2DFF42]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 17L17 7"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7 7H17V17"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <span class="text-xs text-purpleLight">15%</span>
                        </p>
                        <p class="text-[10px] text-purpleLight">xSUSHI APY</p>
                    </div>
                    <div class="slsc__charts-stat">
                        <p class="flex items-end font-semibold leading-5">
                            <span class="text-2xl">42%</span>
                            <svg
                                id="arrow-up-right"
                                class="w-4 h-4 stroke-current text-[#2DFF42]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 17L17 7"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7 7H17V17"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <span class="text-xs text-purpleLight">15%</span>
                        </p>
                        <p class="text-[10px] text-purpleLight">xSUSHI APY</p>
                    </div>
                    <div class="slsc__charts-stat">
                        <p class="flex items-end font-semibold leading-5">
                            <span class="text-2xl">42%</span>
                            <svg
                                id="arrow-up-right"
                                class="w-4 h-4 stroke-current text-[#2DFF42]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 17L17 7"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7 7H17V17"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <span class="text-xs text-purpleLight">15%</span>
                        </p>
                        <p class="text-[10px] text-purpleLight">xSUSHI APY</p>
                    </div>
                    <div class="slsc__charts-stat_date text-purpleLight text-[10px] ml-auto self-start">
                        14 April - 21 April
                    </div>
                </div>
                <p class="slsc__charts__upper-bound border-b border-[#3E3E6B] text-[10px] pb-1 mt-4 mb-4 mb-auto">
                    <span class="text-purpleLight">Upper bound</span> $300
                </p>
                <line-chart class="h-full overflow-auto my-3 relative" :labels="labels" :chart-data="chartData" />
                <p class="slsc__charts__upper-bound border-t border-[#3E3E6B] text-[10px] pt-1 mt-4">
                    <span class="text-purpleLight">Lower bound</span> $300
                </p>
            </div>
        </div>
        <div v-else class="rounded-xl p-0 items-start">
            <div class="slsc__charts h-full flex flex-col justify-between">
                <div class="slsc__charts-stats flex justify-between">
                    <div class="slsc__charts-stat">
                        <p class="flex items-end font-semibold leading-5">
                            <span class="text-2xl">42%</span>
                            <svg
                                id="arrow-up-right"
                                class="w-4 h-4 stroke-current text-[#2DFF42]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 17L17 7"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7 7H17V17"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <span class="text-xs text-purpleLight">15%</span>
                        </p>
                        <p class="text-[10px] text-purpleLight">xSUSHI APY</p>
                    </div>
                    <div class="slsc__charts-stat">
                        <p class="flex items-end font-semibold leading-5">
                            <span class="text-2xl">42%</span>
                            <svg
                                id="arrow-up-right"
                                class="w-4 h-4 stroke-current text-[#2DFF42]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 17L17 7"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7 7H17V17"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <span class="text-xs text-purpleLight">15%</span>
                        </p>
                        <p class="text-[10px] text-purpleLight">xSUSHI APY</p>
                    </div>
                </div>

                <line-chart
                    class="h-full overflow-auto my-3 relative w-full"
                    :labels="labels"
                    :chart-data="chartData"
                />
                <div class="flex justify-between">
                    <div class="slsc__charts-stat">
                        <p class="flex items-end font-semibold leading-5">
                            <span class="text-2xl">42%</span>
                            <svg
                                id="arrow-up-right"
                                class="w-4 h-4 stroke-current text-[#2DFF42]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 17L17 7"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7 7H17V17"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <span class="text-xs text-purpleLight">15%</span>
                        </p>
                        <p class="text-[10px] text-purpleLight">xSUSHI APY</p>
                    </div>
                    <div class="flex items-center gap-1 !rounded-bl-xl">
                        <div class="flex items-center">
                            <s-button class="py-2 px-2 long rounded-3xl" :button-styles="'!text-xs'" :color="BtnColor">
                                <template #buttonTitle>{{ textTitle }} </template>
                            </s-button>
                        </div>
                        <p class="text-xs text-purpleLight">On Balancer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="ssc-wrapper bg-blueDark rounded-xl p-4 grid gap-y-2.5 items-start">
        <div class="ssc__stats justify-self-start">
            <p class="flex items-end font-semibold leading-5">
                <span>42%</span>
                <svg
                    id="arrow-up-right"
                    class="w-4 h-4 stroke-current text-[#2DFF42]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <span class="text-xs text-purpleLight">15%</span>
            </p>
            <p class="text-[10px] text-purpleLight">xSUSHI APY</p>
        </div>
        <div
            class="
                sc__buttons
                justify-self-end
                flex
                items-start
                justify-between
                font-semibold
                w-full
                lg:w-[70%]
                max-w-[200px]
                bg-[#19193F]
                p-1
                rounded-lg
                text-[10px]
            "
        >
            <div
                v-for="item in filterButtons"
                :key="item"
                class="
                    sc__buttons
                    cursor-pointer
                    text-purpleLight
                    hover:text-black
                    rounded
                    hover:bg-white
                    w-auto
                    py-0.5
                    px-2
                "
            >
                {{ item }}
            </div>
        </div>
        <line-chart class="sc__charts h-full overflow-auto relative" :labels="labels" :chart-data="chartData" />
    </div>
</template>

<script>
import LineChart from "@/components/charts/LineChart.vue"
import SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue"

export default {
    name: "SynthsChart",
    components: {
        LineChart,
        "s-button": SynthsRoundedButton,
    },
    props: ["textTitle", "BtnColor", "isLongShort"],
    data: () => ({
        filterButtons: ["1H", "1D", "1W", "1M", "1Y"],
        labels: [12, 25, 1, 5, 20, 3],
        chartData: [
            {
                backgroundColor: "#FFFFFF",
                borderWidth: 3,
                tension: 0.4,
                fill: false,
                borderColor: "#FFFFFF",
                data: [12, 25, 1, 5, 20, 3],
            },
            {
                backgroundColor: "green",
                borderWidth: 3,
                tension: 0.4,
                fill: false,
                borderColor: "green",
                data: [12, 25, 1, 5, 5, 3],
            },
        ],
    }),
    computed: {},
}
</script>
<script setup>
import { computed } from "vue"
import { globalStore } from "@/composables/global"

const { state, isXl } = globalStore()
</script>

<style scoped lang="scss">
.sc {
    &__charts {
        grid-area: chart;
    }

    &__buttons {
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
    }
}

.slsc {
    &-wrapper {
        grid-template-columns: 20% 80%;
        grid-template-rows: repeat(4, 1fr);
        gap: 4px;
        grid-template-areas:
            ". chart"
            ". chart"
            ". chart"
            ". chart";
    }

    &__stats-item {
        @apply bg-blueDark rounded p-4 h-full flex flex-col justify-center min-w-[90px];
        box-shadow: 0 16px 16px -4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.1);

        p {
            @apply mb-1.5;
        }
    }

    &__charts {
        @apply bg-blueDark rounded-xl xl:rounded-l p-4;

        box-shadow: 0 16px 16px -4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.1);

        &-stat {
            @apply mr-8;
        }
    }
}

.ssc {
    &-wrapper {
        grid-template-columns: repeat(2, auto);
        grid-template-areas:
            ". ."
            "chart chart";
        box-shadow: 0 16px 16px -4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.1);
    }
}
</style>
