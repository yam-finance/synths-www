<template>
  <div>
    <LineChart class="chart-container" ref="lineRef" :chartData="testData" :options="options"/>
  </div>
</template>

<script>
import {computed, defineComponent, ref, onMounted} from 'vue';
import {LineChart} from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: {LineChart},
  setup() {
    const lineRef = ref(null);

    const options = ref({
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        alignToPixels:true,
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          },
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: false,
            beginAtZero: true
          },
        }],
      },
      transitions: {
        show: {
          animations: {
            x: {
              from: 0
            },
            y: {
              from: 0
            }
          }
        },
        hide: {
          animations: {
            x: {
              to: 0
            },
            y: {
              to: 0
            }
          }
        }
      },
      elements: {
        point:{
          radius: 0
        }
      }
    });

    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(45, 255, 66, 0.2)');
    gradient.addColorStop(1, 'rgba(45, 255, 66, 0)');


    const testData = computed(() => ({
      labels: '# of Votes',
      datasets: [{
        data: [40, 10, 5, 60,0],
        backgroundColor: gradient,
        borderColor: 'white',
        borderWidth: 2
      }]
    }));

    // value we've specified above.

    return {testData, options, lineRef};
  },
});
</script>
<style lang="scss">
.chart-container{
  position: relative;
  height: 100%;
}
</style>