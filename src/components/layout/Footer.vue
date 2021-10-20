<template>
  <nav
      class="h-12 w-full overflow-hidden fixed bottom-0 left-0 z-20 text-white flex flex-col lg:flex-row border-t bd-main bg-main"
  >
    <div class="invisible md:visible">
      <div class="flex overflow-hidden absolute w-64 h-12 border-r bd-main">
        <div class="flex px-4 py-4">
          <img src="../../assets/images/green-dot.svg" class="h-full py-0.5">
          <span class="px-1 text-xs my-auto font-normal px-3">{{ blockNumber }}</span>
          <img src="../../assets/images/external-link.svg">
        </div>
      </div>
      <div class="flex absolute w-96 mr-4 right-0 p-2 text-right h-12 lg:border-l bd-main">
        <div class="flex absolute right-2">
          <img src="../../assets/images/socials/twitter.svg" class="mx-2 my-auto cursor-pointer">
          <img src="../../assets/images/socials/discord.svg" class="mx-2 my-auto cursor-pointer">
        </div>
      </div>
    </div>

    <transition
        enter-active-class="transition ease-in-out duration-100"
        leave-active-class="transition ease-in duration-75"
        leave-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <div
          class="transition ease-in-out"
          v-if="isMenuOpen"
      >
        <ul
            class="overflow-hidden w-full my-auto py-1 text-lg my-4 pt-8 text-left fixed bottom-8 z-30 visible md:invisible bg-main"
        >
          <span class="px-4 txt-main">Menu</span>
          <li class="min-w-max cursor-pointer border-t bd-main px-4 py-3"
              v-for="(tab, key) in tabs"
              :key="key"
              @click="isMenuOpen = !isMenuOpen"
          >
            <router-link :to='"/" + tab.to'>
              <span>{{ tab.title }}</span>
            </router-link>
          </li>
        </ul>

        <ul
            class="overflow-hidden w-full my-auto py-1 text-lg my-4 text-left fixed bottom-60 z-30 visible md:invisible bg-main"
        >
          <span class="px-4 txt-main">Help</span>
          <li class="min-w-max cursor-pointer border-t bd-main px-4 py-3">
            <span>Documentation</span>
          </li>
          <li class="min-w-max cursor-pointer border-t border-b bd-main px-4 py-3">
            <span>Tutorials</span>
          </li>
        </ul>

        <div class="w-full flex fixed bottom-96 mb-2 visible md:invisible px-2 py-3 bg-main">
          <div class="flex">
            <img src="../../assets/images/socials/twitter.svg" class="mx-2 my-auto cursor-pointer">
            <img src="../../assets/images/socials/discord.svg" class="mx-2 my-auto cursor-pointer">
          </div>
        </div>
      </div>
    </transition>

    <div class="flex absolute w-full right-0 p-2 text-right h-12 lg:border-l bd-main visible md:invisible">
      <div class="flex">
        <img src="../../assets/images/x.svg" v-if="isMenuOpen" @click="isMenuOpen = !isMenuOpen">
        <img src="../../assets/images/menu.svg" v-else @click="isMenuOpen = !isMenuOpen">
        <button class="hover:shadow-lg rounded-full px-4 py-1.5 my-auto text-sm absolute right-5 wallet-btn">
          Connect Wallet
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { globalStore } from "@/store/index";
import {computed, onMounted} from "vue";


let isMenuOpen = 0;
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
export default {
  name: "Footer",
  setup(props, context) {
    const { state } = globalStore()


    return {
      blockNumber: state.blockNumber
    }
  },
  data() {
    return {
      isMenuOpen,
      tabs,
    };
  },
}
</script>

<style scoped>

</style>
