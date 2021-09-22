<template>
  <div class="home">
    <img class="m-auto max-w-xs" alt="logo" :src="synthsLogo" />
    <SynthsNew class="mt-5" msg="Welcome to Yam Synths!" />
  </div>
</template>

<script lang="ts">
import SynthsNew from "./components/SynthsNew.vue"
import synthsLogo from "../../assets/images/logo.png"

export default {
  name: "Home",
  data: function () {
    return {
      synthsLogo: synthsLogo,
    }
  },
  components: {
    SynthsNew,
  },
}
</script>