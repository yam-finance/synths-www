<template>
    <div
        @click="$emit('close')"
        class="modal-backdrop backdrop-blur-lg flex items-center justify-center fixed inset-0"
    >
        <div class="modal rounded-lg flex flex-col items-start shadow-2xl p-4 absolute">
            <img class="wallet_gif absolute w-40" src="@/assets/images/wallet.gif" />

            <div
                class="
                    title
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
                        connect_wallet_header
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
                    connect_wallet_container
                    rounded-2xl
                    flex flex-wrap
                    items-start
                    mt-2
                    shadow-inner
                "
            >
                <div
                    @click="$emit('connect', 'injected')"
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
                            static
                            text-white
                            not-italic
                            wallet_name
                            
                        "
                    >
                        Metamask
                    </div>
                </div>
                <div
                    @click="$emit('connect', 'walletconnect')"
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
                            wallet_name
                        "
                    >
                        WalletConnect &nbsp;
                    </div>
                </div>
                <div
                    @click="$emit('connect', 'fortmatic')"
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
                            wallet_name
                        "
                        @click="$emit('connect', 'fortmatic')"
                    >
                        Fortmatic
                    </div>
                </div>
                <div
                    @click="$emit('connect', 'portis')"
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
                            wallet_name
                        "
                    >
                        Portis
                    </div>
                </div>
            </div>
            <div
                class="
                    learn_more_box
                    flex-none
                    order-none
                    text-xs
                    leading-4
                    mt-2
                    left-0
                    not-italic
                    w-auto
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
            console.log("sadfasdf")
            this.$emit("close")
        },
        saveWalletType() {
            this.$emit("saveWalletType")
        },
    },
}
</script>
<style>
.modal-backdrop {
    background-color: rgba(0, 0, 0, 0.3);
}

.wallet_gif {
    right: -15%;
    top: -25%;
}

.wallet_name {
    left: 33.23px;
    top: 8.5px;
    font-family: inherit;
}
.wallet_box {
    background: linear-gradient(180deg, rgba(143, 143, 255, 0.2) 0%, rgba(143, 143, 255, 0) 100%);
    box-shadow: inset 0px 0px 4px rgba(143, 143, 255, 0.2);
}

.modal {
    width: 340px;
    left: 50vw;
    top: 50vh;
    transform: translate(-50%, -50%);
    background-color: rgba(37, 37, 98, 1);
    box-shadow: 0px 32px 64px -8px rgba(0, 0, 0, 0.1);
}

.connect_wallet_header {
    font-family: inherit;
}

.learn_more_box {
    bottom: 20px;
    font-family: inherit;
    font-weight: normal;
    color: rgba(203, 203, 255, 1);
}

.connect_wallet_info {
    left: 16px;
    top: 44px;
    font-family: inherit;
    font-weight: normal;
    line-height: 160%;
    color: rgba(203, 203, 255, 1);
}

.connect_wallet_container {
    width: 310px;
    left: 16px;
    top: 96px;
    background-color: rgba(29, 29, 82, 1);
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1);
}
.title {
    font-family: inherit;
}
</style>
