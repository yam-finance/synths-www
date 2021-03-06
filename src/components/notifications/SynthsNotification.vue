<template>
    <transition name="fade">
        <div class="sn bg-blueDark rounded-lg grid gap-2 items-center">
            <div class="sn-title">{{ title }}</div>
            <div class="sn-icon">
                <component :is="getIcon(iconStyle)" class="w-[20px] h-[20px]" />
            </div>
            <div v-show="link" class="sn-link w-4 h-4">
                <a :href="link" target="_blank">
                    <external-link-svg class="w-[16px] h-[16px]" />
                </a>
            </div>
            <div class="sn-close w-4 h-4">
                <x-svg class="cursor-pointer basic-hover w-[18px] h-[18px]" @click="closeNotification" />
            </div>
            <div class="sn-text" v-html="content"></div>
        </div>
    </transition>
</template>

<script>
import infoCircleSvg from "@/assets/icons/info-circle.svg"
import successCircleSvg from "@/assets/icons/success-circle.svg"

export default {
    name: "NotificationItem",
    props: {
        index: Number,
        title: String,
        iconStyle: Number, // 0 - info, 1 - success, 2 - error
        link: String,
        content: String,
    },
    data: () => ({
        show: true,
    }),
    beforeUnmount() {
        this.show = false
    },
    methods: {
        getIcon(style) {
            if (style === 0) return infoCircleSvg

            if (style === 1) return successCircleSvg
        },
        closeNotification() {
            this.$emit("close")
        },
    },
}
</script>
<script setup>
import xSvg from "@/assets/images/x.svg"
import externalLinkSvg from "@/assets/images/external-link.svg"
</script>

<style scoped lang="scss">
.sn {
    box-shadow: 0 16px 16px -4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.1);
    grid-template-columns: auto 1fr auto auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
        "icon title link close"
        "text text text text";

    &-title {
        grid-area: title;
    }
    &-icon {
        grid-area: icon;
    }
    &-link {
        grid-area: link;
    }
    &-close {
        grid-area: close;
    }

    &-text {
        grid-area: text;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
    @apply opacity-0;
}
</style>
