<template>
    <nav class="h-12 w-full fixed bottom-0 left-0 z-20 text-white flex flex-col lg:flex-row border-t bg-main bg-main">
        <div class="hidden md:block">
            <div class="flex overflow-hidden absolute w-64 h-12 border-r bg-main">
                <div class="flex items-center px-4 cursor-pointer" @click="goToBlockLink">
                    <img src="@/assets/images/green-dot.svg" class="" />
                    <div class="text-xs font-normal translate-y-px px-2">{{ blockNumber }}</div>
                    <img src="@/assets/images/external-link.svg" class="" />
                </div>
            </div>
            <div class="flex absolute w-96 mr-4 right-0 p-2 text-right h-12 lg:border-l bg-main">
                <div class="flex absolute right-2">
                    <img src="@/assets/images/socials/twitter.svg" class="mx-2 my-auto cursor-pointer" />
                    <img src="@/assets/images/socials/discord.svg" class="mx-2 my-auto cursor-pointer" />
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
                        <img src="@/assets/images/socials/twitter.svg" class="mx-2 my-auto cursor-pointer" />
                        <img src="@/assets/images/socials/discord.svg" class="mx-2 my-auto cursor-pointer" />
                    </div>
                    <span
                        class="flex px-2 py-1.5 font-semibold text-purpleLight text-sm cursor-pointer relative"
                        @click="handleLanguageMenu"
                    >
                        English
                        <img
                            src="@/assets/images/dropdown.svg"
                            :class="{ 'rotate-180': isLangDropDownOpen }"
                            class="mx-2 ml-1 my-auto h-4"
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
                        <img
                            src="@/assets/images/dropdown.svg"
                            :class="{ 'rotate-180': isHelpDropDownOpen }"
                            class="mx-2 ml-1 my-auto h-4"
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

        <div class="flex absolute w-full right-0 p-2 text-right h-12 lg:border-l bg-main lg:hidden">
            <div class="flex cursor-pointer ml-3">
                <burger-button :is-open="isMenuOpen" @click="isMenuOpen = !isMenuOpen" />
            </div>
            <div class="flex overflow-hidden ml-auto">
                <div class="flex justify-center items-center px-3 cursor-pointer" @click="goToBlockLink">
                    <img src="@/assets/images/green-dot.svg" class="h-3 py-0.5" />
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
                        <img src="@/assets/icons/metamask.svg" class="mx-2 my-auto h-4" />
                        {{ formatAddress(web3.account) }}
                        <img
                            src="@/assets/images/dropdown.svg"
                            :class="{ 'rotate-180': isWalletDropDownOpen }"
                            class="mx-2 my-auto h-4"
                        />
                        <div v-if="isWalletDropDownOpen" class="blur h-full w-full top-0 right-0 fixed"></div>

                        <ul
                            v-if="isWalletDropDownOpen"
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
                                <label class="container"
                                    >Mainnet
                                    <input type="radio" :checked="web3.network.key == 1" class="form-radio" />
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li class="min-w-max cursor-pointer p-1">
                                <label class="container"
                                    >Polygon
                                    <input type="radio" :checked="web3.network.key == 137" class="form-radio" />
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li class="min-w-max cursor-pointer p-1">
                                <label class="container"
                                    >Rinkeby
                                    <input type="radio" :checked="web3.network.key == 4" class="form-radio" />
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li class="divider_dropdown_wallet"></li>
                            <li class="min-w-max cursor-pointer p-1">
                                <span class="wallet_actions"
                                    ><img src="@/assets/icons/play-circle.png" /> &nbsp; Run Simulation</span
                                >
                            </li>
                            <li class="min-w-max cursor-pointer p-1">
                                <span class="wallet_actions" @click="doCopy(web3.account)"
                                    ><img src="@/assets/icons/copy.svg" /> &nbsp; Copy Address</span
                                >
                            </li>
                            <li class="min-w-max cursor-pointer p-1">
                                <span class="wallet_actions"
                                    ><img src="@/assets/icons/externalLink.svg" />&nbsp;
                                    <a class="ml-1" :href="web3.etherscanlink" target="_blank">Etherscan</a></span
                                >
                            </li>
                            <li
                                class="min-w-max cursor-pointer p-1"
                                @click="handleLogout(), (isWalletDropDownOpen = false)"
                            >
                                <span class="wallet_actions"
                                    ><img src="@/assets/icons/disconnect.svg" />&nbsp; Disconnect</span
                                >
                            </li>
                        </ul>
                    </span>
                </template>
            </div>
        </div>
        <teleport to="body">
            <ConnectWallet v-show="isModalVisible" @close="isModalVisible = false" @connect="handleConnect">
            </ConnectWallet>
        </teleport>
    </nav>
</template>

<script>
let tabs = [
    {
        id: 1,
        title: "Explore Synths",
        to: "explore",
    },
    {
        id: 2,
        title: "Markets",
        to: "synths",
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
import { useWeb3 } from "@/composables/useWeb3"
import ConnectWallet from "@/components/ConnectWallet.vue"
import { globalStore } from "@/composables/global"
import useClipboard from "@/composables/useClipboard"

import { ref } from "vue"

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
    return address.slice(0, 6) + "..." + address.slice(-6)
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
</script>

<style scoped>
.image_icon {
    height: 16px;
    width: 16px;
}
.wallet_actions {
    display: inline-flex;
    /* font-family: Open Sauce Sans; */
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: #ffffff;
    cursor: pointer;
    flex: none;
    order: 1;

    flex-grow: 0;
    margin: 2px 0px;
}

.wallet_actions img {
    margin-top: -2px;
    width: 20px;
    margin-right: 4px;
}
.container {
    display: block;
    position: relative;
    padding-left: 32px;
    -webkit-user-select: none;
    height: 25px;
    width: 25px;
    font-size: 14px;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.t_network {
    font-family: Open Sauce Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: #7171b2;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
}

.container input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    cursor: pointer;
    background: #14143a;
    border: 1px solid #7171b2;
    border-radius: 8px;
    transform: scale(0.8) translateY(-4px);
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
    background: #515fff;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.divider_dropdown_wallet {
    border-bottom: 1px solid #303060;

    /* Inside Auto Layout */

    flex: none;
    order: 4;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;
}

.blur {
    background: rgba(17, 17, 47, 0.1);
    backdrop-filter: blur(5px);
}
</style>
