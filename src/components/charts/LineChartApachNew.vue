<template>
    <div ref="chartContainer" class="chart-container relative w-full min-h-[224px]">
        <v-chart :option="option" :loading="isLoading" autoresize />
    </div>
</template>

<script>
import "echarts"
import * as echarts from "echarts/core"
import ECharts from "vue-echarts"

export default {
    components: {
        "v-chart": ECharts,
    },
}
</script>
<script setup>
import { ref, computed, defineProps } from "vue"
const props = defineProps({
    chartData: {
        type: Array,
        default: () => [],
    },
    chartBounds: {
        type: Array,
        default: () => [],
    },
    tooltipStyle: {
        type: Object,
        default: () => ({}),
    },
})
// reactive state
const chartContainer = ref(null)
const isLoading = ref(false)

// functions that mutate state and trigger updates
const getChartWidth = computed(() => {
    console.log("rea")
    if (chartContainer.value) {
        console.log("resize", chartContainer.value)
        return chartContainer.value.clientWidth
    }
    return 1
})
const compileChartData = computed(() => {
    let result = []
    props.chartData.forEach((item) => {
        result.push({
            type: "line",
            smooth: true,
            lineStyle: item.lineStyle,
            showSymbol: false,
            areaStyle: item.areaStyle,
            emphasis: {
                itemStyle: {
                    opacity: 0,
                },
            },
            data: item.data,
        })
    })
    return result
})
const compileChartBounds = computed(() => {
    let result = []
    props.chartBounds.forEach((item) => {
        result.push({
            type: "line",
            smooth: true,
            lineStyle: {
                width: 1,
                type: "dashed",
                color: item.lineColor,
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0,
            },
            endLabel: {
                distance: 0,
                offset: [getChartWidth.value * -1 + 15, -15],
                show: true,
                position: "top",
                color: "white",
                fontSize: 12,
                formatter: item.text,
                rich: {
                    blueText: {
                        color: "#7171B2",
                    },
                    whiteText: {
                        color: "white",
                    },
                },
            },
            emphasis: {
                itemStyle: {
                    opacity: 0,
                },
            },
            data: new Array(12).fill(item.data),
        })
    })
    return result
})
const option = computed(() => {
    let option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "line",
            },
            formatter: () => null,
        },
        grid: {
            left: 5,
            top: 0,
            right: 5,
            bottom: 0,
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                boundary: {
                    show: false,
                },
            },
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
            },
        ],
    }

    option.series = [...compileChartData.value, ...compileChartBounds.value]
    option.tooltip.axisPointer.lineStyle = props.tooltipStyle

    return option
})
</script>
