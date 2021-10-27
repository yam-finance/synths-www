<template>
    <div class="w-full font-semibold hidden md:block mb-10">
        <div class="w-full h-12 py-3 px-4 border-b bg-main">
            <span class="text-sm txt-main">Portfolio</span>
        </div>
        <div
            class="
                p-4
                grid
                md:grid-cols-1
                lg:grid-cols-1
                xl:grid-cols-2
                2xl:grid-cols-4
                gap-4
                text-white
                border-b
                bg-main
            "
        >
            <div class="card min-h-[78px] rounded-lg bg-light px-6 py-4">
                <div class="text-xl font-bold">$42,000</div>
                <div class="text-sm pt-1 font-normal txt-main">Total Portfolio Value</div>
            </div>
            <div class="card min-h-[78px] rounded-lg bg-light px-6 py-4">
                <div class="text-xl font-bold">5</div>
                <div class="text-sm pt-1 font-normal txt-main">Synths Minted</div>
            </div>
            <div class="card min-h-[78px] rounded-lg bg-light px-6 py-4">
                <div class="flex">
                    <div class="text-xl font-bold">200</div>
                    <div class="text-sm txt-main ml-1 mt-2">Success</div>
                </div>
                <div class="text-sm pt-1 font-normal txt-main flex items-center">
                    Potential rewards
                    <img src="@/assets/images/help-circle.png" class="ml-2 h-4" />
                </div>
            </div>
            <div class="card min-h-[78px] rounded-lg bg-light px-6 py-4">
                <div class="flex">
                    <div class="text-xl font-bold">200</div>
                    <div class="text-sm txt-main ml-1 mt-2">Success in wallet</div>
                </div>
                <div class="text-sm mt-1 txt-main flex items-center">
                    <span class="rounded-xl wallet-btn text-xs text-white px-2 pb-0.5 font-bold"
                        >Redeem</span
                    >
                    &nbsp;for
                    <span class="text-white font-normal">&nbsp;30 UMA</span>
                    <img src="@/assets/images/help-circle.png" class="ml-2 h-4" />
                </div>
            </div>
        </div>

        <div class="w-full h-12  px-4 border-b bg-main text-white text-lg flex justify-between">
          <span class="py-2 px-4">Your Synths</span>
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

        <table class="text-white border-b bg-main w-full font-normal hidden md:table">
            <thead class="lg:text-xs xl:text-sm txt-main text-left">
                <th class="py-2 px-4">Synths</th>
                <th>Balance</th>
                <th>Amount Minted</th>
                <th>LP Amount</th>
                <th>Price</th>
                <th>Collateral</th>
                <th>Status</th>
                <th></th>
            </thead>
            <tbody class="border-t bg-main lg:text-xs xl:text-sm 2xl:text-base">
                <tr v-for="(synth, key) in synths" :key="key" class="border-b bg-main cursor-pointer basic-hover">
                    <td class="px-4 py-2 font-semibold flex">
                        <img src="@/assets/images/zombie.png" class="w-6 h-6" />
                        &nbsp;{{ synth.name }}
                    </td>
                    <td>{{ synth.balance }}</td>
                    <td>{{ synth.minted_qty }}</td>
                    <td>{{ synth.lp_qty }}</td>
                    <td>${{ synth.price }}</td>
                    <td>{{ synth.collateral }}</td>
                    <td class="p-0 m-0">
                        <div v-if="synth.status">
                            <span class="text-white">Live</span>
                        </div>
                        <div class="flex items-center" v-else>
                            <span class="txt-main mr-0.5">Expired</span>
                            <s-button
                                buttonStyles="wallet-btn ml-1 w-auto text-xs text-white px-2 py-0.5 my-auto font-bold block xl:inline"
                            >
                                <template #buttonTitle> Settle </template>
                            </s-button>
                        </div>
                    </td>
                    <td class="p-0 m-0">
                        <img src="@/assets/images/arrow-right.svg" class="cursor-pointer" />
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
            <span class="text-sm txt-main">Portfolio</span>
        </div>
        <div class="card p-3 border-b bg-main">
            <div class="text-lg font-bold">$42,000</div>
            <div class="text-xs txt-main">Total Portfolio Value</div>
        </div>
        <div class="w-full h-12 py-3 px-4 border-b bg-main text-white text-lg">Your Synths</div>
        <table class="text-white border-b bg-main w-full font-normal">
            <thead class="text-sm txt-main text-left">
                <th class="py-2 px-4">Synths</th>
                <th>Balance</th>
                <th>Price</th>
                <th>Status</th>
                <th></th>
            </thead>
            <tbody class="border-t bg-main text-base">
                <tr v-for="(synth, key) in synths" :key="key" class="border-b bg-main basic-hover">
                    <td class="px-4 py-2 font-semibold flex">
                        <img src="@/assets/images/zombie.png" class="w-6 h-6" />
                        &nbsp;{{ synth.name }}
                    </td>
                    <td>{{ synth.balance }}</td>
                    <td>${{ synth.price }}</td>
                    <td>
                        <div v-if="synth.status">
                            <span class="text-white">Live</span>
                        </div>
                        <div v-else>
                            <span class="txt-main">Expired</span>

                            <s-button
                                color="linear-gradient(180deg, #F77FA0 0%, #DA4CAB 100%)"
                                buttonStyles="w-auto text-xs text-white px-2 pb-0.5 m-auto ml-0 font-bold"
                            >
                                <template #buttonTitle> Settle </template>
                            </s-button>
                        </div>
                    </td>
                    <td>
                        <img src="@/assets/images/arrow-right.svg" class="cursor-pointer" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
let synths = [
    {
        id: 1,
        name: "ETH/DAI IL Long",
        balance: 120,
        minted_qty: 120,
        lp_qty: 120,
        price: 120,
        collateral: "ETH",
        status: 1,
    },
    {
        id: 2,
        name: "ETH/DAI IL Long",
        balance: 120,
        minted_qty: 120,
        lp_qty: 120,
        price: 120,
        collateral: "ETH",
        status: 1,
    },
    {
        id: 3,
        name: "ETH/DAI IL Long",
        balance: 120,
        minted_qty: 120,
        lp_qty: 120,
        price: 120,
        collateral: "ETH",
        status: 0,
    },
    {
        id: 4,
        name: "ETH/DAI IL Long",
        balance: 120,
        minted_qty: 120,
        lp_qty: 120,
        price: 120,
        collateral: "ETH",
        status: 1,
    },
    {
        id: 5,
        name: "ETH/DAI IL Long",
        balance: 120,
        minted_qty: 120,
        lp_qty: 120,
        price: 120,
        collateral: "ETH",
        status: 1,
    },
]

import SynthsRoundedButton from "@/components/buttons/SynthsRoundedButton.vue"
export default {
    name: "portfolio",
    components: {
        "s-button": SynthsRoundedButton,
    },
    data() {
        return {
            synths,
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
          return this.synths.filter(item => item.name.toLowerCase().includes(this.filter_string.toLowerCase()))
        } else return this.synths
      }
    }
}
</script>

<style scoped></style>
