<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref, onUnmounted } from "vue";

export default defineComponent({
  setup() {
    //Setup Simple Data
    const state = reactive({
      name: "John Doe",
      email: "john@gmail.com",
    });

    const updateUsername = (name: string) => {
      state.name = name;
    };

    const updateEmail = (email: string) => {
      state.email = email;
    };

    provide("userDetails", state);
    provide("updateUsername", updateUsername);
    provide("updateEmail", updateEmail);

    //Setup window resize watcher
    const screenWidth = ref<number | null>(null);

    const resizeHandler = () => {
      screenWidth.value = window.innerWidth;
    }

    window.addEventListener("resize", resizeHandler);

    onUnmounted(()=>{
      window.removeEventListener("resize", resizeHandler);
    });

    provide('screen', screenWidth);

    return { state, screenWidth };
  },


})
</script>