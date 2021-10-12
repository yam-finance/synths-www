<template>
  <div class="markets">
    <SynthsSingleChart class="h-[200px]"/>
    <br>
    <SynthsLongShortChart class="h-[400px] "/>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from "vue";

import SynthsSingleChart from '../../components/charts/SynthsSingleChart.vue'
import SynthsLongShortChart from '../../components/charts/SynthsLongShortChart.vue'

export default defineComponent({
  name: "Markets",
  components: {
    SynthsSingleChart,
    SynthsLongShortChart
  },
})
</script>