<template>
  <div class="home bg-main">
    <Header />
    <main>
      <div class="w-full" style="display: -webkit-inline-box">
          <div>
            <SideBar/>
          </div>
          <div class="hidden md:block" style="width: calc(100vw - 256px - 400px)">
            <router-view/>
          </div>
          <div class="w-96 mr-4 border-l bd-main hidden md:block">

          </div>
      </div>
    </main>
    <Footer />
  </div>

</template>

<script lang="ts">
  import SideBar from "../../components/layout/SideBar.vue"
  import Header from "../../components/layout/Header.vue"
  import Footer from "../../components/layout/Footer.vue"

  export default {
    name: "Home",
    components: {
      SideBar,
      Header,
      Footer
    },
  }
</script>
