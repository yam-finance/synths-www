<template>
    <div ref="chartContainer" class="chart-container">
        <canvas ref="chart"></canvas>
    </div>
</template>

<script>
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle,
} from "chart.js"

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
)

export default {
    props: {
        chartData: {
            type: Array,
            default: () => [],
        },
        labels: {
            type: Array,
            default: () => [],
        },
    },
    mounted() {
        const canvas = this.$refs.chart
        const container = this.$refs.chartContainer
        const ctx = canvas.getContext("2d")
        const data = {
            labels: [],
            datasets: [],
        }
        if (this.labels) {
            data.labels = this.labels
        }

        this.chartData.forEach((item) => {
            data.datasets.push(item)
        })

        canvas.height = container.clientHeight
        canvas.width = container.clientWidth

        let myChart = new Chart(ctx, {
            type: "line",
            data: data,
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
                scales: {
                    y: {
                        display: false, // Hide Y axis labels
                    },
                    x: {
                        display: false, // Hide X axis labels
                    },
                },
                elements: {
                    point: {
                        radius: 0,
                    },
                    line: {
                        borderJoinStyle: "round",
                    },
                },
                layout: {
                    padding: 5,
                },
            },
        })
    },
}
</script>
<style lang="scss">
.chart-container {
    position: relative;
    height: 100%;
    width: 100%;
}
</style>
