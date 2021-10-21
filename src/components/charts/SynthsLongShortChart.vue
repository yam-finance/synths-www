<template>
    <div class="slsc-wrapper rounded-xl p-4 grid items-start">
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
            <s-button
                class="mt-2.5 long"
                :buttonStyles="'py-3'"
                :color="'linear-gradient(180deg, #C8FF2D 0%, #008C0E 100%)'"
            >
                <template #buttonTitle> Go Long </template>
            </s-button>
        </div>
        <div class="slsc__charts h-full flex flex-col justify-between">
            <div class="slsc__charts-stats flex justify-start w-full">
                <div class="slsc__charts-stat">
                    <p class="flex items-end font-semibold leading-5">
                        <span class="text-2xl">42%</span>
                        <svg
                            class="w-4 h-4 stroke-current text-[#2DFF42]"
                            viewBox="0 0 24 24"
                            fill="none"
                            id="arrow-up-right"
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
                            class="w-4 h-4 stroke-current text-[#2DFF42]"
                            viewBox="0 0 24 24"
                            fill="none"
                            id="arrow-up-right"
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
                            class="w-4 h-4 stroke-current text-[#2DFF42]"
                            viewBox="0 0 24 24"
                            fill="none"
                            id="arrow-up-right"
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
            <p
                class="
                    slsc__charts__upper-bound
                    border-b border-[#3E3E6B]
                    text-[10px]
                    pb-1
                    mt-4
                    mb-4 mb-auto
                "
            >
                <span class="text-purpleLight">Upper bound</span> $300
            </p>
            <line-chart class="h-full overflow-auto my-3 relative" />
            <p class="slsc__charts__upper-bound border-t border-[#3E3E6B] text-[10px] pt-1 mt-4">
                <span class="text-purpleLight">Lower bound</span> $300
            </p>
        </div>
    </div>
</template>

<script>
import LineChart from "@/components/charts/LineChart.vue"
import SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue"

export default {
    name: "SynthsLongShortChart",
    components: {
        LineChart,
        "s-button": SynthsRoundedButton,
    },
}
</script>

<style scoped lang="scss">
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

    &__charts {
        grid-area: chart;
    }

    &__buttons {
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
    }

    &__stats-item {
        @apply bg-blueDark rounded p-4 h-full flex flex-col justify-center min-w-[90px];
        box-shadow: 0 16px 16px -4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.1);

        p {
            @apply mb-1.5;
        }
    }

    &__charts {
        @apply bg-blueDark rounded-r-xl rounded-l p-4;

        box-shadow: 0 16px 16px -4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.1);

        &-stat {
            @apply mr-8;
        }
    }
}
</style>
