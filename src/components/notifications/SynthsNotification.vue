<template>
    <transition name="fade">
        <div class="sn">
            <div class="sn-title">{{ title }}</div>
            <div class="sn-icon">
                <img :src="getIcon(iconStyle)" alt="Notification Status" />
            </div>
            <div class="sn-link">
                <a :href="link">
                    <img src="@/assets/images/external-link.svg" alt="External Link" />
                </a>
            </div>
            <div class="sn-text" v-html="content"></div>
        </div>
    </transition>
</template>

<script>
import infoCircle from "@/assets/icons/info-circle.svg"
import successCircle from "@/assets/icons/success-circle.svg"

export default {
    name: "NotificationItem",
    props: {
        title: String,
        iconStyle: Number,
        // 0 - info
        // 1 - success
        // 2 - error
        link: String,
        content: String,
    },
    data: () => ({
        show: true,
    }),
    methods: {
        getIcon(style) {
            if (style === 0) return infoCircle

            if (style === 1) return successCircle
        },
    },
    beforeUnmount() {
        this.show = false
    },
}
</script>

<style scoped lang="scss">
.sn {
    @apply bg-blueDark rounded-lg grid gap-2 items-center;
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
</style>
