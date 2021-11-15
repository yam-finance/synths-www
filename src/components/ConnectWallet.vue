<template>
    <div
        class="bg-opacity-30 backdrop-blur-lg flex items-center justify-center fixed inset-0"
	@click.prevent="$emit('close')"
    >
        <div class="rounded-lg flex flex-col items-start shadow-2xl p-4 absolute w-[340px] bg-[#252562] shadow-xl"
		@click.stop=""
	>
            <img class="absolute w-40 -top-1/4 -right-1/4" src="@/assets/images/wallet.gif" />

            <div
                class="
                    justify-between
                    font-semibold
                    text-base
                    leading-5
                    relative
                    text-white
                    not-italic
                    pt-0
                "
            >
                <div
                    class="
                        header
                        flex-none
                        order-none
                        font-semibold
                        text-base
                        mx-0
                        text-white
                        not-italic
                    "
                >
                    Connect your wallet
                </div>
                <div
                    class="
                        flex-none
                        order-1
                        h-10
                        text-sm
                        mx-0
                        mt-0.5
                        font-normal
                        static
                        not-italic
                        w-56
                        text-purpleLighter
                    "
                >
                    Start using Yam Synths with your favourite wallet
                </div>
            </div>

            <div
                class="
                    rounded-2xl
                    flex flex-wrap
                    items-start
                    mt-2
                    shadow-inner
                    w-[310px]
                    bg-[#1D1D52]
                    left-4
                    top-96
                    shadow-md
                "
            >
                <div
                    class="
                        wallet_box
                        rounded-xl
                        cursor-pointer
                        flex flex-row
                        items-center
                        justify-start
                        flex-none
                        order-none
                        h-8
                        text-xs
                        m-2
                        mr-0
                        py-2
                        pl-2
                        pr-4
                        static
                        top-0
                        left-0
                        hover:brightness-150
                    "
                    @click="$emit('connect', 'injected')"
                >
                    <img src="@/assets/icons/metamask.svg" />
                    <div
                        class="
                            cursor-pointer
                            flex-none
                            order-1
                            h-4
                            text-xs
                            leading-4
                            my-0
                            mx-2
                            static
                            text-white
                            not-italic
                            left-8
                            top-2
                        "
                    >
                        Metamask
                    </div>
                </div>
                <div
                    class="
                        wallet_box
                        rounded-xl
                        cursor-pointer
                        flex flex-row
                        items-center
                        justify-start
                        flex-none
                        order-none
                        h-8
                        text-xs
                        m-2
                        mr-0
                        py-2
                        pl-2
                        pr-4
                        static
                        top-0
                        left-0
                        hover:brightness-150
                    "
                    @click="$emit('connect', 'walletconnect')"
                >
                    <img src="@/assets/icons/walletconnect.png" />
                    <div
                        class="
                            cursor-pointer
                            flex-none
                            order-1
                            h-4
                            text-xs
                            leading-4
                            my-0
                            mx-2
                            static
                            text-white
                            not-italic
                            left-8
                            top-2
                        "
                    >
                        WalletConnect &nbsp;
                    </div>
                </div>
                <div
                    class="
                        wallet_box
                        rounded-xl
                        cursor-pointer
                        flex flex-row
                        items-center
                        justify-start
                        flex-none
                        order-none
                        h-8
                        text-xs
                        mx-2
                        mr-2
                        mb-2
                        py-2
                        pl-2
                        pr-4
                        static
                        top-0
                        left-0
                        hover:brightness-150
                    "
                    @click="$emit('connect', 'fortmatic')"
                >
                    <img src="@/assets/icons/formatic.png" />
                    <div
                        class="
                            cursor-pointer
                            flex-none
                            order-1
                            h-4
                            text-xs
                            leading-4
                            my-0
                            mx-2
                            static
                            text-white
                            not-italic
                            left-8
                            top-2
                        "
                        @click="$emit('connect', 'fortmatic')"
                    >
                        Fortmatic
                    </div>
                </div>
                <div
                    class="
                        wallet_box
                        rounded-xl
                        cursor-pointer
                        flex flex-row
                        items-center
                        justify-start
                        flex-none
                        order-none
                        h-8
                        text-xs
                        mr-2
                        mb-2
                        py-2
                        pl-2
                        pr-4
                        static
                        top-0
                        left-0
                        hover:brightness-150
                    "
                    @click="$emit('connect', 'portis')"
                >
                    <img src="@/assets/icons/portis.png" />
                    <div
                        class="
                            cursor-pointer
                            flex-none
                            order-1
                            h-4
                            text-xs
                            leading-4
                            my-0
                            mx-2
                            static
                            text-white
                            not-italic
                            left-8
                            top-2
                        "
                    >
                        Portis
                    </div>
                </div>
            </div>
            <div
                class="
                    flex-none
                    order-none
                    text-xs
                    leading-4
                    mt-2
                    left-0
                    not-italic
                    w-auto
                    bottom-5
                    font-normal
                    text-[#CBCBFF]
                "
            >
                <router-link to="#">
                    Not sure how connect wallet works?
                    <span class="inline-flex text-white">
                        Learn More &nbsp;<img src="@/assets/icons/externalLink.svg" />
                    </span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConnectWallet",
    methods: {
        close() {
            this.$emit("close")
        },
        saveWalletType() {
            this.$emit("saveWalletType")
        },
    },
}
</script>
<style scoped>
.wallet_box {
    background: linear-gradient(180deg, rgba(143, 143, 255, 0.2) 0%, rgba(143, 143, 255, 0) 100%);
    box-shadow: inset 0px 0px 4px rgba(143, 143, 255, 0.2);
}
</style>
