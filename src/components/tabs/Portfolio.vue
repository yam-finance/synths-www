<template>
    <div class="w-full font-semibold">
        <div class="w-full h-12 py-3 px-3 border-b bd-main">
            <span class="text-sm txt-main">Portfolio</span>
        </div>
        <div class="p-4 grid md:grid-cols-2 2xl:grid-cols-4 gap-4 text-white border-b bd-main">
            <div class="card rounded-lg bg-light px-6 py-4">
                <div class="text-lg font-bold">$42,000</div>
                <div class="text-xs txt-main">Total Portfolio Value</div>
            </div>
            <div class="card rounded-lg bg-light px-6 py-4">
                <div class="text-lg font-bold">5</div>
                <div class="text-xs txt-main">Synths Minted</div>
            </div>
            <div class="card rounded-lg bg-light px-6 py-4">
                <div class="flex">
                    <div class="text-lg font-bold">200</div>
                    <div class="text-xs txt-main ml-2 mt-2">Success</div>
                </div>
                <div class="text-xs txt-main flex">
                    Portential rewards this week
                    <img src="../../assets/images/help-circle.png" class="ml-2">
                </div>
            </div>
            <div class="card rounded-lg bg-light px-6 py-4">
                <div class="flex">
                    <div class="text-lg font-bold">200</div>
                    <div class="text-xs txt-main ml-2 mt-2">Success in wallet</div>
                </div>
                <div class="text-xs txt-main flex">
                    <span class="rounded-xl wallet-btn text-xs text-white px-2 pb-0.5 font-bold">Redeem</span>
                    &nbsp;for
                    <span class="text-xs text-white font-normal">&nbsp;30 UMA</span>
                    <img src="../../assets/images/help-circle.png" class="ml-2 h-4">
                </div>
            </div>
        </div>

        <div class="w-full h-12 py-3 px-4 border-b bd-main text-white text-lg">
            Your Synths
        </div>

        <table class="text-white border-b bd-main w-full font-normal">
            <thead class="text-sm txt-main text-left">
                <th class="py-2 px-4">Synths</th>
                <th>Balance</th>
                <th>Amount Minted</th>
                <th>LP Amount</th>
                <th>Price</th>
                <th>Collateral</th>
                <th>Status</th>
                <th></th>
            </thead>
            <tbody class="border-t bd-main text-md">
                <tr
                    v-for="(synth, key) in synths"
                    :key="key"
                    class="border-b bd-main"
                >
                    <td class="px-4 py-2 font-semibold flex">
                        <img src="../../assets/images/group.png">
                        &nbsp;{{synth.name}}
                    </td>
                    <td>{{synth.balance}}</td>
                    <td>{{synth.minted_qty}}</td>
                    <td>{{synth.lp_qty}}</td>
                    <td>${{synth.price}}</td>
                    <td>{{synth.collateral}}</td>
                    <td>
                        <div v-if="synth.status">
                            <span class="text-white">Live</span>
                        </div>
                        <div v-else>
                            <span class="txt-main">Expired</span>
                            &nbsp;
                            <span class="rounded-xl wallet-btn text-xs text-white px-2 pb-0.5 my-auto font-bold">Settle</span>
                        </div>
                    </td>
                    <td>
                        <img src="../../assets/images/arrow-right.png" class="cursor-pointer">
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
            status: 1
        },
        {
            id: 2,
            name: "ETH/DAI IL Long",
            balance: 120,
            minted_qty: 120,
            lp_qty: 120,
            price: 120,
            collateral: "ETH",
            status: 1
        },
        {
            id: 3,
            name: "ETH/DAI IL Long",
            balance: 120,
            minted_qty: 120,
            lp_qty: 120,
            price: 120,
            collateral: "ETH",
            status: 0
        },
        {
            id: 4,
            name: "ETH/DAI IL Long",
            balance: 120,
            minted_qty: 120,
            lp_qty: 120,
            price: 120,
            collateral: "ETH",
            status: 1
        },
        {
            id: 5,
            name: "ETH/DAI IL Long",
            balance: 120,
            minted_qty: 120,
            lp_qty: 120,
            price: 120,
            collateral: "ETH",
            status: 1
        }
    ];
    export default {
        name: "portfolio",
        data() {
            return {
                synths,
            };
        },
    }
</script>

<style scoped>

</style>
