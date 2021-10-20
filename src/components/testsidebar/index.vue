<template>
    <div class="home">
        <img class="m-auto max-w-xs" alt="logo" :src="synthsLogo" />
        <SynthsNew class="mt-5" :msg="'Welcome ' + userDetails.name" />

        <SynthsSideBar
            :settle="true"
            :title="'Mint position'"
            :sub-title="'Deposit WETH collateral to mint Long and Short tokens of equal value'"
            :button-name="'Mint'"
        >
            <template #costs>
                <hr class="bg-white opacity-10 mb-2" />
                <p><span>ETH Expiry Price</span> <span>$3,200</span></p>
                <p><span>ETH Expiry Price</span> <span>$3,200</span></p>
                <p><span>ETH Expiry Price</span> <span>$3,200</span></p>
            </template>
        </SynthsSideBar>
        <SynthsSideBar
            :settle="false"
            :title="'Mint position'"
            :sub-title="'Deposit WETH collateral to mint Long and Short tokens of equal value'"
            :button-name="'Mint'"
        />
        <SynthsSideBar
            :settle="false"
            :title="'Mint position'"
            :sub-title="'Deposit WETH collateral to mint Long and Short tokens of equal value'"
            :button-name="'Mint'"
        />

        <SynthsSingleChart class="h-[200px]" />
        <br />
        <SynthsLongShortChart class="h-[400px]" />
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from "vue"

import SynthsSideBar from "@/components/SynthsInsideBar.vue"
import SynthsNew from "@/components/SynthsNew.vue"
import synthsLogo from "@/assets/images/logo.png"
import SynthsSingleChart from "@/components/charts/SynthsSingleChart.vue"
import SynthsLongShortChart from "@/components/charts/SynthsLongShortChart.vue"

export default defineComponent({
    name: "Home",
    components: {
        SynthsSingleChart,
        SynthsLongShortChart,
        SynthsSideBar,
        SynthsNew,
    },
    data: () => ({
        synthsLogo,
    }),
    setup() {
        const userDetails: any = inject("userDetails")

        return {
            userDetails,
        }
    },
})
</script>
