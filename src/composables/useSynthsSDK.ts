import { ref, computed } from "vue"
import Synths, { getRecentSynthData, getTotalMarketData } from "synths-sdk"
import { defaultAssetsConfig } from "synths-sdk/dist/src/lib/config/index"
import { Web3Provider } from "@ethersproject/providers"

const loading = ref(true)
const data = ref({})
const synthsSDK = ref()
const totalMarketData = ref()
const recentSynthData = ref()
const lspPortfolio = ref()

export function useSynthsSDK() {
    /**
     * @notice Initialize the synths-sdk and load market data.
     * @param provider The web3 provider instance.
     */
    async function init(provider: Web3Provider) {
        loading.value = true

        const networkId: number = (await provider.getNetwork()).chainId
        synthsSDK.value = await Synths.create({ ethersProvider: provider })
        totalMarketData.value = await getTotalMarketData([networkId], defaultAssetsConfig)
        recentSynthData.value = await getRecentSynthData(networkId, defaultAssetsConfig)
        lspPortfolio.value = await synthsSDK.value.getLSPPortfolio(provider.getSigner())

        loading.value = false
    }

    /**
     * @notice Connect the sdk to a synth.
     * @param param The synth identifier.
     * TODO Remove function.
     */
    async function connectTo(param: string) {
        const asset = await synthsSDK.value.connectAsset(param)
        const empState = await asset.getEmpState()

        // Store all relevant data about a synth
        data.value[param] = {
            empState: empState,
        }
    }

    return {
        loading: computed(() => loading.value),
        data: computed(() => data.value),
        synthsSDK: computed(() => synthsSDK.value),
        totalMarketData: computed(() => totalMarketData.value),
        recentSynthData: computed(() => recentSynthData.value),
        lspPortfolio: computed(() => lspPortfolio.value),
        connectTo,
        init,
    }
}
