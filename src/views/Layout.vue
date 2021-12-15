<template>
    <div class="home bg-main relative h-full overflow-auto" :class="{ '!overflow-hidden': isOverflowHidden }">
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
        <notification-layout />
        <div class="fade-notification fixed top-[70px] right-[20px] w-[300px] z-[999]">
            <notification
                v-for="(item, index) in notifications"
                :key="item.title"
                class="p-2 mb-2 sticky"
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

<script setup>
import { globalStore } from "../composables/global"
import { computed, onMounted } from "vue"
import SideBar from "@/components/layout/SideBar.vue"
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"
import NotificationLayout from "@/components/layout/NotificationSidebar.vue"
import Notification from "@/components/notifications/SynthsNotification.vue"

let { state } = globalStore()
let { deleteNewNotification } = globalStore()
let { addNewNotifications } = globalStore()

let notifications = state.newNotifications
let isNotificationOpen = state.isNotificationOpen

const isOverflowHidden = computed(() => {
    return isNotificationOpen
})
onMounted(() => {
    addNewNotifications({
        style: 0,
        link: "https://github.com/yam-finance/synths-www/issues/75",
        title: "Title1",
        content: "Transaction sent. Minting 8 Long & 8 Short with 4 ETH",
    })
})
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
