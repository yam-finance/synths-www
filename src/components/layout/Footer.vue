<template>
    <nav
        class="
            h-12
            w-full
            overflow-hidden
            fixed
            bottom-0
            left-0
            z-20
            text-white
            flex flex-col
            lg:flex-row
            border-t
            bg-main
            bg-main
        "
    >
        <div class="invisible md:visible">
            <div class="flex overflow-hidden absolute w-64 h-12 border-r bg-main">
                <div class="flex items-center px-4 cursor-pointer">
                    <img src="@/assets/images/green-dot.svg" class="" />
                    <div class="text-xs font-normal translate-y-px px-2">{{ blockNumber }}</div>
                    <img src="@/assets/images/external-link.svg" class="" />
                </div>
            </div>
            <div class="flex absolute w-96 mr-4 right-0 p-2 text-right h-12 lg:border-l bg-main">
                <div class="flex absolute right-2">
                    <img
                        src="@/assets/images/socials/twitter.svg"
                        class="mx-2 my-auto cursor-pointer"
                    />
                    <img
                        src="@/assets/images/socials/discord.svg"
                        class="mx-2 my-auto cursor-pointer"
                    />
                </div>
            </div>
        </div>

        <transition
            enter-active-class="transition ease-in-out duration-100"
            leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <div class="transition ease-in-out" v-if="isMenuOpen">
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
                        visible
                        md:invisible
                        bg-main
                    "
                >
                    <span class="px-4 txt-main">Menu</span>
                    <li
                        class="min-w-max cursor-pointer border-t bg-main px-4 py-3"
                        v-for="(tab, key) in tabs"
                        :key="key"
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
                        visible
                        md:invisible
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

                <div
                    class="w-full flex fixed bottom-96 mb-2 visible md:invisible px-2 py-3 bg-main"
                >
                    <div class="flex">
                        <img
                            src="@/assets/images/socials/twitter.svg"
                            class="mx-2 my-auto cursor-pointer"
                        />
                        <img
                            src="@/assets/images/socials/discord.svg"
                            class="mx-2 my-auto cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </transition>

        <div
            class="
                flex
                absolute
                w-full
                right-0
                p-2
                text-right
                h-12
                lg:border-l
                bg-main
                visible
                md:invisible
            "
        >
            <div class="flex cursor-pointer">
                <img
                    src="@/assets/images/x.svg"
                    v-if="isMenuOpen"
                    @click="isMenuOpen = !isMenuOpen"
                />
                <img src="@/assets/images/menu.svg" v-else @click="isMenuOpen = !isMenuOpen" />
                <div class="absolute right-5">
                    <img
                        src="@/assets/images/bell.png"
                        class="mx-2 my-auto h-4 inline cursor-pointer"
                    />
                    <button
                        @click="isModalVisible = true"
                        class="
                            hover:shadow-lg
                            rounded-full
                            px-4
                            py-1.5
                            my-auto
                            text-sm
                            wallet-btn
                            inline
                        "
                    >
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>
        <ConnectWallet
            v-show="isModalVisible"
            @close="isModalVisible = false"
            @connect="handleConnect"
        >
        </ConnectWallet>
    </nav>
</template>
<script setup>
import { useWeb3 } from "@/composables/useWeb3"
import ConnectWallet from "@/components/ConnectWallet.vue"
import { ref } from "vue"


import {globalStore} from "@/composables";


const { login, web3, logout } = useWeb3()
const isModalVisible = ref(false)
let blockNumber;
 const { state } = globalStore()
blockNumber =  state.blockNumber;
const isWalletDropDownOpen = ref(false)
const isDropDownOpen = ref(false)

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



</script>

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
export default {
    name: "Footer",
    data() {
        return {
            isMenuOpen:false,
            tabs,
        }
    },
    methods: {},
}
</script>

<style scoped></style>
