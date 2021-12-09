<template>
  <div
    class="bg-opacity-30 backdrop-blur-lg flex items-center justify-center fixed inset-0"
    @click="$emit('close')"
  >
    <div class="rounded-lg flex flex-col items-start shadow-2xl p-4 absolute w-[340px] bg-[#252562] shadow-xl">
      <div
        class="
                    justify-between
                    font-semibold
                    text-base
                    leading-5
                    relative
                    text-white
                    not-italic
                    pt-0
                "
      >
        <div
          class="
                        header
                        flex-none
                        order-none
                        font-semibold
                        text-base
                        mx-0
                        text-white
                        not-italic
                    "
        >
          Run Simulation
        </div>
        <div
          class="
                        flex-none
                        order-1
                        text-sm
                        mx-0
                        mt-0.5
                        font-normal
                        static
                        not-italic
                        text-purpleLighter
                    "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat, felis ac posuere bibendum, augue velit facilisis nisl, eget lobortis dolor magna nec ante. Sed sit amet felis est.
        </div>
      </div>

      <s-button
        buttonStyles="wallet-btn px-4 py-3 my-2 text-sm font-semibold mr-4"
      >
        <template #buttonTitle> Start Simulation </template>
      </s-button>

      <div
        class="
                    flex-none
                    order-none
                    text-xs
                    leading-4
                    mt-2
                    left-0
                    not-italic
                    w-auto
                    font-normal
                    bottom-5
                    text-[#CBCBFF]
                "
      >
        <router-link to="#">
          Learn More about simulations
          <span class="inline-flex text-white">
                        &nbsp;<img src="@/assets/icons/externalLink.svg" />
                    </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue"
export default {
  name: "Simulator",
  components: {
    "s-button": SynthsRoundedButton,
  },
  methods: {
    close() {
      console.log("sadfasdf")
      this.$emit("close")
    },
  },
}
</script>

<style scoped>

</style>
