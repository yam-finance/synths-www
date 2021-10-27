<template>
    <div class="home bg-main">
        <Header />
        <main>
            <div class="w-full" style="display: -webkit-inline-box">
                <div>
                    <SideBar />
                </div>
                <div class="hidden md:flex" style="width: calc(100vw - 256px)">
                    <router-view />
                </div>
                <div class="block md:hidden" style="height: calc(100vh - 64px)">
                    <router-view />
                </div>
            </div>
        </main>
        <Footer />
        <Notification v-if="true" />
    </div>
</template>

<script lang="ts">
import SideBar from "@/components/layout/SideBar.vue"
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"
import Notification from "@/components/layout/Notification.vue"

export default {
    name: "Home",
    components: {
        SideBar,
        Header,
        Footer,
        Notification,
    },
}
</script>
