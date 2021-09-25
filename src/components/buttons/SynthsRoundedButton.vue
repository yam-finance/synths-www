<template>
  <button class="rounded-xl py-4 w-full font-bold" @click="$emit('btn-click')">
    <slot name="buttonTitle"></slot>
  </button>
</template>

<script>
export default {
  name: "SynthsRoundedButton",
  emits: ['btn-click'],
  data: () => ({
    title: "Mint",
    color: 'linear-gradient(180deg, #F77FA0 0%, #DA4CAB 100%)'
  })
}
</script>

<style scoped>
button {
  background: v-bind(color);
}
</style>