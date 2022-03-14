<template>
    <div ref="chartContainer" class="chart-container relative w-full h-full">
        <canvas id="myChart" ref="chart" />
    </div>
</template>

<script>
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
    data: () => ({
        canvas: null,
        container: null,
        myChart: null,
    }),
    watch: {
        "container.clientWidth": {
            deep: true,
            handler() {
                this.myChart.resize(this.container.clientWidth, this.container.clientHeight)
            },
        },
    },
    mounted() {
        this.canvas = this.$refs.chart
        this.container = this.$refs.chartContainer
        const ctx = this.canvas.getContext("2d")
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

        this.canvas.height = this.container.clientHeight
        this.canvas.width = this.container.clientWidth
    },
}
</script>
