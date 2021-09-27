<template>
  <div class="elements">
    <SynthsInsideBar :settle="true" :title="'Mint position'" :sub-title="'Deposit WETH collateral to mint Long and Short tokens of equal value'" :button-name="'Mint'">
      <template #costs>
        <hr class="bg-white opacity-10 mb-2"/>
        <p><span>ETH Expiry Price</span> <span>$3,200</span></p>
        <p><span>ETH Expiry Price</span> <span>$3,200</span></p>
        <p><span>ETH Expiry Price</span> <span>$3,200</span></p>
      </template>
    </SynthsInsideBar>
    <SynthsInsideBar :settle="false" :title="'Mint position'" :sub-title="'Deposit WETH collateral to mint Long and Short tokens of equal value'" :button-name="'Mint'"/>
    <SynthsInsideBar :settle="false" :title="'Mint position'" :sub-title="'Deposit WETH collateral to mint Long and Short tokens of equal value'" :button-name="'Mint'"/>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SynthsInsideBar from '../../components/SynthsInsideBar.vue'

export default defineComponent({
  name: "Home",
  components: {
    SynthsInsideBar,
  },
})
</script>