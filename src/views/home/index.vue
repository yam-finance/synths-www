<template>
  <div class="home bg-light">
    <Header />
    <SideBar />
    <TabContent />
    <Footer />
  </div>

</template>

<script lang="ts">
import SideBar from "./components/SideBar.vue"
import Header from "./components/Header.vue"
import TabContent from "./components/TabContent.vue"
import Footer from "./components/Footer.vue"

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
