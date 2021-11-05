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
        <notification-layout v-if="true" />
        <div class="fade-notification">
            <notification
                class="notification-content__item p-2 mb-2"
                v-for="(item, index) in notifications"
                :key="item.title"
                :icon-style="item.style"
                :title="item.title"
                :link="item.link"
                :content="item.content"
                :index="index"
                @close="deleteNewNotification(index)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import SideBar from "@/components/layout/SideBar.vue"
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"
import NotificationLayout from "@/components/layout/NotificationSidebar.vue"
import SynthsNotification from "@/components/notifications/SynthsNotification.vue"
import { globalStore } from "@/composables"

export default {
    name: "Home",
    setup() {
        const { state } = globalStore()
        const { deleteNewNotification } = globalStore()

        const notifications = state.newNotifications
        return {
            notifications,
            deleteNewNotification,
        }
    },
    components: {
        SideBar,
        Header,
        Footer,
        NotificationLayout,
        notification: SynthsNotification,
    },
}
</script>
<style lang="scss">
.fade-notification {
    @apply absolute top-[70px] right-[20px] max-w-[300px];
    z-index: 999;
 }
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
