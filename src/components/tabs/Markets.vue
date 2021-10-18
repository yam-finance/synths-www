<template>
  <SynthsSingleChart class="h-[200px]"/>
  <br>
  <SynthsLongShortChart class="h-[400px] "/>

  <SynthsNew class="mt-5" :msg="'Welcome ' + userDetails.name "/>

  <SynthsSideBar :settle="true" :title="'Mint position'"
                 :sub-title="'Deposit WETH collateral to mint Long and Short tokens of equal value'"
                 :button-name="'Mint'">
    <template #costs>
      <hr class="bg-white opacity-10 mb-2"/>
      <p><span>ETH Expiry Price</span> <span>$3,200</span></p>
      <p><span>ETH Expiry Price</span> <span>$3,200</span></p>
      <p><span>ETH Expiry Price</span> <span>$3,200</span></p>
      <!-- -- Start of SDK Test -- --> 
      <button @click="connectTo('ugas-0921')">Switch to ugas-0921</button>
      <p v-if="loading"><span>Expiry Price in WEI</span> <span>loading</span></p>
      <p v-else><span>Expiry Price in WEI</span> <span>{{data.empState.expiryPrice}}</span></p>
      <!-- -- End of SDK Test -- -->
    </template>
  </SynthsSideBar>
  <SynthsSideBar :settle="false" :title="'Mint position'"
                 :sub-title="'Deposit WETH collateral to mint Long and Short tokens of equal value'"
                 :button-name="'Mint'"/>
  <SynthsSideBar :settle="false" :title="'Mint position'"
                 :sub-title="'Deposit WETH collateral to mint Long and Short tokens of equal value'"
                 :button-name="'Mint'"/>

</template>

<script lang="ts">
import SynthsSingleChart from "@/components/charts/SynthsSingleChart.vue";
import SynthsLongShortChart from "@/components/charts/SynthsLongShortChart.vue";
import SynthsSideBar from "@/components/SynthsInsideBar.vue";
import SynthsNew from "@/components/SynthsNew.vue";
import synthsLogo from "@/assets/images/logo.png";
import {inject} from "vue";

// SDK TEST
import { computed } from 'vue';
import { useSynthsSDK } from "../../stores/sdk-store";
import { providers } from "ethers";

export default {
  name: "Markets",
  components: {
    SynthsSingleChart,
    SynthsLongShortChart,
    SynthsSideBar,
    SynthsNew,
  },
  data: () => ({
    synthsLogo
  }),
  setup() {

    /* -- Start of SDK Test -- */
    /// @notice Synth SDK Init test
    const url = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
    const provider = new providers.JsonRpcProvider(url);
    const { connectTo, data, loading } = useSynthsSDK(provider);

    connectTo("upunks-0921");
    /* -- End of SDK Test -- */

    const userDetails: any = inject("userDetails");

    return {
      userDetails,
      loading,
      data,
      connectTo
    };
  }
}
</script>

<style scoped>

</style>
