<template>
  <div class="w-full font-semibold hidden md:block mb-10">
    <div class="w-full h-12 py-3 px-4 border-b bg-main">
      <span class="text-sm txt-main">Explore Synths</span>
    </div>
    <div
        class="
                p-4
                grid
                md:grid-cols-1
                lg:grid-cols-1
                xl:grid-cols-2
                2xl:grid-cols-3
                gap-4
                text-white
                border-b
                bg-main
            "
    >
      <div class="card min-h-[78px] rounded-lg shadow-md bg-light px-6 py-4">
        <div class="text-xl font-bold">$12.9M</div>
        <div class="text-sm font-normal pt-1 txt-main">Total Value Locked</div>
      </div>
      <div class="card min-h-[78px] rounded-lg shadow-md bg-light px-6 py-4">
        <div class="text-xl font-bold">$3.7M</div>
        <div class="text-sm font-normal pt-1 txt-main">Trading Volume</div>
      </div>
      <div class="card min-h-[78px] rounded-lg shadow-md bg-light px-6 py-4">
        <div class="text-xl font-bold">5</div>
        <div class="text-sm font-normal pt-1 txt-main">Total Synths</div>
      </div>
    </div>

    <div class="w-full h-12 border-b bg-main text-white text-lg flex text-center justify-between">
      <span class="py-3 px-4">
              All Synths
      </span>

      <div class="h-full w-[230px] py-2 px-3 flex">
        <img src="@/assets/images/search.svg" class="flex absolute my-1.5 mx-3" />
        <input
            class="
                        flex flex-wrap
                        placeholder-gray-500
                        fo
                        pl-10
                        pr-1
                        py-4
                        h-full
                        w-full
                        focus:text-gray-300
                        dark:focus:text-gray-300
                        bg-dark
                        rounded-lg
                        shadow-inner
                        outline-none
                        placeholder-primary
                        txt-main
                    "
            placeholder="Search Synths"
            @keyup="filter($event)"
        />
      </div>
    </div>

    <table class="text-white border-b bg-main w-full font-normal hidden md:table">
      <thead class="lg:text-xs xl:text-sm txt-main text-left">
      <th class="py-2 px-4">Synth</th>
      <th>Price</th>
      <th>24h Change</th>
      <th>24h Volume</th>
      <th>Liquidity</th>
      <th>APR</th>
      <th></th>
      </thead>
      <tbody class="border-t bg-main lg:text-xs xl:text-sm 2xl:text-base">
      <tr v-for="(synth, key) in synths" :key="key" class="cursor-pointer border-b bg-main basic-hover">
        <td class="px-4 py-2 flex">
          <img src="@/assets/images/zombie.png" class="w-6 h-6" />
          <router-link class="font-semibold" :to="{name: 'Synths', params:{synth: synth.id}}">
            &nbsp;{{ synth.name }}
          </router-link>
        </td>
        <td>{{ synth.price }}</td>
        <td>
          <img
            src="@/assets/images/arrow-up-right.svg"
            class="h-4 inline -translate-y-0.5"
          />
          {{ synth.day_change }}
        </td>
        <td>{{ synth.day_volume }}</td>
        <td>{{ synth.liquidity }}</td>
        <td>${{ synth.apr }}</td>
        <td class="p-0 m-0">
          <router-link :to="{name: 'Synths', params:{synth: synth.id}}">
            <img src="@/assets/images/arrow-right.svg" class="cursor-pointer"/>
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="min-w-[400px] border-l bg-main hidden lg:block">
    <!--Right Side-->
  </div>
  <div class="w-screen font-semibold block md:hidden text-white">
    <div class="w-full py-2 px-3 border-b bg-main">
      <span class="text-sm txt-main">Explore Synths</span>
    </div>
    <div class="card p-3 border-b bg-main">
      <div class="text-lg font-bold">$12.9M</div>
      <div class="text-xs txt-main">Total Value Locked</div>
    </div>
    <div class="w-full h-12 border-b bg-main text-white text-lg flex text-center justify-between">
      <span class="py-3 px-4">
              All Synths
      </span>

      <div class="h-full w-[230px] py-2 px-3 flex">
        <img src="@/assets/images/search.svg" class="flex absolute my-1.5 mx-3" />
        <input
            class="
                        flex flex-wrap
                        placeholder-gray-500
                        fo
                        pl-10
                        pr-1
                        py-4
                        h-full
                        w-full
                        focus:text-gray-300
                        dark:focus:text-gray-300
                        bg-dark
                        rounded-full
                        outline-none
                        placeholder-primary
                        txt-main
                    "
            placeholder="Search Synths"
            @keyup="filter($event)"
        />
      </div>
    </div>

    <table class="text-white border-b bg-main w-full font-normal">
      <thead class="text-sm txt-main text-left">
      <th class="py-2 px-4">Synth</th>
      <th>Price</th>
      <th>24h Change</th>
      <th></th>
      </thead>
      <tbody class="border-t bg-main text-base">
      <tr v-for="(synth, key) in synths" :key="key" class="cursor-pointer border-b bg-main basic-hover">
        <td class="px-4 py-2 font-semibold flex">
          <img src="@/assets/images/zombie.png" class="w-6 h-6" />
          <router-link :to="{name: 'Synths', params:{synth: synth.id}}">
            &nbsp;{{ synth.name }}
          </router-link>
        </td>
        <td>{{ synth.price }}</td>
        <td>
          <img
            src="@/assets/images/arrow-up-right.svg"
            class="h-4 inline -translate-y-0.5"
          />
          {{ synth.day_change }}
        </td>
        <router-link :to="{name: 'Synths', params:{synth: synth.id}}">
          <img src="@/assets/images/arrow-right.svg" class="cursor-pointer"/>
        </router-link>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
