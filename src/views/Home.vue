<template>
    <div class="home overflow-hidden relative bg-main">
      <div class="ellipse-1"></div>
      <div class="ellipse-2"></div>
      <div class="ellipse-3"></div>
      <div class="ellipse-4"></div>
      <div class="ellipse-5"></div>
      <div class="ellipse-6"></div>
      <div class="ellipse-7"></div>
      <div class="ellipse-8"></div>
      <div class="ellipse-9"></div>
      <div class="ellipse-10"></div>
      <div class="ellipse-11"></div>

        <nav
            class="
                p-4
                sticky
                overflow-hidden
                top-0
                left-0
                z-20
                bg-navy-blue-800
                text-white
                flex flex-col
                lg:flex-row
                bg-main
            "
        >
            <router-link to="/">
                <div class="w-64 flex">
                    <img src="@/assets/images/yamIcon.png" class="mr-2 h-8 w-8" />
                    <h3 class="logo font-bold text-emerald-500 my-auto">Yam Synths</h3>
                    <span
                        class="
                            bg-[#3468FF]
                            my-auto
                            px-2
                            overflow-hidden
                            ml-3
                            md:ml-16
                            rounded-full
                            text-sm
                            font-bold
                        "
                        >V 3.0</span
                    >
                </div>
            </router-link>
            <div class="flex absolute right-2 w-96 h-16">
                <div class="flex absolute right-2 align-middle my-auto">
                  <router-link to="/#">
                    <span class="flex px-4 py-1.5 cursor-pointer text-[#CBCBFF] hover:brightness-125"> Learn </span>
                  </router-link>
                    <router-link to="/explore" class="my-auto">
                        <s-button
                            buttonStyles="wallet-btn px-4 py-3 my-auto text-sm font-semibold mr-4"
                        >
                            <template #buttonTitle> Explore Synths </template>
                        </s-button>
                    </router-link>
                </div>
            </div>
        </nav>
        <div class="relative container-fluid max-w-[1000px] m-auto">
            <div class="home-content text-center text-white mt-16">
              <router-link to="/#">
                <img class="absolute ml-12 max-w-4xl -top-10 opacity-60" src="@/assets/images/yam-synths-bg.png" />
                <div class="relative inline">
                  <span class="txt-main">BUILT BY</span>
                  <img src="@/assets/images/logo.png" class="inline w-6 h-6" />YAM
                </div>
              </router-link>

                <div class="relative text-3xl md:text-5xl lg:text-7xl mt-8 mb-16 font-semibold">
                    Go Long or Short<br />on Anything
                </div>
                <div class="relative">
                    <img src="@/assets/images/pages/market.png" class="m-auto mb-20 shadow-2xl max-w-3xl" />
                </div>
                <div class="text-xl md:text-3xl lg:text-4xl font-semibold">
                    Messing with collateral ratios & getting <br />
                    liquidated on leverage isn't fun
                </div>
                <div class="text-lg md:text-xl font-normal lg:text-2xl text-[#CBCBFF] m-4 sm:mx-40">
                    Yam Synths’ LSP* contracts enable easy minting and low risk leverage on all
                    sorts of Synths.
                </div>
                <div class="text-sm txt-main m-4">*Long & Short Position</div>
                <div class="flex space-x-8 m-auto max-w-2xl mt-8">
                    <div>
                        <img src="@/assets/images/check.png" class="w-5 mb-1 inline" />
                        <span class="ml-1">Non-liquidatable positions</span>
                    </div>
                    <div>
                        <img src="@/assets/images/check.png" class="w-5 mb-1 inline" />
                        <span class="ml-1">Capital efficient minting</span>
                    </div>
                    <div>
                        <img src="@/assets/images/check.png" class="w-5 mb-1 inline" />
                        <span class="ml-1">Another benefit here</span>
                    </div>
                </div>

                <div class="mt-16 lg:mt-40 txt-main text-sm">GET STARTED</div>
                <div class="m-4 text-xl md:text-3xl lg:text-4xl font-semibold">
                    Hedge, trade or earn on our synths
                </div>
                <div class="flex flex-wrap justify-center mb-8">
                    <div
                        v-for="(menu, key) in menus"
                        :key="key"
                        class="card rounded-lg bg-[#272760] shadow-lg p-4 m-2 hover:-translate-y-0.5 cursor-pointer lg:w-64"
                    >
                        <div class="flex items-center mb-5">
                            <div class="flex items-center flex-grow">
                                <img src="@/assets/images/zombie.png" class="w-6 h-6" />
                                <span class="text-sm font-semibold ml-2">{{ menu.title }}</span>
                            </div>
                            <div>
                                <div
                                    class="
                                        bg-[#3468FF]
                                        my-auto
                                        px-2
                                        py-0.5
                                        mt-0.5
                                        rounded-full
                                        text-xs
                                        font-bold
                                        float-right
                                    "
                                >
                                    30% APY
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="flex items-end">
                                <span class="px-1 font-bold">${{ menu.price }}</span>
                                <img
                                    src="@/assets/images/arrow-up-right.svg"
                                    class="h-4 mb-0.5"
                                />
                                <span class="px-1 text-sm text-[#9A9AC8]">15%</span>
                            </div>
                            <router-link :to="'/synths/' + menu.to">
                                <div>
                                    <img
                                        src="@/assets/images/arrow-right-light.png"
                                        class="float-right h-6"
                                    />
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <router-link to="/explore">
                    <button
                        class="
                            rounded-2xl
                            px-4
                            py-3
                            my-auto
                            text-base
                            font-bold
                            wallet-btn
                        "
                    >
                        Explore Synths
                    </button>
                </router-link>

                <div class="grid grid-cols-2 md:grid-cols-4 m-4 my-16">
                    <div class="font-semibold">
                        <p class="text-4xl md:text-5xl lg:text-6xl">$2.0m</p>
                        <p class="text-sm txt-main mt-2">TOTAL VALUE LOCKED</p>
                    </div>
                    <div class="font-semibold">
                        <p class="text-4xl md:text-5xl lg:text-6xl">$324k</p>
                        <p class="text-sm txt-main mt-2">TOTAL SYNTH MARKETCAP</p>
                    </div>
                    <div class="font-semibold">
                        <p class="text-4xl md:text-5xl lg:text-6xl">$1.4m</p>
                        <p class="text-sm txt-main mt-2">TOTAL SYNTH LIQUIDITY</p>
                    </div>
                    <div class="font-semibold">
                        <p class="text-4xl md:text-5xl lg:text-6xl">$500k</p>
                        <p class="text-sm txt-main mt-2">VOLUME LAST 24H</p>
                    </div>
                </div>

                <div class="mx-20 md:mx-10 lg:mx-40 font-semibold">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="grid grid-rows-2 gap-4">
                            <div
                                class="
                                    card
                                    rounded-xl
                                    bg-[#272760]
                                    h-56
                                    p-8
                                    sm:px-16
                                    shadow-lg
                                    flex flex-col
                                "
                            >
                                <div class="mt-auto">
                                    <p class="text-[#CBCBFF] text-xs leading-8 font-medium">
                                        CAPITAL EFFICIENT
                                    </p>
                                    <p class="text-xl font-semibold leading-6">
                                        Mint positions at a 1:1 ratio, always
                                    </p>
                                </div>
                            </div>
                            <div
                                class="
                                    card
                                    rounded-xl
                                    bg-[#272760]
                                    h-56
                                    p-8
                                    sm:px-16
                                    flex flex-col
                                    shadow-lg
                                "
                            >
                                <div class="mt-auto">
                                    <p class="text-[#CBCBFF] text-xs leading-8 font-medium">
                                        CAPITAL EFFICIENT
                                    </p>
                                    <p class="text-xl font-semibold leading-6">
                                        Mint positions at a 1:1 ratio, always
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="
                                card
                                rounded-xl
                                bg-[#272760]
                                p-8
                                sm:px-16
                                flex flex-col
                                min-h-[224px]
                                shadow-lg
                            "
                        >
                            <div class="mt-auto">
                                <p class="text-[#CBCBFF] text-xs leading-8 font-semibold">
                                    LOW RISK LEVERAGE
                                </p>
                                <p class="text-xl font-semibold leading-6">
                                    Market buy up to 6x leverage positions
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="
                            card
                            rounded-xl
                            bg-[#272760]
                            h-56
                            p-8
                            sm:px-16
                            my-4
                            lg:mx-20
                            flex flex-col
                            min-h-[224px]
                            shadow-lg
                        "
                    >
                        <div class="mt-auto">
                            <p class="text-[#CBCBFF] text-xs leading-8 font-normal">
                                OPTIONATED LP
                            </p>
                            <p class="text-xl font-semibold leading-6">
                                Provide liquidity in neutral, bullish, or bearish pools
                            </p>
                        </div>
                    </div>
                </div>

                <div class="mt-32 text-lg">
                  <router-link to="/#">
                    <span class="txt-main hover:brightness-125">Built by</span>
                    🍠YAM
                  </router-link>

                </div>
                <div class="text-lg">
                  <router-link to="/#">
                    <span class="txt-main hover:brightness-125">Powered by </span>
                    🦑 UMA
                  </router-link>

                </div>

                <ul class="inline-flex space-x-8 text-[#CBCBFF] mt-8">
                    <router-link to="/#" class="cursor-pointer hover:brightness-125">
                        <li class="cursor-pointer">Documentation</li>
                    </router-link>
                    <router-link to="/#" class="cursor-pointer hover:brightness-125">
                        <li class="cursor-pointer">FAQs</li>
                    </router-link>
                    <router-link to="/#" class="cursor-pointer hover:brightness-125">
                        <li class="cursor-pointer">Newsletter</li>
                    </router-link>
                </ul>

                <div>
                    <div class="inline-flex mt-8">
                      <router-link to="/#">
                        <img
                          src="@/assets/images/socials/twitter.svg"
                          class="mx-2 my-auto cursor-pointer hover:brightness-125"
                        />
                      </router-link>
                      <router-link to="/#">
                        <img
                          src="@/assets/images/socials/discord.svg"
                          class="mx-2 my-auto cursor-pointer hover:brightness-125"
                        />
                      </router-link>


                    </div>
                </div>

                <div class="p-8 font-normal text-sm txt-main">
                    © 2021 Yam Synths. All rights reserved.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue"
let menus = [
    {
        id: 1,
        title: "ETH/DAI IL",
        price: 120,
        to: "eth-dai-il",
    },
    {
        id: 2,
        title: "ETH/DAI IL",
        price: 120,
        to: "eth-dai-il",
    },
    {
        id: 3,
        title: "ETH/DAI IL",
        price: 120,
        to: "eth-dai-il",
    },
    {
        id: 4,
        title: "ETH/DAI IL",
        price: 120,
        to: "eth-dai-il",
    },
    {
        id: 5,
        title: "ETH/DAI IL",
        price: 120,
        to: "eth-dai-il",
    },
]
export default {
    name: "HomePage",
    components: {
        "s-button": SynthsRoundedButton,
    },
    data() {
        return {
            menus,
        }
    },
}
</script>

<style scoped>
.ellipse-1 {
  border-radius: 100%;
  position: absolute;
  width: 576.15px;
  height: 347.79px;
  left: calc(50% - 576.15px/2 - 397.13px);
  top: 596.32px;
  background: linear-gradient(89.02deg, #3A3AAF 18.24%, rgba(108, 52, 135, 1) 88.52%);
  opacity: 0.6;
  filter: blur(100px);
  transform: rotate(15deg);
}

.ellipse-2 {
  border-radius: 100%;
  position: absolute;
  width: 451px;
  height: 143px;
  left: calc(50% - 451px/2 + 430.68px);
  top: 611.8px;
  background: linear-gradient(89.02deg, #3A3AAF 18.24%, rgba(108, 52, 135, 1) 88.52%);
  filter: blur(100px);
  transform: rotate(-15deg);
}

.ellipse-3 {
  border-radius: 100%;
  position: absolute;
  width: 451px;
  height: 143px;
  left: calc(50% - 451px/2 + 693.5px);
  top: 718.73px;
  background: linear-gradient(89.02deg, #3A3AAF 18.24%, rgba(108, 52, 135, 1) 88.52%);
  filter: blur(100px);
  transform: rotate(-15deg);
}

.ellipse-4 {
  border-radius: 100%;
  position: absolute;
  width: 457.45px;
  height: 416.33px;
  left: calc(50% - 457.45px/2 + 546.9px);
  top: 1529.75px;
  background: radial-gradient(44.89% 296.12% at 45.16% 37.01%, #569AFF 0%, rgba(111, 0, 164, 0.29) 100%);
  opacity: 0.6;
  filter: blur(150px);
  transform: rotate(109.99deg);
}
.ellipse-5 {
  border-radius: 100%;
  position: absolute;
  width: 1022.46px;
  height: 162.92px;
  left: calc(50% - 1022.46px/2 - 451.88px);
  top: 1637.64px;
  background: linear-gradient(89.02deg, #5656FF 18.24%, rgba(108, 52, 135, 0) 88.52%);
  opacity: 0.6;
  filter: blur(100px);
  transform: rotate(9.85deg);
}
.ellipse-6 {
  border-radius: 100%;
  position: absolute;
  width: 1022.46px;
  height: 162.92px;
  left: calc(50% - 1022.46px/2 + 10.82px);
  top: 1668.12px;
  background: linear-gradient(89.02deg, #5656FF 18.24%, rgba(108, 52, 135, 0) 88.52%);
  opacity: 0.6;
  filter: blur(100px);
  transform: rotate(0.8deg);
}
.ellipse-7 {
  border-radius: 100%;
  position: absolute;
  width: 1022.46px;
  height: 162.92px;
  left: calc(50% - 1022.46px/2 + 10.82px);
  top: 1668.12px;
  background: linear-gradient(89.02deg, #5656FF 18.24%, rgba(108, 52, 135, 1) 88.52%);
  opacity: 0.1;
  filter: blur(64px);
  transform: rotate(0.8deg);
}
.ellipse-8 {
  border-radius: 100%;
  position: absolute;
  width: 576.15px;
  height: 347.79px;
  left: calc(50% - 576.15px/2 + 187.09px);
  top: 1473.64px;
  background: linear-gradient(89.02deg, #3A3AAF 18.24%, rgba(108, 52, 135, 1) 88.52%);
  opacity: 0.3;
  filter: blur(100px);
  transform: rotate(15deg);
}

.ellipse-9 {
  border-radius: 100%;
  position: absolute;
  width: 997.37px;
  height: 602.05px;
  left: calc(50% - 997.37px/2 - 140.55px);
  top: 1989.71px;
  background: radial-gradient(35.64% 354.48% at 53.4% 47.81%, #5667ff 0%, rgba(111, 0, 164, 0.29) 100%);
  opacity: 0.3;
  filter: blur(100px);
  transform: rotate(168.86deg);
}
.ellipse-10 {
  border-radius: 100%;
  position: absolute;
  width: 576.15px;
  height: 347.79px;
  left: calc(50% - 576.15px/2 + 420.92px);
  top: 2429.82px;
  background: radial-gradient(35.64% 354.48% at 53.4% 47.81%, #8956ff 0%, rgba(180, 20, 255, 0.29) 100%);
  opacity: 0.2;
  filter: blur(100px);
  transform: rotate(155.24deg);
}
.ellipse-11 {
  border-radius: 100%;
  position: absolute;
  width: 576.15px;
  height: 347.79px;
  left: calc(50% - 576.15px/2 - 217.76px);
  top: 3047.02px;
  background: radial-gradient(35.64% 354.48% at 53.4% 47.81%, #569AFF 0%, rgba(180, 20, 255, 0.29) 100%);
  opacity: 0.6;
  filter: blur(150px);
  transform: rotate(15deg);
}
</style>
