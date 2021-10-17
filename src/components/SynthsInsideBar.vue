<template>
  <div
      class="ssb-wrapper bg-[#4447BD] flex flex-col justify-start items-center py-16 px-8 max-w-[400px] max-h-full">

    <h2 class="text-[32px] mb-5 font-semibold">{{ title }}</h2>

    <h3 class="text-[#CBCBFF] text-sm mb-8 text-center">{{ subTitle }}</h3>

    <div class="ssb__costs mb-8 w-full">
      <slot name="costs"/>
    </div>

    <div class="ssb__order flex flex-col items-center" :class="{'flex-col-reverse': arrowReverse}">

      <div class="ssb__tokens grid grid-cols-2 gap-5">
        <div class="ssb__tokens-item bg-[#5356CD] py-4 px-[35px] rounded-lg text-center shadow--black"
             v-for="item in tokens"
             :key="item.title">
          <p class="font-bold text-xs pb-2.5"><span class="text-base">0</span> {{ item.title }}</p>
          <p class="text-[10px]">{{ item.subTitle }} 0 ETH</p>
        </div>
      </div>

      <img v-if="!arrowReverse" src="../assets/sidebarArrow.svg" class="my-2 max-w-[50%]" alt="">
      <img v-else src="../assets/sidebarArrowReverse.svg" class="my-2 max-w-[50%]" alt="">

      <div v-if="settle"
           class="ssb__settle bg-[#5356CD] py-4 px-[16px] rounded-lg text-center font-bold text-base p-4 shadow--black">
        <p>12 ETH</p>
      </div>
      <s-crypto-input v-else v-model:modelValue="input"/>

    </div>


    <s-button class="mt-8" @btn-click="buttonClick">
      <template #buttonTitle>
        {{ buttonName }}
      </template>
    </s-button>

  </div>
</template>

<script>
import  SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue";
import SynthsCryptoInput from "@/components/inputs/SynthsCryptoInput.vue";

export default {
  name: "SynthsSideBar",
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    buttonName: {
      type: String,
      default: ''
    },
    settle: {
      type: Boolean,
      default: false
    },
    arrowReverse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    's-button': SynthsRoundedButton,
    's-crypto-input': SynthsCryptoInput
  },
  inject: ['screen'],
  data: () => ({
    tokens: [
      {
        title: 'long tokens',
        subTitle: 'Valued at'
      },
      {
        title: 'short tokens',
        subTitle: 'Valued at'
      }
    ],
    input: '0'
  }),
  methods: {
    buttonClick() {
      console.log(this.input);
    }
  }
}
</script>

<style scoped lang="scss">
.shadow--black {
  box-shadow: 0 16px 16px -4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.1);
}
</style>
<style lang="scss">
.ssb {
  &__costs {
    & > p {
      @apply text-sm flex justify-between mb-2;
      & > span:nth-child(1) {
        @apply opacity-60;
      }

      & > span:nth-child(2) {
        @apply font-semibold opacity-100;
      }
    }

  }
}
</style>