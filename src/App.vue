<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/explore">Explore</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
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