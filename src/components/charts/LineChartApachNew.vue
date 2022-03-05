<template>
    <div ref="chartContainer" class="chart-container overflow-auto relative w-full min-h-[224px]">
        <v-chart :option="option" group="radiance" :loading="isLoading" autoresize />
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
    props: {
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
    },
    data: () => ({
        isLoading: true,
    }),
    computed: {
        // parse props and convert it into array for Apache Charts
        option() {
            if (this.chartData.length && this.chartBounds.length) {
                let series = []
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
                this.chartData.forEach((item) => {
                    series.push({
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

                this.chartBounds.forEach((item) => {
                    series.push({
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
                            offset: [-(item.text.length * 8), -15],
                            show: true,
                            position: "top",
                            color: "white",
                            fontSize: 12,
                            formatter: item.text,
                        },
                        emphasis: {
                            itemStyle: {
                                opacity: 0,
                            },
                        },
                        data: new Array(12).fill(item.data),
                    })
                })

                option.series = series
                option.tooltip.axisPointer.lineStyle = this.tooltipStyle
                this.isLoading = false
                return option
            }

            this.isLoading = true
            return null
        },
    },
}
</script>
