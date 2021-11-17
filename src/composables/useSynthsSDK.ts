import { ref, computed } from "vue"
import Synths, { getTotalMarketData, getRecentSynthData } from "synths-sdk"
import { defaultAssetsConfig } from "synths-sdk/dist/src/lib/config/index"
import { Web3Provider } from "@ethersproject/providers"

const loading = ref(true)
const data = ref({})
const totalMarketData = ref()
const recentSynthData = ref()
const lspPortfolio = ref()
const synthsSDK = ref()

export function useSynthsSDK() {
    /**
     * @notice Initialize the synths-sdk and load market data.
     * @param provider The web3 provider instance.
     */
    async function init(provider: Web3Provider) {
        loading.value = true

        const networkId: number = (await provider.getNetwork()).chainId
        console.log(networkId)
        synthsSDK.value = await Synths.create({ ethersProvider: provider })
        recentSynthData.value = await getRecentSynthData(networkId, defaultAssetsConfig)
        totalMarketData.value = await getTotalMarketData([networkId], defaultAssetsConfig)
        console.log(recentSynthData.value)
        console.log(totalMarketData.value)
        // lspPortfolio.value = await getLSPPortfolio(provider.getSigner()._address);

        loading.value = false
    }

    /**
     * @notice Connect the sdk to a synth.
     * @param param The synth identifier.
     * TODO Remove function.
     */
    async function connectTo(param: string) {
        loading.value = true

        const asset = synthsSDK.value.connectAsset(param)
        const empState = await asset.getEmpState()

        data.value[param] = { "empState": empState }

        loading.value = false
    }

    return {
        loading: computed(() => loading.value),
        data: computed(() => data.value),
        totalMarketData: computed(() => totalMarketData.value),
        recentSynthData: computed(() => recentSynthData.value),
        lspPortfolio: computed(() => lspPortfolio.value),
        synthsSDK: computed(() => synthsSDK.value),
        connectTo,
        init,
    }
}