let rawSynths = [
  {
    id: 1,
    name: "ETH/DAI IL Long",
    price: 120,
    day_change: '15%',
    day_volume: '$12M',
    liquidity: '$240k',
    apr: '120%',
    collateral: "ETH",
    status: 1,
  },
  {
    id: 2,
    name: "ETH/DAI IL Long",
    price: 120,
    day_change: '15%',
    day_volume: '$12M',
    liquidity: '$240k',
    apr: '120%',
    collateral: "ETH",
    status: 1,
  },
  {
    id: 3,
    name: "ETH/BTC",
    price: 120,
    day_change: '15%',
    day_volume: '$12M',
    liquidity: '$240k',
    apr: '120%',
    collateral: "ETH",
    status: 1,
  },
  {
    id: 4,
    name: "ETH/DAI IL Long",
    price: 120,
    day_change: '15%',
    day_volume: '$12M',
    liquidity: '$240k',
    apr: '120%',
    collateral: "ETH",
    status: 1,
  },
  {
    id: 5,
    name: "ETH/DAI IL Long",
    price: 120,
    day_change: '15%',
    day_volume: '$12M',
    liquidity: '$240k',
    apr: '120%',
    collateral: "ETH",
    status: 1,
  },
  {
    id: 6,
    name: "ETH/DAI IL Long",
    price: 120,
    day_change: '15%',
    day_volume: '$12M',
    liquidity: '$240k',
    apr: '120%',
    collateral: "ETH",
    status: 1,
  },
]

import SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue"
export default {
  name: "Explore",
  components: {
    "s-button": SynthsRoundedButton,
  },
  data() {
    return {
      rawSynths,
      filter_string: ''
    }
  },
  methods: {
    filter(event) {
      this.filter_string = event.target.value
    },
  },
  computed:{
    synths() {
      if (this.filter_string !== '') {
        return this.rawSynths.filter(item => item.name.toLowerCase().includes(this.filter_string.toLowerCase()))
      } else return this.rawSynths
    }
  }
}
</script>

<style scoped></style>
