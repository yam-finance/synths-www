<template>
    <div class="home bg-main">
        <Header />
        <main>
            <div class="w-full content">
                <div>
                    <SideBar />
                </div>
                <div class="hidden md:flex content-desktop">
                    <router-view />
                </div>
                <div class="block md:hidden content-mobile">
                    <router-view />
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script lang="ts">
import SideBar from "@/components/layout/SideBar.vue"
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"

export default {
    name: "Home",
    components: {
        SideBar,
        Header,
        Footer,
    },
}
</script>
<style lang="scss">
.content {
    display: -webkit-inline-box;

    &-desktop {
        width: calc(100vw - 256px);
    }

    &-mobile {
        height: calc(100vh - 64px);
    }
}
</style>
