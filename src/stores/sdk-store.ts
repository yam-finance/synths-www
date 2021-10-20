import { ref, Ref, computed } from "vue"
import Synths from "synths-sdk"
import Asset from "synths-sdk/dist/src/lib/Asset"
import { providers } from "ethers"

export function useSynthsSDK(provider: providers.JsonRpcProvider) {
    const loading = ref(false)
    const data = ref()

    // Connect the sdk to a synth
    async function connectTo(param: string) {
        loading.value = true

        const synthsSDK = await Synths.create({ ethersProvider: provider })
        const asset = await synthsSDK.connectAsset(param)
        const empState = await asset.getEmpState()

        // Store all relevant data about a synth
        data.value = {
            empState,
        }

        loading.value = false
    }

    return {
        loading: computed(() => loading.value),
        data: computed(() => data.value),
        connectTo,
    }
}
