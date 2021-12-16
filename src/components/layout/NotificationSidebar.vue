<template>
    <transition name="slide">
        <div
            v-if="isNotificationOpen"
            class="notification-wrapper bg-main fixed top-0 right-0 h-full w-full z-[1000]"
            @click="toggleNotificationOpen"
        >
            <div
                class="
                    notification
                    bg-main
                    box-content
                    border-l
                    fixed
                    top-0
                    right-0
                    h-full
                    w-full
                    md:w-[240px]
                    px-4
                    box-border
                "
                @click.stop=""
            >
                <x-svg
                    class="notification-close basic-hover ml-auto mt-5 cursor-pointer w-[24px] h-[24px]"
                    @click="toggleNotificationOpen"
                />
                <h2 class="font-semibold mb-2">Notification</h2>
                <div v-if="notifications.length" class="notification-content">
                    <notification
                        v-for="(item, index) in notifications"
                        :key="item.title"
                        class="notification-content__item p-2 mb-2"
                        :icon-style="item.style"
                        :title="item.title"
                        :link="item.link"
                        :content="item.content"
                        :index="index"
                        @close="deleteNotification(index)"
                    />
                </div>
                <div v-else class="notification-content text-center mt-20">
                    <p class="text-purpleLight">Nothing here</p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import SynthsNotification from "@/components/notifications/SynthsNotification.vue"
import xSvg from "@/assets/images/x.svg"

export default {
    name: "NotificationLayout",
    components: {
        notification: SynthsNotification,
        xSvg,
    },
}
</script>
<script setup>
import { globalStore } from "@/composables/global"

const { state } = globalStore()
const { toggleNotificationOpen } = globalStore()
const { deleteNotification } = globalStore()

let notifications = state.notifications
let isNotificationOpen = state.isNotificationOpen
</script>

<style scoped lang="scss">
.notification {
    &-wrapper {
        backdrop-filter: blur(5px);
        background: rgba(#11112f, 0.1);
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: 50ms ease;
    .notification {
        transition: 50ms ease;
    }
}

.slide-enter-from,
.slide-leave-to {
    .notification {
        @apply right-[-300px];
    }
}
</style>
