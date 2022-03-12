<template>
    <v-chart
        ref="chart"
        class="chart-container relative w-full min-h-[224px]"
        :option="option"
        :loading="isLoading"
        autoresize
    />
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
import { ref, computed, defineProps, onMounted } from "vue"
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

// chart state
const chart = ref(null)
const chartWidth = ref(null)
const chartContainer = ref(null)

const isLoading = ref(false)

//Chart resize
onMounted(() => {
    chartWidth.value = chart.value.getWidth()
})
window.addEventListener("resize", () => {
    if (chart.value) {
        chart.value.resize()
        chartWidth.value = chart.value.getWidth()
    }
})

// Chart Generator
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
                offset: [chartWidth.value * -1 + 15, -15],
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
