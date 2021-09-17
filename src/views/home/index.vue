<template>
  <div class="home">
    <img class="m-auto" alt="logo" :src="require('@/assets/images/logo.png')" />
    <HelloWorld class="mt-10" msg="Welcome to Yam Synths!" />
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/hello-world.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>
