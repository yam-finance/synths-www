import { computed, ref, watchEffect } from "vue"
import { Web3Provider } from "@ethersproject/providers"
import { getInstance } from "@snapshot-labs/lock/plugins/vue3"
import networks from "@snapshot-labs/snapshot.js/src/networks.json"
import { formatUnits } from "@ethersproject/units"
import { useSynthsSDK } from "./useSynthsSDK"

let auth: any
const defaultNetwork: any = import.meta.env.VITE_DEFAULT_NETWORK || Object.keys(networks)[0]
const { init } = useSynthsSDK();

const state = ref({
    account: "",
    network: networks[defaultNetwork],
    authLoading: false,
    etherscanlink: "",
    walletConnectType: null,
    ethersProvider: Web3Provider
})

// TODO Initialize with default provider if wallet is not connected
watchEffect(() => { 
    console.log("State changed!");
    init(state.value.ethersProvider);
})

export function useWeb3() {
    async function login(connector = "injected") {
        auth = getInstance()
        state.value.authLoading = true
        await auth.login(connector)
        if (auth.provider.value) {
            auth.web3 = new Web3Provider(auth.provider.value, "any")
            await loadProvider()
        }
        state.value.authLoading = false
    }

    async function logout() {
        auth = getInstance()
        await auth.logout() 
    }

    async function loadProvider() {
        try {
            if (auth.provider.value.removeAllListeners && !auth.provider.value.isTorus)
                auth.provider.value.removeAllListeners()
            if (auth.provider.value.on) {
                auth.provider.value.on("chainChanged", async (chainId) => {
                    handleChainChanged(parseInt(formatUnits(chainId, 0)))
                })
                auth.provider.value.on("accountsChanged", async (accounts) => {
                    if (accounts.length !== 0) {
                        state.value.account = accounts[0]
                        await login()
                    }
                })
                // auth.provider.on('disconnect', async () => {});
            }
            state.value.ethersProvider = auth.web3;
            let network, accounts
            try {
                ;[network, accounts] = await Promise.all([
                    auth.web3.getNetwork(),
                    auth.web3.listAccounts(),
                ])
            } catch (e) {
                console.log(e)
            }
            console.log("Network", network)
            console.log("Accounts", accounts)
            handleChainChanged(network.chainId)
            const acc = accounts.length > 0 ? accounts[0] : null

            state.value.account = acc
            state.value.etherscanlink = "https://etherscan.io/address/" + acc

            state.value.walletConnectType = auth.provider.value?.wc?.peerMeta?.name || "unknown"
        } catch (e) {
            state.value.account = ""

            return Promise.reject(e)
        }
    }

    function handleChainChanged(chainId) {
        if (!networks[chainId]) {
            networks[chainId] = {
                ...networks[defaultNetwork],
                chainId,
                name: "Unknown",
                network: "unknown",
                unknown: true,
            }
        }
        state.value.network = networks[chainId]
    }

    return {
        login,
        logout,
        loadProvider,
        handleChainChanged,
        web3: computed(() => state.value),
    }
}
