<template>
    <nav class="h-12 w-full fixed bottom-0 left-0 z-20 text-white flex flex-col lg:flex-row border-t bg-main bg-main">
        <div v-if="isMd" class="block">
            <div class="flex overflow-hidden absolute w-64 h-12 border-r bg-main">
                <div class="flex items-center px-4 cursor-pointer" @click="goToBlockLink">
                    <green-dot-svg class="h-3 w-[10px]" />
                    <div class="text-xs font-normal translate-y-px px-2">{{ blockNumber }}</div>
                    <external-link-svg class="w-[12px] h-[12px]" />
                </div>
            </div>
            <div class="flex absolute w-96 mr-4 right-0 p-2 text-right h-12 lg:border-l bg-main">
                <div class="flex absolute right-2">
                    <twitter-svg class="w-[24px] h-[24px] mx-2 my-auto cursor-pointer" />
                    <discord-svg class="w-[24px] h-[24px] mx-2 my-auto cursor-pointer" />
                </div>
            </div>
        </div>

        <transition
            enter-active-class="transition ease-in-out duration-100"
            leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <div v-if="isMenuOpen" class="transition ease-in-out">
                <ul
                    class="
                        overflow-hidden
                        w-full
                        my-auto
                        py-1
                        text-lg
                        my-4
                        pt-8
                        text-left
                        fixed
                        bottom-8
                        z-30
                        block
                        lg:hidden
                        bg-main
                    "
                >
                    <span class="px-4 txt-main">Menu</span>
                    <li
                        v-for="(tab, key) in tabs"
                        :key="key"
                        class="min-w-max cursor-pointer border-t bg-main px-4 py-3"
                        @click="isMenuOpen = !isMenuOpen"
                    >
                        <router-link :to="'/' + tab.to">
                            <span>{{ tab.title }}</span>
                        </router-link>
                    </li>
                </ul>

                <ul
                    class="
                        overflow-hidden
                        w-full
                        my-auto
                        py-1
                        text-lg
                        my-4
                        text-left
                        fixed
                        bottom-60
                        z-30
                        block
                        lg:hidden
                        bg-main
                    "
                >
                    <span class="px-4 txt-main">Help</span>
                    <li class="min-w-max cursor-pointer border-t bg-main px-4 py-3">
                        <span>Documentation</span>
                    </li>
                    <li class="min-w-max cursor-pointer border-t border-b bg-main px-4 py-3">
                        <span>Tutorials</span>
                    </li>
                </ul>

                <div class="w-full flex fixed bottom-96 mb-2 lg:hidden px-2 py-3 bg-main z-30">
                    <div class="flex">
                        <twitter-svg class="w-[24px] h-[24px] mx-2 my-auto cursor-pointer" />
                        <discord-svg class="w-[24px] h-[24px] mx-2 my-auto cursor-pointer" />
                    </div>
                    <span
                        class="flex px-2 py-1.5 font-semibold text-purpleLight text-sm cursor-pointer relative"
                        @click="handleLanguageMenu"
                    >
                        English
                        <dropdown-svg
                            :class="{ 'rotate-180': isLangDropDownOpen }"
                            class="mx-2 ml-1 my-auto h-4 w-[24px]"
                        />
                        <ul
                            v-if="isLangDropDownOpen"
                            v-click-away="closePopup"
                            class="
                                my-auto
                                p-2
                                text-sm text-left
                                absolute
                                bottom-8
                                left-0
                                bg-light
                                rounded-xl
                                shadow-lg
                                z-[10000]
                            "
                        >
                            <li class="min-w-max cursor-pointer p-1">
                                <span>Spanish</span>
                            </li>
                        </ul>
                    </span>
                    <span
                        class="flex px-4 py-1.5 font-semibold text-purpleLight text-sm cursor-pointer relative"
                        @click="handleSupportMenu"
                    >
                        Help
                        <dropdown-svg
                            :class="{ 'rotate-180': isHelpDropDownOpen }"
                            class="mx-2 ml-1 my-auto h-4 w-[24px]"
                        />
                        <ul
                            v-if="isHelpDropDownOpen"
                            v-click-away="closePopup"
                            class="
                                overflow-hidden
                                my-auto
                                p-2
                                text-sm text-left
                                absolute
                                bottom-9
                                bg-light
                                rounded-xl
                                shadow-lg
                            "
                        >
                            <li class="min-w-max cursor-pointer p-1">
                                <span>Documentation</span>
                            </li>
                            <li class="min-w-max cursor-pointer p-1">
                                <span>Tutorials</span>
                            </li>
                        </ul>
                    </span>
                </div>

                <div class="blur h-full w-full top-0 fixed"></div>
            </div>
        </transition>

        <div v-if="!isLg" class="flex absolute w-full right-0 p-2 text-right h-12 lg:border-l bg-main">
            <div class="flex cursor-pointer ml-3">
                <burger-button :is-open="isMenuOpen" @click="isMenuOpen = !isMenuOpen" />
            </div>
            <div class="flex overflow-hidden ml-auto">
                <div class="flex justify-center items-center px-3 cursor-pointer" @click="goToBlockLink">
                    <green-dot-svg class="h-3 w-[10px] py-0.5" />
                    <span class="text-xs my-auto font-normal px-1">{{ blockNumber }}</span>
                </div>
            </div>
            <s-button
                v-if="!$auth.isAuthenticated.value"
                button-styles="wallet-btn px-4 py-2 my-auto text-sm font-normal"
                @click="isModalVisible = true"
            >
                <template #buttonTitle> Connect Wallet </template>
            </s-button>
            <div>
                <template v-if="$auth.isAuthenticated.value">
                    <span
                        v-if="$auth.isAuthenticated.value"
                        class="flex px-4 py-1.5 text-sm cursor-pointer"
                        @click="connectButtonHandler"
                    >
                        <metamask-svg class="mx-2 my-auto h-4 w-4" />
                        {{ formatAddress(web3.account) }}
                        <dropdown-svg
                            :class="{ 'rotate-180': isWalletDropDownOpen }"
                            class="mx-2 my-auto h-4 w-[24px]"
                        />
                        <div v-if="isWalletDropDownOpen" class="blur h-full w-full top-0 right-0 fixed"></div>

                        <ul
                            v-show="isWalletDropDownOpen"
                            v-click-away="closePopup"
                            class="
                                overflow-hidden
                                my-auto
                                w-full
                                shadow-lg
                                p-2
                                text-sm text-left
                                absolute
                                bottom-0
                                right-0
                                bg-light
                                rounded-t-xl
                                z-[10000]
                            "
                        >
                            <li class="min-w-max cursor-pointer p-1">
                                <span class="text-sm text-purpleLight">Network</span>
                            </li>
                            <li class="min-w-max cursor-pointer p-1">
                                <label class="container">
                                    Mainnet
                                    <input
                                        name="networks"
                                        type="radio"
                                        :checked="web3.network.key == 1"
                                        class="form-radio"
                                    />
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li class="min-w-max cursor-pointer p-1">
                                <label class="container">
                                    Polygon
                                    <input
                                        name="networks"
                                        type="radio"
                                        :checked="web3.network.key == 137"
                                        class="form-radio"
                                    />
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li class="min-w-max cursor-pointer p-1">
                                <label class="container">
                                    Rinkeby
                                    <input
                                        name="networks"
                                        type="radio"
                                        :checked="web3.network.key == 4"
                                        class="form-radio"
                                    />
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li class="divider_dropdown_wallet"></li>
                            <li class="min-w-max cursor-pointer p-1">
                                <span class="wallet_actions">
                                    <img src="@/assets/icons/play-circle.png" class="w-[12px] h-[20px]" /> &nbsp; Run
                                    Simulation
                                </span>
                            </li>
                            <li class="min-w-max cursor-pointer p-1">
                                <span class="wallet_actions" @click="doCopy(web3.account)">
                                    <copy-svg class="w-[16px] h-[16px]" />&nbsp; Copy Address
                                </span>
                            </li>
                            <li class="min-w-max cursor-pointer p-1">
                                <span class="wallet_actions">
                                    <external-link-svg class="w-[16px] h-[16px]" />&nbsp;
                                    <a class="ml-1" :href="web3.etherscanlink" target="_blank">Etherscan</a>
                                </span>
                            </li>
                            <li
                                class="min-w-max cursor-pointer p-1"
                                @click="handleLogout(), (isWalletDropDownOpen = false)"
                            >
                                <span class="wallet_actions">
                                    <disconnect-svg class="w-[16px] h-[16px]" />&nbsp; Disconnect
                                </span>
                            </li>
                        </ul>
                    </span>
                </template>
            </div>
        </div>
        <teleport to="body">
            <ConnectWallet v-show="isModalVisible" @close="isModalVisible = false" @connect="handleConnect" />
        </teleport>
    </nav>
