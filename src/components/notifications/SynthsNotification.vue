<template>
    <transition name="fade">
        <div class="sn bg-blueDark rounded-lg grid gap-2 items-center">
            <div class="sn-title">{{ title }}</div>
            <div class="sn-icon">
                <img :src="getIcon(iconStyle)" alt="Notification Status" />
            </div>
            <div v-show="link" class="sn-link w-4 h-4">
                <a :href="link" target="_blank">
                    <external-link class="w-[12px] h-[12px]" />
                </a>
            </div>
            <div class="sn-close w-4 h-4">
                <x-svg class="cursor-pointer basic-hover w-[24px] h-[24px]" @click="closeNotification" />
            </div>
            <div class="sn-text" v-html="content"></div>
        </div>
    </transition>
</template>

<script>
import xSvg from "@/assets/images/x.svg"
import externalLink from "@/assets/images/external-link.svg"

export default {
    name: "NotificationItem",
    components: {
        xSvg,
        externalLink,
    },
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
            if (style === 0) return infoCircle

            if (style === 1) return successCircle
        },
        closeNotification() {
            this.$emit("close")
        },
    },
}
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
