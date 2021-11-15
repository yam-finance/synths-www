import { ref, computed } from "vue"
import Synths, {getTotalMarketData, getRecentSynthData} from "synths-sdk"
import {Web3Provider} from "@ethersproject/providers";

const loading = ref(true)
const data = ref({})
const totalMarketData = ref()
const recentSynthData = ref()
const lspPortfolio = ref()
let synthsSDK: Synths;

export function useSynthsSDK() {

    /**
     * @notice Initialize the synths-sdk and load market data.
     * @param provider The web3 provider instance.
     */
    async function init(provider: Web3Provider) {
        const networkId: number = (await provider.getNetwork()).chainId;
        synthsSDK = await Synths.create({ ethersProvider: provider });
        recentSynthData.value = await getRecentSynthData(networkId);
        totalMarketData.value = await getTotalMarketData([networkId]);
        // lspPortfolio.value = await getLSPPortfolio(provider.getSigner()._address);
    }

    /**
     * @notice Connect the sdk to a synth.
     * @param param The synth identifier.
     * TODO Remove function.
     */
    async function connectTo(param: string) {
        loading.value = true

        const asset = await synthsSDK.connectAsset(param);
        const empState = await asset.getEmpState();

        data.value[param] = {
            "empState": empState
        };

        loading.value = false
    }

    return {
        loading: computed(() => loading.value),
        data: computed(() => data.value),
        totalMarketData: computed(() => totalMarketData.value),
        recentSynthData: computed(() => recentSynthData.value),
        lspPortfolio: computed(() => lspPortfolio.value),
        synthsSDK,
        connectTo,
        init
    }
}