</template>

<script>
const featuredSynth = "dpi-2x"
let tabs = [
    {
        id: 1,
        title: "Explore",
        to: "explore",
    },
    {
        id: 2,
        title: "Synths",
        to: "synths/" + featuredSynth,
    },
    {
        id: 3,
        title: "Portfolio",
        to: "portfolio",
    },
]

import SynthBurgerButton from "@/components/elements/SynthBurgerButton"
import SynthsRoundedButton from "../buttons/SynthsRoundedButton"

export default {
    name: "Footer",
    components: {
        "burger-button": SynthBurgerButton,
        "s-button": SynthsRoundedButton,
    },
    data() {
        return {
            isMenuOpen: false,
            tabs,
            isHelpDropDownOpen: false,
            isLangDropDownOpen: false,
            isWalletDropDownOpen: false,
        }
    },
    methods: {
        selectTab(item) {
            this.activeTab = item.id
        },
        closePopup(e) {
            // this.isHelpDropDownOpen = false
            // this.isLangDropDownOpen = false
            // this.isWalletDropDownOpen = false
            // this.isModalVisible = false;
        },
        connectButtonHandler() {
            this.isHelpDropDownOpen = false
            this.isLangDropDownOpen = false
            this.isWalletDropDownOpen = !this.isWalletDropDownOpen
        },
        handleLanguageMenu() {
            this.isHelpDropDownOpen = false
            this.isWalletDropDownOpen = false
            this.isLangDropDownOpen = !this.isLangDropDownOpen
        },
        handleSupportMenu() {
            this.isLangDropDownOpen = false
            this.isWalletDropDownOpen = false
            this.isHelpDropDownOpen = !this.isHelpDropDownOpen
        },
    },
}
</script>

