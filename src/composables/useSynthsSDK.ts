import { ref, computed } from "vue"
import Synths, {getTotalMarketData, getRecentSynthData} from "synths-sdk"
import {Web3Provider} from "@ethersproject/providers";

const loading = ref(true)
const data = ref({})
const totalMarketData = ref()
const recentSynthData = ref()
let synthsSDK: Synths;

export function useSynthsSDK() {

    /**
     * @notice Initialize the synths-sdk and load market data.
     * @param provider The web3 provider instance.
     */
    async function init(provider: Web3Provider) {
        synthsSDK = await Synths.create({ ethersProvider: provider });
        // TODO Update network array.
        totalMarketData.value = await getTotalMarketData([1]);
        recentSynthData.value = await getRecentSynthData(1);
        connectTo("upunks-0921")
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
        synthsSDK,
        connectTo,
        init
    }
}
