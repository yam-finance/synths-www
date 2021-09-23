<template>
  <div class="home">
    <img class="m-auto max-w-xs" alt="logo" :src="synthsLogo" />
    <SynthsNew class="mt-5" :msg="'Welcome ' + userDetails.name " />
  </div>
</template>

<script lang="ts">
import SynthsNew from "../../components/SynthsNew.vue"
import synthsLogo from "../../assets/images/logo.png"
import { defineComponent, inject, computed } from "vue";
export default defineComponent({
  name: "Home",
  data: function () {
    return {
      synthsLogo: synthsLogo,
    }
  },
  components: {
    SynthsNew,
  },
  setup() {
    const userDetails: any = inject("userDetails");
    return {
      userDetails
    };
  }
})
</script>