<script setup>
import twitterSvg from "@/assets/images/socials/twitter.svg"
import discordSvg from "@/assets/images/socials/discord.svg"
import greenDotSvg from "@/assets/images/green-dot.svg"
import externalLinkSvg from "@/assets/images/external-link.svg"
import dropdownSvg from "@/assets/images/dropdown.svg"
import metamaskSvg from "@/assets/icons/metamask.svg"
import copySvg from "@/assets/icons/copy.svg"
import disconnectSvg from "@/assets/icons/disconnect.svg"

import { useWeb3 } from "@/composables/useWeb3"
import ConnectWallet from "@/components/ConnectWallet.vue"
import { globalStore } from "@/composables/global"
import useClipboard from "@/composables/useClipboard"

import { computed, ref } from "vue"

const { login, web3, logout } = useWeb3()
const isModalVisible = ref(false)

const { toggleNotificationOpen } = globalStore()
const { addNewNotifications } = globalStore()

const { state } = globalStore()

const blockNumber = state.blockNumber

async function handleConnect(connector) {
    isModalVisible.value = false
    await login(connector)
}
async function handleLogout() {
    await logout()
    // emit('close');
}
function formatAddress(address) {
    return address.slice(0, 1) + "..." + address.slice(-3)
}

function goToBlockLink() {
    window.open(`https://etherscan.io/block/${blockNumber.value}`, "_blank")
}

const { toClipboard } = useClipboard()
async function doCopy(address) {
    try {
        await toClipboard(address)

        addNewNotifications(
            {
                style: 1,
                link: null,
                title: "Success!",
                content: "Copied",
            },
            false
        )
    } catch (e) {
        // TODO: Can't catch error
        addNewNotifications(
            {
                style: 0,
                link: null,
                title: "Error!",
                content: "Please try again or reload page",
            },
            false
        )
        console.error(e)
    }
}

const { isMd, isLg } = globalStore()
</script>

<style scoped lang="scss">
.image_icon {
    @apply w-[16px] h-[16px];
}
.wallet_actions {
    /* font-family: Open Sauce Sans; */
    font-style: normal;
    font-weight: normal;

    @apply my-[2px] mx-0 flex-grow-0 order-1 flex-none cursor-pointer text-white leading-[14px] text-[14px] inline-flex;

    img {
        @apply mt-[-2px] w-[20px] mr-[4px];
    }
}

.container {
    @apply select-none text-[14px] w-[25px] h-[25px] pl-[32px] relative block;
}

.t_network {
    font-family: Open Sauce Sans;
    font-style: normal;
    @apply my-[8px] mx-0 flex-grow-0 order-normal flex-none text-[#7171b2] leading-[12px] text-[12px] font-semibold;
}

.container input {
    @apply absolute opacity-0 h-[0] w-[0];
}

/* Create a custom checkbox */
.checkmark {
    transform: scale(0.8) translateY(-4px);
    @apply absolute top-0 left-0 rounded-[8px] border-[#7171b2] border bg-[#14143a] cursor-pointer w-[25px] h-[25px];
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
    @apply bg-[#515fff];
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    @apply absolute hidden;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
    @apply block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    @apply left-[9px] top-[5px] w-[5px] h-[10px]  border-white border-t-0 border-r-[3px] border-b-[3px] border-l-0;
}

.divider_dropdown_wallet {
    @apply my-[8px] mx-0 flex-grow-0 order-4 flex-none self-stretch	border-[#303060];
}

.blur {
    background: rgba(17, 17, 47, 0.1);
    backdrop-filter: blur(5px);
}
</style>
