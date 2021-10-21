import { ref, computed } from "vue"
import Synths from "synths-sdk"

const loading = ref(true)
const data = ref({})
let synthsSDK;

export function useSynthsSDK() {

    async function init(provider) {
        synthsSDK = await Synths.create({ ethersProvider: provider });
        // TODO Loop to connect to all assets
        connectTo("upunks-0921")
    }

    // Connect the sdk to a synth
    async function connectTo(param: string) {
        loading.value = true

        const asset = await synthsSDK.connectAsset(param);
        const empState = await asset.getEmpState();

        // Store all relevant data about a synth
        data.value[param] = {
            "empState": empState
        };

        loading.value = false
    }

    return {
        loading: computed(() => loading.value),
        data: computed(() => data.value),
        connectTo,
        init
    }
}
