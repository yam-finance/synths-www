<script>
import  SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue";


const closeModal = ref(false);
    let tabs = [
        {
            id: 1,
            title: "Explore Synths",
            to: "explore-synths"
        },
        {
            id: 2,
            title: "Markets",
            to: "markets"
        },
        {
            id: 3,
            title: "Portfolio",
            to: "portfolio"
        },
    ];
  
    let activeTab = 0;
    export default {
        name: "Header",
      components: {
        's-button': SynthsRoundedButton
      },
        data() {
            return {
                tabs,
              
                activeTab,
              
            };
        },
        methods: {
            selectTab(item) {
                this.activeTab = item.id;
            },
          closePopup(e) {
              e.stopPropagation()
            this.isDropDownOpen = false
            this.isWalletDropDownOpen = false;
           // this.isModalVisible = false;
          },
        },
  }
</script>
<script setup>
import { useWeb3 } from '@/composables/useWeb3';
import connectWalletModal from "../connectWallet/ConnectWallet.vue"
import { ref } from  'vue';

const { login, web3 ,logout} = useWeb3();
const isModalVisible = ref(false);

const isWalletDropDownOpen = ref(false);
const isDropDownOpen = ref(false);

  async function handleConnect(connector) {
    isModalVisible.value = false;
    await login(connector);  
  }
  async function handleLogout() {
    await logout(); 
    // emit('close');
  }
  function formatAddress(address) {
    return address.slice(0, 6) + '...' + address.slice(-6);
  }
</script>



<template>
    <nav
        class="h-12 sticky overflow-hidden top-0 left-0 z-20 bg-navy-blue-800 text-white flex flex-col lg:flex-row border-b bd-main bg-main"
    >
        <router-link to="/">
        <div class="w-64 h-12 flex md:border-r bd-main">
            <img src="@/assets/images/yamIcon.png" class="m-2 h-8 w-8">
            <h3 class="logo font-bold text-emerald-500 my-auto">Yam Synths</h3>
            <span class="bg-[#3468FF] my-auto px-2 overflow-hidden ml-3 md:ml-16 rounded-full text-sm">v 3.0</span>
        </div>
        </router-link>
        <ul
            class="flex space-x-8 overflow-hidden sticky left-64 my-auto px-4 rounded-full text-sm mx-4 py-1 font-semibold bg-dark txt-main invisible md:visible"
        >
            <li
                class="min-w-max cursor-pointer px-2"
                v-for="(tab, key) in tabs"
                :key="key"
                :class="tab.title==$route.name? 'bg-white rounded-md': ''"
            >
                <router-link :to='"/" + tab.to'>
                    <span v-if="tab.title==$route.name" class="text-black">{{ tab.title }}</span>
                    <span v-else>{{ tab.title }}</span>
                </router-link>
            </li>
        </ul>
        <div class="flex absolute w-96 right-0 p-2 mr-4 text-right h-12 lg:border-l bd-main invisible md:visible">
            <div class="flex absolute right-1">
                <img src="@/assets/images/bell.png" class="cursor-pointer my-auto h-4">
                <span
                        class="flex px-4 py-1.5 text-sm cursor-pointer"
                        @click="isDropDownOpen = !isDropDownOpen"
                >
                    Help
                    <img src="@/assets/images/dropdown.svg" class="mx-2 my-auto h-4">
                </span>
              <s-button v-if="!$auth.isAuthenticated.value" @click="isModalVisible = true" buttonStyles="wallet-btn px-4 py-1.5 my-auto text-sm font-normal">
                <template #buttonTitle>
                  Connect Wallet
                </template>
              </s-button>
	       <div>
                <template v-if="$auth.isAuthenticated.value">
                    <span
                        v-if="$auth.isAuthenticated.value"
                        class="flex px-4 py-1.5 text-sm cursor-pointer"
                        @click=";(isWalletDropDownOpen = !isWalletDropDownOpen), (isDropDownOpen=false)"
                    >
                        <img src="../../assets/icons/metamask.svg" class="mx-2 my-auto h-4" />
                        {{formatAddress(web3.account)}}
                        <img src="../../assets/images/dropdown.svg" class="mx-2 my-auto h-4" />
                    </span>
                </template>
            </div>
            </div>
            <ul
                class="overflow-hidden my-auto p-2 text-sm text-left fixed top-9 right-44 bg-light rounded-xl"
                v-if="isDropDownOpen"
                v-click-away="closePopup"
            >
                <li class="min-w-max cursor-pointer p-1">
                    <span>Documentation</span>
                </li>
                <li class="min-w-max cursor-pointer p-1">
                    <span>Tutorials</span>
                </li>
            </ul>
            <!-- wallet info dropdown -->
            <ul
                class="
                overflow-hidden
                my-auto
                w-64
                p-2
                text-sm text-left
                fixed
                top-9
                right-2
                bg-light
                rounded-xl
                "
                v-if="isWalletDropDownOpen"
                 v-click-away="closePopup"
            >
                <li class="min-w-max cursor-pointer p-1">
                <span class="t_network">Network</span>
                </li>
                <li class="min-w-max cursor-pointer p-1">
                <label class="container"
                    >Mainnet
                    <input type="checkbox" :checked="web3.network.key==1" />
                    <span class="checkmark"></span>
                </label>
                </li>
                <li class="min-w-max cursor-pointer p-1">
                <label class="container"
                    >Polygon
                    <input type="checkbox" :checked="web3.network.key==137" />
                    <span class="checkmark"></span>
                </label>
                </li>
                <li class="min-w-max cursor-pointer p-1">
                <label class="container"
                    >Rinkeby
                    <input type="checkbox" :checked="web3.network.key==4" />
                    <span class="checkmark"></span>
                </label>
                </li>
                <li class="divider_dropdown_wallet"></li>
                <li class="min-w-max cursor-pointer p-1">
                <span class="wallet_actions"
                    ><img src="../../assets/icons/copy.svg" /> &nbsp; Copy Address</span
                >
                </li>
                <li class="min-w-max cursor-pointer p-1">
                <span class="wallet_actions"
                    ><img class="image_icon" src="../../assets/icons/externalLink.svg" />&nbsp;
                    <a :href="web3.etherscanlink" >Etherscan</a></span
                >
                </li>
                <li
                @click=";handleLogout(), (isWalletDropDownOpen = false)"
                class="min-w-max cursor-pointer p-1"
                >
                <span class="wallet_actions"
                    ><img src="../../assets/icons/disconnect.svg" />&nbsp; Disconnect</span
                >
                </li>
            </ul>
        </div>
        <div class="flex overflow-hidden absolute right-0 h-12 visible md:invisible">
            <div class="flex px-4 py-4 cursor-pointer">
                <img src="@/assets/images/green-dot.svg" class="h-full py-0.5">
                <span class="text-xs my-auto font-normal px-1">13224549</span>
            </div>
        </div>
        <connectWalletModal  v-show="isModalVisible" @close="closeModal" @connect="handleConnect" >
  </connectWalletModal>
    </nav>

</template>



<style scoped>
.image_icon {
  height: 16px;
  width: 16px;
}
.wallet_actions {
  display: inline-flex;
  font-family: Open Sauce Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
  cursor: pointer;
  flex: none;
  order: 1;

  flex-grow: 0;
  margin: 0px 8px;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  -webkit-user-select: none;
  height: 25px;
  width: 25px;
  font-size: 12px;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.t_network {
  font-family: Open Sauce Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
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
  transform: scale(0.8);
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
  border: 1px solid #303060;

  /* Inside Auto Layout */

  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;
  margin: 8px 0px;
}
</style>
