<script setup>
import { copyText } from "vue3-clipboard"
import { useWeb3 } from "@/composables/useWeb3"
import ConnectWallet from "@/components/ConnectWallet.vue"
import { globalStore } from "@/composables/global"
import Simulator from "@/components/Simulator.vue"

import { ref } from "vue"

import useClipboard from "@/composables/useClipboard"
const { state } = globalStore()

const { login, web3, logout } = useWeb3()
const isSimulatorVisible = ref(false)

const isModalVisible = ref(false)

const { toggleNotificationOpen } = globalStore()
const { addNewNotifications } = globalStore()

const blockNumber = state.blockNumber
async function handleConnect(connector) {
    isModalVisible.value = false
    await login(connector)
}
async function handleLogout() {
    await logout()
    // emit('close');
}
const { toClipboard } = useClipboard()
async function doCopy(address) {
    try {
        await toClipboard(address)

      addNewNotifications({
        style: 1,
        link: null,
        title: "Success!",
        content: 'Copied',
      }, false)
    } catch (e) {
      // TODO: Can't catch error
      addNewNotifications({
        style: 0,
        link: null,
        title: "Error!",
        content: 'Please try again or reload page',
      }, false)
        console.error(e)
    }
}
function formatAddress(address) {
    return address.slice(0, 6) + "..." + address.slice(-6)
}
function goToBlockLink() {
  window.open(`https://etherscan.io/block/${blockNumber.value}`, "_blank")
}
</script>

<script>
import SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue"
import { mixin as VueClickAway,directive as onClickaway  } from "vue3-click-away";

const featuredSynth = "dpi-2x"
let tabs = [
    {
        id: 1,
        title: "Explore",
        to: "explore",
    },
    {
        id: 2,
        title: "New!",
        to: "synths/" + featuredSynth,
    },
    {
        id: 3,
        title: "Portfolio",
        to: "portfolio",
    },
]

let activeTab = 0
export default {
    name: "Header",
    components: {
        "s-button": SynthsRoundedButton,
    },
    mixins: [VueClickAway],
    directives: {
      ClickAway: onClickaway
    },

    data() {
        return {
            tabs,
            activeTab,
            isHelpDropDownOpen: false,
            isLangDropDownOpen: false,
            isWalletDropDownOpen: false
        }
    },
    methods: {
        switchLocale(locale) {
            if (this.$i18n.global.locale._value != locale) {
                this.$i18n.global.locale._value = locale;
            }
        },
        selectTab(item) {
            this.activeTab = item.id
        },
        closePopup(e) {
            this.isHelpDropDownOpen = false
            this.isLangDropDownOpen = false
            this.isWalletDropDownOpen = false
            // this.isModalVisible = false;
        },
        getLanguageById(id) {
            switch (id) {
                case "en":
                    return "English";
                case "zh":
                    return "Chinese";
                default:
                    return "English";
            }
        }
    },
}
</script>

