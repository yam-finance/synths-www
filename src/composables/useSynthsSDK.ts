import { ref, computed } from "vue"
import Synths, { getRecentSynthData, getTotalMarketData } from "synths-sdk"
import { JsonRpcProvider } from "@ethersproject/providers"
// TOOD Remove after testphase.
import { defaultAssetsConfig, defaultTestAssetsConfig } from "synths-sdk/dist/src/lib/config/index"

const loading = ref(true)
const data = ref({})
const totalMarketData = ref()
const recentSynthData = ref()
const lspPortfolio = ref()
const totalSynthsMinted = ref(0)
const totalPortfolioValue = ref(0)
let synthsSDK: Synths

export function useSynthsSDK() {
    /**
     * @notice Initialize the synths-sdk and load market data.
     * @param provider The web3 provider instance.
     */
    async function init(provider: JsonRpcProvider, networkId: number) {
        loading.value = true

        const POLYSCAN_API_KEY = import.meta.env.VITE_POLYSCAN_API_KEY as string

        synthsSDK = await Synths.create({ ethersProvider: provider, userAssetsConfig: defaultTestAssetsConfig })
        totalMarketData.value = await getTotalMarketData([networkId], synthsSDK.config, POLYSCAN_API_KEY)
        recentSynthData.value = await getRecentSynthData(networkId, synthsSDK.config, POLYSCAN_API_KEY)

        if ((await provider.listAccounts()).length != 0) {
            const portfolio = await synthsSDK.getLSPPortfolio()
            lspPortfolio.value = portfolio

            for (const synth of portfolio) {
                if (synth.balance.toNumber() > 0) {
                    totalSynthsMinted.value += synth.balance.toNumber()
                    totalPortfolioValue.value += Number(synth.price) * synth.balance.toNumber()
                }
            }
        }

        loading.value = false
    }

    /**
     * @notice Connect the sdk to a synth.
     * @param param The synth identifier.
     * TODO Remove function.
     */
    async function connectTo(param: string) {
        const asset = synthsSDK.connectAsset(param)
        const empState = await asset.getEmpState()

        // Store all relevant data about a synth
        data.value[param] = {
            empState: empState,
        }
    }

    return {
        loading: computed(() => loading.value),
        data: computed(() => data.value),
        totalMarketData: computed(() => totalMarketData.value),
        recentSynthData: computed(() => recentSynthData.value),
        lspPortfolio: computed(() => lspPortfolio.value),
        totalSynthsMinted: computed(() => totalSynthsMinted.value),
        totalPortfolioValue: computed(() => totalPortfolioValue.value),
        connectTo,
        init,
    }
}
