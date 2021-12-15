import { computed, markRaw, ref, Ref } from "vue"
import type { Signer } from "ethers"
import { providers } from "ethers"
import { WalletProvider } from "./useWallet"

type Web3Provider = providers.Web3Provider
type Network = providers.Network
export type { Web3Provider, Signer, Network }

const defaultURL = import.meta.env.VITE_INFURA_URL
const defaultProvider = typeof defaultURL ==="string" ? ref(markRaw(new providers.JsonRpcProvider(defaultURL))) : ref(null)
const isActivated = ref(false)
const provider = ref<Web3Provider | null>(null)
const signer = ref<Signer | null>(null)
const network = ref<Network | null>(null)
const address = ref("")
const balance = ref<bigint>(BigInt(0))

const deactivate = () => {
    defaultProvider.value = null
    isActivated.value = false
    provider.value = null
    signer.value = null
    network.value = null
    address.value = ""
    balance.value = BigInt(0)
}

const activate = async (walletProvider: WalletProvider) => {
    if (!walletProvider) throw new Error("Failed to activate: missing provider")

    const _provider = new providers.Web3Provider(walletProvider as providers.ExternalProvider)
    const _signer = _provider.getSigner()
    const _network = await _provider.getNetwork()
    const _address = await _signer.getAddress()
    const _balance = await _signer.getBalance()

    provider.value = markRaw(_provider)
    signer.value = markRaw(_signer)
    network.value = _network
    address.value = _address
    balance.value = _balance.toBigInt()

    isActivated.value = true
}

export const useEthers = () => {
    const chainId = computed(() => network.value?.chainId)

    return {
        // state
        isActivated,
        provider: provider as Ref<Web3Provider | null>,
        defaultProvider,
        signer: signer as Ref<Signer | null>,
        network,
        address,
        balance,

        // computed
        chainId,

        // methods
        activate,
        deactivate,
    }
}
