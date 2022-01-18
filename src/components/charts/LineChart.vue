<template>
    <div ref="chartContainer" class="chart-container relative w-full min-h-[224px]">
        <Chart
            :size="{ width: myChart.width, height: myChart.height }"
            :data="chartData"
            :margin="margin"
            :direction="direction"
        >
            <template #layers>
                <Area :data-keys="['name', 'value1']" type="monotone" :area-style="{ fill: 'url(#grad)' }" />
                <Line
                    :data-keys="['name', 'value1']"
                    type="monotone"
                    :dot-style="{ stroke: 'rgba(255,255,255,0)' }"
                    :line-style="{ stroke: '#f80202' }"
                />
                <defs>
                    <linearGradient id="grad" gradientTransform="rotate(90)">
                        <stop offset="0%" stop-color="#f80202" stop-opacity="1" />
                        <stop offset="100%" stop-color="white" stop-opacity="0.4" />
                    </linearGradient>
                </defs>

                <Area
                    :data-keys="['name', 'value2']"
                    type="monotone"
                    :dot-style="false"
                    :area-style="{ fill: 'url(#grad1)' }"
                />
                <Line
                    :data-keys="['name', 'value2']"
                    type="monotone"
                    :dot-style="false"
                    :line-style="{ stroke: '#eeff00' }"
                />
                <defs>
                    <linearGradient id="grad1" gradientTransform="rotate(90)">
                        <stop offset="0%" stop-color="#eeff00" stop-opacity="1" />
                        <stop offset="100%" stop-color="white" stop-opacity="0.4" />
                    </linearGradient>
                </defs>
            </template>
        </Chart>
    </div>
</template>

<script>
import { Chart, Area, Grid, Line } from "vue3-charts"

export default {
    components: {
        Chart,
        Area,
        Line,
    },
    props: {
        chartData: {
            type: Array,
            default: () => [],
        },
    },
    data: () => ({
        container: null,
        myChart: {
            width: 0,
            height: 0,
        },
    }),
    watch: {
        "container.clientWidth": {
            deep: true,
            handler() {
                this.myChart.height = this.container.clientHeight
                this.myChart.width = this.container.clientWidth
            },
        },
    },
    mounted() {
        this.container = this.$refs.chartContainer

        this.myChart.height = this.container.clientHeight
        this.myChart.width = this.container.clientWidth
    },
}
</script>
<script setup>
import { ref } from "vue"

const direction = ref("horizontal")
const margin = ref({
    left: -30,
    top: 5,
    right: -10,
    bottom: -10,
})
const axis = ref({
    primary: {
        type: "band",
    },
    secondary: {
        domain: ["dataMin", "dataMax + 100"],
        type: "linear",
        ticks: 8,
    },
})
</script>
<style>
.axis {
    display: none;
}
circle {
    display: none;
}
</style>
