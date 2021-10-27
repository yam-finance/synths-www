<template>
    <transition name="slide">
        <div v-if="isNotificationOpen" class="notification-wrapper bg-main">
            <div v-click-away="toggleNotification" class="notification bg-main">
                <img
                    class="notification-close basic-hover"
                    src="@/assets/images/x.svg"
                    alt="Close Icon"
                    @click="toggleNotification"
                />
                <h2>Notification</h2>
                <div class="notification-content">
                    <div
                        class="notification-content__item"
                        :key="item.title"
                        v-for="item in notifications"
                    >
                        <div class="notification-content__item-title">{{ item.title }}</div>
                        <div class="notification-content__item-icon">
                            <img :src="getIcon(item.style)" alt="Notification Status" />
                        </div>
                        <div class="notification-content__item-link">
                            <a :href="item.link">
                                <img src="@/assets/images/external-link.svg" alt="External Link" />
                            </a>
                        </div>
                        <div class="notification-content__item-text" v-html="item.content"></div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
// style
// 0 - info
// 1 - success
// 2 - error
import infoCircle from "@/assets/icons/info-circle.svg"
import successCircle from "@/assets/icons/success-circle.svg"

export default {
    name: "Notification",
    methods: {
        getIcon(style) {
            if (style === 0) return infoCircle

            if (style === 1) return successCircle
        },
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

    &-content {
        &__item {
            @apply bg-blueDark rounded-lg p-2 mb-2 grid gap-2 items-center;
            box-shadow: 0 16px 16px -4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.1);
            grid-template-columns: auto 1fr auto;
            grid-template-rows: repeat(2, auto);
            grid-template-areas:
                "icon title link"
                "text text text";

            &-title {
                grid-area: title;
            }
            &-icon {
                grid-area: icon;
            }
            &-link {
                @apply w-4 h-4;
                grid-area: link;

                img {
                    @apply w-full h-full;
                }
            }

            &-text {
                grid-area: text;
            }
        }
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
