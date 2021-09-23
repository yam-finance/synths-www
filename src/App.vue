<template>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive } from "vue";
export default defineComponent({
  setup() {
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

    return { state };
  }
})
</script>