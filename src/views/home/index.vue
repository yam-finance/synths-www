<template>
  <div class="home bg-main">
    <Header />
    <SideBar />
    <Footer />
  </div>

</template>

<script lang="ts">
  import SideBar from "../../components/Layout/SideBar.vue"
  import Header from "../../components/Layout/Header.vue"
  import Footer from "../../components/Layout/Footer.vue"

  export default {
    name: "Home",
    components: {
      SideBar,
      Header,
      Footer,
    },
  }
</script>
