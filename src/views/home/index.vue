<template>
  <div class="home bg-light">
    <Header />
    <SideBar />
    <TabContent />
    <Footer />
  </div>

</template>

<script lang="ts">
  import SideBar from "../../components/Layout/SideBar.vue"
  import Header from "../../components/Layout/Header.vue"
  import TabContent from "../../components/Layout/TabContent.vue"
  import Footer from "../../components/Layout/Footer.vue"

  export default {
    name: "Home",
    components: {
      TabContent,
      SideBar,
      Header,
      Footer,
    },
  }
</script>