<template>
    <nav
        class="
            h-12
            sticky
            top-0
            left-0
            z-20
            bg-navy-blue-800
            text-white
            flex
            lg:flex-row
            border-b
            bg-main
        "
    >
        <router-link to="/">
            <div class="w-64 h-12 flex items-center p-4 md:border-r bg-main">
                <img src="@/assets/images/yamIcon.png" class="h-8 w-8" />
                <h3 class="logo font-bold text-emerald-500 ml-2 flex-grow">Yam Synths</h3>
                <span class="bg-[#3468FF] my-auto px-2 overflow-hidden ml-3 rounded-full text-sm font-bold">V 3.0</span>
            </div>
        </router-link>
        <ul
            class="
                space-x-8
                overflow-hidden
                sticky
                left-64
                my-auto
                rounded-lg
                shadow-inner
                text-sm
                mx-4
                px-2
                py-2
                font-semibold
                bg-dark
                txt-main
                hidden
                lg:flex
            "
        >
            <li
                class="cursor-pointer px-2"
                v-for="(tab, key) in tabs"
                :key="key"
                :class="tab.title == $route.name ? 'bg-white rounded-md' : ''"
            >
                <router-link :to="'/' + tab.to">
                    <span v-if="tab.title == $route.name" class="text-black">{{ tab.title }}</span>
                    <span v-else class="text-purpleLight hover:text-white">{{ tab.title }}</span>
                </router-link>
            </li>
        </ul>
        <div
            class="
                absolute
                w-10
                lg:w-96
                right-0
                p-2
                mr-4
                text-right
                h-12
                lg:border-l
                bd-main
                flex
            "
        >
            <div class="flex absolute right-1">
                <span
                    class="hidden lg:flex px-2 py-1.5 font-semibold text-purpleLight text-sm cursor-pointer"
                    @click="(isLangDropDownOpen = !isLangDropDownOpen);(isHelpDropDownOpen=false);(isWalletDropDownOpen=false)"
                >
                    {{ getLanguageById($i18n.global.locale._value) }}
                    <img src="@/assets/images/dropdown.svg" :class="{ 'rotate-180': isLangDropDownOpen }" class="mx-2 ml-1 my-auto h-4" />
                    <ul
                      class="my-auto p-2 text-sm text-left absolute top-9 left-0 bg-light rounded-xl shadow-lg z-[10000]"
                      v-if="isLangDropDownOpen"
                      v-click-away="closePopup"
                  >
                <li v-for="locale in $i18n.global.availableLocales" :key="locale" @click="switchLocale(locale)" class="min-w-max cursor-pointer p-1">
                    <span>{{ getLanguageById(locale) }}</span>
                </li>
            </ul>
                </span>
                <span
                    class="hidden lg:flex px-4 py-1.5 font-semibold text-purpleLight text-sm cursor-pointer"
                    @click="(isHelpDropDownOpen = !isHelpDropDownOpen);(isLangDropDownOpen=false);(isWalletDropDownOpen=false)"
                >
                    Help
                    <img src="@/assets/images/dropdown.svg" :class="{ 'rotate-180': isHelpDropDownOpen }" class="mx-2 ml-1 my-auto h-4" />
                   <ul
                       class="overflow-hidden my-auto p-2 text-sm text-left absolute top-9 left-[40px] bg-light rounded-xl shadow-lg"
                       v-if="isHelpDropDownOpen"
                       v-click-away="closePopup"
                   >
                <li class="min-w-max cursor-pointer p-1">
                    <span>Documentation</span>
                </li>
                <li class="min-w-max cursor-pointer p-1">
                    <span>Tutorials</span>
                </li>
            </ul>
                </span>
                <span class="flex pr-4 py-1.5 font-semibold text-purpleLight text-sm cursor-pointer">
                    <img
                        src="@/assets/images/bell.png"
                        @click="toggleNotificationOpen"
                        class="cursor-pointer my-auto h-4 w-4 basic-hover"
                    />
                </span>

                <s-button
                    v-if="!$auth.isAuthenticated.value"
                    @click="isModalVisible = true"
                    buttonStyles="wallet-btn px-4 py-2 my-auto text-sm font-normal hidden lg:block"
                >
                    <template #buttonTitle> Connect Wallet </template>
                </s-button>
                <div>
                    <template v-if="$auth.isAuthenticated.value">
                        <span
                            v-if="$auth.isAuthenticated.value"
                            class="px-4 py-1.5 text-sm cursor-pointer hidden lg:flex"
                            @click="(isWalletDropDownOpen = !isWalletDropDownOpen);(isLangDropDownOpen=false);(isHelpDropDownOpen=false)"
                        >
                            <img src="@/assets/icons/metamask.svg" class="mx-2 my-auto h-4" />
                            {{ formatAddress(web3.account) }}
                            <img src="@/assets/images/dropdown.svg" :class="{ 'rotate-180': isWalletDropDownOpen }" class="mx-2 my-auto h-4" />
                        </span>
                    </template>
                </div>
            </div>

            <!-- wallet info dropdown -->
            <ul
              v-if="isWalletDropDownOpen"
              v-click-away="closePopup"
              class="
                    overflow-hidden
                    my-auto
                    w-48
                    shadow-lg
                    p-2
                    text-sm text-left
                    fixed
                    top-9
                    right-2
                    bg-light
                    rounded-xl
                            "
          >
            <li class="min-w-max cursor-pointer p-1">
              <span class="text-sm text-purpleLight">Network</span>
            </li>
            <li class="min-w-max cursor-pointer p-1">
              <label class="container">
                Mainnet
                <input name="networks" type="radio" :checked="web3.network.key == 1" class="form-radio" />
                <span class="checkmark"></span>
              </label>
            </li>
            <li class="min-w-max cursor-pointer p-1">
              <label class="container">
                Polygon
                <input name="networks" type="radio" :checked="web3.network.key == 137" class="form-radio" />
                <span class="checkmark"></span>
              </label>
            </li>
            <li class="min-w-max cursor-pointer p-1">
              <label class="container">
                Rinkeby
                <input name="networks" type="radio" :checked="web3.network.key == 4" class="form-radio" />
                <span class="checkmark"></span>
              </label>
            </li>
            <li class="divider_dropdown_wallet"></li>
            <li class="min-w-max cursor-pointer p-1" @click="isSimulatorVisible=!isSimulatorVisible">
                                <span class="wallet_actions">
                                    <img src="@/assets/icons/play-circle.png" /> &nbsp; Run Simulation
                                </span>
            </li>
            <li class="min-w-max cursor-pointer p-1">
                                <span class="wallet_actions" @click="doCopy(web3.account)">
                                    <img src="@/assets/icons/copy.svg" /> &nbsp; Copy Address
                                </span>
            </li>
            <li class="min-w-max cursor-pointer p-1">
                                <span class="wallet_actions">
                                    <img src="@/assets/icons/externalLink.svg" />&nbsp;
                                    <a class="ml-1" :href="web3.etherscanlink" target="_blank">Etherscan</a>
                                </span>
            </li>
            <li
                class="min-w-max cursor-pointer p-1"
                @click="handleLogout(), (isWalletDropDownOpen = false)"
            >
                                <span class="wallet_actions">
                                    <img src="@/assets/icons/disconnect.svg" />&nbsp; Disconnect
                                </span>
            </li>
          </ul>

            <!-- wallet info dropdown 2 -->
            <ul
                class="
                    overflow-hidden
                    my-auto
                    w-48
                    shadow-lg
                    p-2
                    text-sm text-left
                    fixed
                    top-9
                    right-2
                    bg-light
                    rounded-xl
                "
                v-if="0"
                v-click-away="closePopup"
            >
                <li class="min-w-max cursor-pointer p-1">
                    <span class="wallet_actions"
                        ><img src="@/assets/icons/stop-circle.png" /> &nbsp; Stop Simulation</span
                    >
                </li>
                <li class="divider_dropdown_wallet"></li>
                <li class="min-w-max cursor-pointer p-1">
                    <span class="text-sm text-purpleLight">Network</span>
                </li>
                <li class="min-w-max cursor-pointer p-1">
                    <label class="container"
                        >Mainnet
                        <input type="radio" :checked="web3.network.key == 1" class="form-radio" disabled />
                        <span class="checkmark"></span>
                    </label>
                </li>
                <li class="min-w-max cursor-pointer p-1">
                    <label class="container"
                        >Polygon
                        <input type="radio" :checked="web3.network.key == 137" class="form-radio" disabled />
                        <span class="checkmark"></span>
                    </label>
                </li>
                <li class="min-w-max cursor-pointer p-1">
                    <label class="container"
                        >Rinkeby
                        <input type="radio" :checked="web3.network.key == 4" class="form-radio" disabled />
                        <span class="checkmark"></span>
                    </label>
                </li>
                <li class="divider_dropdown_wallet"></li>
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
                <li @click="handleLogout(), (isWalletDropDownOpen = false)" class="min-w-max cursor-pointer p-1">
                    <span class="wallet_actions"><img src="@/assets/icons/disconnect.svg" />&nbsp; Disconnect</span>
                </li>
            </ul>
        </div>
      <teleport to="body">
        <ConnectWallet v-show="isModalVisible" @close="isModalVisible = false" @connect="handleConnect">
        </ConnectWallet>
      </teleport>
      <Simulator
        v-show="isSimulatorVisible"
        @close="isSimulatorVisible = false"
      >
      </Simulator>
    </nav>
</template>

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

/* When the checkbox is checked, add a blue background */
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
</style>
