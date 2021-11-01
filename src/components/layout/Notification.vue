<template>
    <transition name="slide">
        <div v-if="notifications && isNotificationOpen" class="notification-wrapper bg-main">
            <div v-click-away="toggleNotification" class="notification bg-main">
                <img
                    class="notification-close basic-hover"
                    src="@/assets/images/x.svg"
                    alt="Close Icon"
                    @click="toggleNotification"
                />
                <h2>Notification</h2>
                <div class="notification-content">
                    <notification
                        class="notification-content__item p-2 mb-2"
                        v-for="item in notifications"
                        :key="item.title"
                        :icon-style="item.style"
                        :title="item.title"
                        :link="item.link"
                        :content="item.content"
                    />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import SynthsNotification from "@/components/notifications/SynthsNotification.vue"

export default {
    name: "NotificationLayout",
    components: {
        notification: SynthsNotification,
    },
    methods: {
        toggleNotification() {
            this.toggleNotificationOpen()
        },
    },
}
</script>
<script setup>
import { globalStore } from "@/composables"

const { state } = globalStore()
const { toggleNotificationOpen } = globalStore()

let notifications = state.notifications
let isNotificationOpen = state.isNotificationOpen
</script>

<style scoped lang="scss">
h2 {
    @apply font-semibold mb-2;
}
.notification {
    @apply absolute top-0 right-0 h-full w-full md:w-[240px] px-4;
    &-wrapper {
        @apply absolute top-0 right-0 h-full w-full;
        z-index: 1000;
        backdrop-filter: blur(5px);
        background: rgba(#11112f, 0.1);
    }

    &-close {
        @apply ml-auto mt-5 cursor-pointer;
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
        right: -300px;
    }
}
</style>
