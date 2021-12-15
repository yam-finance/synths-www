import { computed, markRaw, ref, Ref } from "vue"
import { useEthers } from "./useEthers"
import { Injected, InjectedProvider, InjectedProviderRpcError } from "@/wallets/injected"
import { Walletconnect, WalletConnectProvider } from "../wallets/walletconnect"


export type WalletProvider = InjectedProvider | WalletConnectProvider
export type ConnectionState = "none" | "connecting" | "connected"
export type WalletName = "injected" | "walletconnect"
export type OnConnectedCallback = (provider: WalletProvider) => void
export type OnDisconnectCallback = (msg: string) => void
export type OnAccountsChangedCallback = (accounts: string[]) => void
export type OnChainChangedCallback = (chainId: number) => void

// ========================= state =========================

const provider = ref<WalletProvider | null>(null)
const status = ref<ConnectionState | null>(null)
const walletName = ref<WalletName | null >(null)
const error = ref("")

const onDisconnectCallback = ref<OnDisconnectCallback | null>(null)
const onAccountsChangedCallback = ref<OnAccountsChangedCallback | null>(null)
const onChainChangedCallback = ref<OnChainChangedCallback | null>(null)

export function useWallet() {
    const { activate, deactivate } = useEthers()

    function clear() {
        provider.value = null
        status.value = null
        walletName.value = null
        error.value = ""

        onDisconnectCallback.value = null
        onAccountsChangedCallback.value = null
        onChainChangedCallback.value = null
        deactivate()
    }

    async function connect(_walletName: WalletName) {
        let _provider: WalletProvider | null = null

        error.value = ""

        try {
            status.value = "connecting"
            switch (_walletName) {
                case "injected":
                    _provider = (await Injected.connect()) as InjectedProvider
                    if (!_provider.isConnected) throw new Error("metamask is not connected")
                    break
                case "walletconnect":
                    _provider = (await Walletconnect.connect()) as WalletConnectProvider
                    if (!_provider.connected) throw new Error("walletconnect is not connected")
                    break
                default:
                    throw new Error("Connect Error: wallet name not found")
            }
        } catch (err: any) {
            clear()
            error.value = `Failed to connect: ${err.message}`
            return
        }

        provider.value = markRaw(_provider)
        walletName.value = _walletName
        status.value = "connected"

        // EIP-1193 subscriber
        subscribeDisconnect()
        subscribeAccountsChanged()
        subscribeChainChanged()

        try {
            await activate(provider.value as WalletProvider)
        } catch (err: any) {
            clear()
            error.value = `Failed to load data: ${err.message}`
            return
        }
    }

    async function disconnect() {
        // note: metamask can't disconnect by provider
        if (walletName.value === "walletconnect") {
            try {
                await (provider.value as WalletConnectProvider).disconnect()
            } catch (err: any) {
                console.error(err.message)
            }
        }
        clear()
        onDisconnectCallback.value && onDisconnectCallback.value("Disconnect from Dapp")
    }

    // ========================= EIP-1193 subscriber =========================

    function subscribeDisconnect() {
        switch (walletName.value) {
            case "injected":
                ;(provider.value as InjectedProvider).on("disconnect", (err: InjectedProviderRpcError) => {
                    clear()
                    onDisconnectCallback.value && onDisconnectCallback.value(err.message)
                })
                break
            case "walletconnect":
                // Q: why it trigger twice when user click disconnect?
                // source code: https://github.com/WalletConnect/walletconnect-monorepo/blob/0871582be273f8c21bb1351315d649ea47ee70b7/packages/providers/web3-provider/src/index.ts#L277
                ;(provider.value as WalletConnectProvider).on("disconnect", (code: number, reason: string) => {
                    clear()
                    onDisconnectCallback.value && onDisconnectCallback.value(`${code}: ${reason}`)
                })
                break
        }
    }

    function subscribeAccountsChanged() {
        switch (walletName.value) {
            case "injected":
                ;(provider.value as InjectedProvider).on("accountsChanged", async (accounts: string[]) => {
                    try {
                        await activate(provider.value as WalletProvider)
                        onAccountsChangedCallback.value && onAccountsChangedCallback.value(accounts)
                    } catch (err: any) {
                        error.value = `Failed when changing account: ${err.message}`
                        return
                    }
                })
                break
            case "walletconnect":
                ;(provider.value as WalletConnectProvider).on("accountsChanged", async (accounts: string[]) => {
                    try {
                        await activate(provider.value as WalletProvider)
                        onAccountsChangedCallback.value && onAccountsChangedCallback.value(accounts)
                    } catch (err: any) {
                        error.value = `Failed when changing account: ${err.message}`
                        return
                    }
                })
                break
        }
    }

    function subscribeChainChanged() {
        switch (walletName.value) {
            case "injected":
                ;(provider.value as InjectedProvider).on("chainChanged", async (hexChainId: string) => {
                    // Changing network might lead to disconnect so the provider would be deleted.
                    if (!provider.value) {
                        error.value = `Failed when changing chain: missing provider`
                        return
                    }

                    try {
                        const chainId = parseInt(hexChainId, 16)
                        await activate(provider.value as WalletProvider)
                        onChainChangedCallback.value && onChainChangedCallback.value(chainId)
                    } catch (err: any) {
                        error.value = `Failed when changing chain: ${err.message}`
                        return
                    }
                })
                break
            case "walletconnect":
                ;(provider.value as WalletConnectProvider).on("chainChanged", async (chainId: number) => {
                    // Changing network might lead to disconnect so the provider would be deleted.
                    if (!provider.value) {
                        error.value = `Failed when changing chain: missing provider`
                        return
                    }

                    try {
                        await activate(provider.value as WalletProvider)
                        onChainChangedCallback.value && onChainChangedCallback.value(chainId)
                    } catch (err: any) {
                        error.value = `Failed when changing chain: ${err.message}`
                        return
                    }
                })
                break
        }
    }

    // ========================= callback =========================

    function onDisconnect(callback: OnDisconnectCallback) {
        onDisconnectCallback.value = callback
    }

    function onAccountsChanged(callback: OnAccountsChangedCallback) {
        onAccountsChangedCallback.value = callback
    }

    function onChainChanged(callback: OnChainChangedCallback) {
        onChainChangedCallback.value = callback
    }

    // ========================= getters =========================

    const isConnected = computed(() => {
        return status.value === "connected";
    })

    return {
        // state
        provider: provider as Ref<WalletProvider | null>,
        status,
        walletName,
        error,

        // getters
        isConnected,

        // methods
        connect,
        disconnect,
        // helpers
        login: (wallet: WalletName = "injected")=>connect(wallet),
        logout: () => disconnect(),

        // callback
        onDisconnect,
        onAccountsChanged,
        onChainChanged,
    }
}
