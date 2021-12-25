import { ref, computed } from "vue"
import { ethers } from "ethers"
import Synths, { getRecentSynthData, getTotalMarketData, getSynthData } from "synths-sdk"
import { JsonRpcProvider } from "@ethersproject/providers"
// TOOD Remove after testphase.
import { defaultAssetsConfig, defaultTestAssetsConfig } from "synths-sdk/dist/src/lib/config"
import { AssetConfig, isAssetConfigLSP } from "synths-sdk/dist/src/types/assets.t"

let synthsSDK: Synths
const POLYSCAN_API_KEY = import.meta.env.VITE_POLYSCAN_API_KEY as string
const loading = ref(true)
const data = ref({})
const totalMarketData = ref()
const recentSynthData = ref()
const lspAssets = ref({})
const lspPortfolio = ref()
const totalSynthsMinted = ref(0)
const totalPortfolioValue = ref(0)

export function useSynthsSDK() {
    /**
     * @notice Initialize the synths-sdk and load market data.
     * @param provider The web3 provider instance.
     * @param networkId The chainid to initialize.
     */
    async function init(provider: JsonRpcProvider, networkId: number) {
        loading.value = true


        synthsSDK = await Synths.create({ ethersProvider: provider, userAssetsConfig: defaultTestAssetsConfig })
        totalMarketData.value = await getTotalMarketData([networkId], synthsSDK.config, POLYSCAN_API_KEY)
        recentSynthData.value = await getRecentSynthData(networkId, synthsSDK.config, POLYSCAN_API_KEY)

        if ((await provider.listAccounts()).length != 0) {
            const portfolio = await synthsSDK.getLSPPortfolio()
            lspPortfolio.value = portfolio
            totalSynthsMinted.value = 0
            totalPortfolioValue.value = 0

            for (const synth of portfolio) {
                const formattedBalance = Number(ethers.utils.formatEther(synth.balance))
                if (formattedBalance > 0) {
                    totalSynthsMinted.value += formattedBalance
                    totalPortfolioValue.value += Number(synth.price) * formattedBalance
                }
            }
        }

        await getLspAssets()

        loading.value = false
    }

    /**
     * @notice Loads the latest synth data.
     * @dev Can be used for explore page.
     */
    async function getLspAssets() {
        const assetsConfig = synthsSDK.assets
        
        if (assetsConfig) {
            for (const assetCategory in assetsConfig) {
                const latestSynth: AssetConfig = assetsConfig[assetCategory][0]
                if (isAssetConfigLSP(latestSynth)) {
                    
                    const tokenData = {}
                    let shortData;
                    let longData;

                    for (const pool of latestSynth.pools) {
                        const longOrShortToken = await getSynthData(
                            pool.location, 
                            pool.address, 
                            latestSynth.collateral, 
                            "137", 
                            POLYSCAN_API_KEY
                        )

                        if (longOrShortToken) {
                            if (longOrShortToken.tokenSymbol.startsWith("s")) {
                                shortData = longOrShortToken;
                            } else {
                                longData = longOrShortToken;
                            }
                        }
                    }

                    lspAssets.value[assetCategory] = {
                        "address": latestSynth.lsp.address,
                        "short": shortData,
                        "long": longData
                    };
                }
            }
        }
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
        lspAssets: computed(() => lspAssets.value),
        connectTo,
        init,
    }
}
