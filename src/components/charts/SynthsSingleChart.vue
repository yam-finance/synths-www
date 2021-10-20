<template>
    <div class="ssc-wrapper bg-blueDark rounded-xl p-4 grid gap-y-2.5 items-start">
        <div class="ssc__stats justify-self-start">
            <p class="flex items-end font-semibold leading-5">
                <span>42%</span>
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
        <div
            class="
                ssc__buttons
                justify-self-end
                flex
                items-start
                justify-between
                font-semibold
                w-[70%]
                max-w-[186px]
                bg-[#19193F]
                p-1
                rounded-lg
                text-[10px]
            "
        >
            <div
                class="
                    ssc__buttons-item
                    cursor-pointer
                    text-purpleLight
                    hover:text-black
                    rounded
                    hover:bg-white
                    w-auto
                    py-0.5
                    px-2
                "
                v-for="item in filterButtons"
                :key="item"
            >
                {{ item }}
            </div>
        </div>
        <line-chart
            class="ssc__charts h-full overflow-auto relative"
            :labels="labels"
            :chartData="chartData"
        />
    </div>
</template>

<script>
import LineChart from "@/components/charts/LineChart.vue"

export default {
    name: "SynthsSingleChart",
    components: {
        LineChart,
    },
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
}
</script>

<style scoped lang="scss">
.ssc {
    &-wrapper {
        grid-template-columns: repeat(2, auto);
        grid-template-areas:
            ". ."
            "chart chart";
        box-shadow: 0px 16px 16px -4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    &__charts {
        grid-area: chart;
    }

    &__buttons {
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
    }
}
</style>
