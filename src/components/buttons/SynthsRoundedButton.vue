<template>
  <button
    class="rounded-xl py-4 w-full font-bold hover:brightness-110 active:brightness-75"
    @click="$emit('btn-click')"
  >
    <slot name="buttonTitle"></slot>
  </button>
</template>

<script>
export default {
  name: "SynthsRoundedButton",
  props: {
    color: {
      type: String,
      default: "linear-gradient(180deg, #F77FA0 0%, #DA4CAB 100%)",
    },
    buttonStyles: {
      type: String,
      default: "",
    },
  },
  emits: ["btn-click"],
}
</script>

<style scoped>
button {
  background: v-bind(color);
}
</style>
