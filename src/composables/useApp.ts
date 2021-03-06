import { ref, computed, reactive } from "vue"
import { getInstance } from "@snapshot-labs/lock/plugins/vue3"
import { useWeb3, initSDK } from "@/composables/useWeb3"

const state = reactive({
    init: false,
    loading: false,
})

const spaces = ref({})
const strategies = ref({})
const explore: any = ref({})

const { login } = useWeb3()

export function useApp() {
    async function init() {
        const auth = getInstance()
        state.loading = true

        auth.getConnector().then(async (connector) => {
            if (connector) {
                await login(connector)
            } else {
                await initSDK()
            }
        })
        state.init = true
        state.loading = false
    }

    return {
        init,
        app: computed(() => state),
    }
}
