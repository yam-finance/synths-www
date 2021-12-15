import WalletConnectProvider from "@walletconnect/ethereum-provider"

export { WalletConnectProvider }

export class Walletconnect {
    static async check() {
        return WalletConnectProvider
    }

    static async connect() {
        const provider = new WalletConnectProvider({
            rpc: {
                "1": "https://cloudflare-eth.com",
                "4": "https://eth-rinkeby.alchemyapi.io/v2/NpOuf_5b5E4-z2Sm_mD85ZWmFAkuvuF0",
                "137": "https://polygon-mainnet.g.alchemy.com/v2/NpOuf_5b5E4-z2Sm_mD85ZWmFAkuvuF0",
            },
        })

        // fix: If user reject session, provider.enable() will be stuck and can't be resolved.
        // source code: https://github.com/WalletConnect/walletconnect-monorepo/blob/v1.0/packages/providers/web3-provider/src/index.ts
        return new Promise<WalletConnectProvider>(async (resolve, reject) => {
            provider.on("disconnect", (err, payload) => {
                if (!provider.connected) {
                    console.log(err, payload)
                    reject(new Error("User rejected the request."))
                }
            })
            try {
                await provider.enable()
            } catch (e: any) {
                reject(new Error(e))
                return
            }
            resolve(provider)
        })
    }
}
