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

        <div class="w-full h-12 px-2 border-b bg-main text-white text-lg flex text-center justify-between">
            <span class="py-3 px-4"> All Synths </span>

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
                        text-sm
                    "
                    placeholder="Search Synths"
                    @keyup="filter($event)"
                />
            </div>
        </div>

        <table cellpadding="5" class="text-white border-b bg-main w-full font-normal hidden md:table">
            <thead class="lg:text-xs xl:text-sm txt-main text-left">
                <th class="py-2 px-4">Synth</th>
                <th>Price long</th>
                <th>Price short</th>
                <th></th>
            </thead>
            <tbody class="border-t bg-main lg:text-xs xl:text-sm 2xl:text-base">
                <tr v-for="(synth, key) of assets" :key="key" class="cursor-pointer border-b bg-main basic-hover">
                    <td class="px-4 py-2 flex">
                        <img src="@/assets/images/zombie.png" class="w-6 h-6" />
                        <router-link class="font-semibold" :to="{ name: 'Markets', params: { synth: synth.address } }">
                            &nbsp;{{ key }}
                        </router-link>
                    </td>

                    <td v-if="synth.long">{{ $i18n.global.n(synth.long.price, "currency") }}</td>
                    <td v-else>{{ $i18n.global.n(0, "currency") }}</td>

                    <td v-if="synth.short">{{ $i18n.global.n(synth.short.price, "currency") }}</td>
                    <td v-else>{{ $i18n.global.n(0, "currency") }}</td>

                    <td class="p-0 m-0">
                        <router-link :to="{ name: 'Markets', params: { synth: synth.address } }">
                            <img src="@/assets/images/arrow-right.svg" class="cursor-pointer" />
                        </router-link>
                    </td>
                </tr>
                <table-loader target="mobile" :loading="loading" />
            </tbody>
        </table>
        <div v-if="synths && !synths.length" class="cursor-pointer bg-main text-center flex justify-center w-full mt-3">
            No synths to show
        </div>
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
            <span class="py-3 px-4"> All Synths </span>

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
                <th>Price long</th>
                <th>Price short</th>
                <th></th>
            </thead>
            <tbody class="border-t bg-main text-base">
                <tr v-for="(synth, key) in synths" :key="key" class="cursor-pointer border-b bg-main basic-hover">
                    <td class="px-4 py-2 font-semibold flex">
                        <img src="@/assets/images/zombie.png" class="w-6 h-6" />
                        <router-link :to="{ name: 'Markets', params: { synth: synth.tokenId } }">
                            &nbsp;{{ synth.tokenSymbol }}
                        </router-link>
                    </td>
                    <td>{{ synth.price }}</td>
                    <td>{{ synth.price }}</td>
                    <router-link :to="{ name: 'Markets', params: { synth: synth.tokenId } }">
                        <img src="@/assets/images/arrow-right.svg" class="cursor-pointer" />
                    </router-link>
                </tr>
                <table-loader target="mobile" :loading="loading" />
            </tbody>
        </table>
    </div>
</template>

<script>
import ExploreTableLoader from "@/components/loader/ExploreTableLoader.vue"

export default {
    components: {
        "table-loader": ExploreTableLoader,
    }
}
</script>
<script setup>
import { ref, computed } from "vue"
import { useSynthsSDK } from "../composables/useSynthsSDK"

const { loading, lspAssets, recentSynthData } = useSynthsSDK()

const filter_string = ref("")
const synths = computed(() => {
    if (!loading.value) {
        return recentSynthData.value.filter((synth) =>
            synth.tokenSymbol.toLowerCase().includes(filter_string.value.toLowerCase())
        )
    }
})

const assets = computed(() => {
    if (!loading.value) {
        return lspAssets.value
        /*
        return lspAssets.value.filter((synth) =>
            synth.toLowerCase().includes(filter_string.value.toLowerCase())
        )
        */
    }
})
const filter = (event) => (filter_string.value = event.target.value)
</script>
