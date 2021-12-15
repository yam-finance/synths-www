import detectEthereumProvider from '@metamask/detect-provider'
import { providers } from 'ethers'

export enum ChainId {
    Hardhat = 31337,
    Mainnet = 1,
    Ropsten = 3,
    Rinkeby = 4,
    Goerli = 5,
    Kovan = 42,
    xDai = 100,
    Rinkarby = 421611,
    Arbitrum = 42161,
    Polygon = 137,
}

export const CHAIN_NAMES = {
    [ChainId.Hardhat]: 'Hardhat',
    [ChainId.Mainnet]: 'Mainnet',
    [ChainId.Ropsten]: 'Ropsten',
    [ChainId.Kovan]: 'Kovan',
    [ChainId.Rinkeby]: 'Rinkeby',
    [ChainId.Goerli]: 'Goerli',
    [ChainId.xDai]: 'xDai',
    [ChainId.Rinkarby]: 'Rinkarby',
    [ChainId.Arbitrum]: 'Arbitrum',
    [ChainId.Polygon]: 'Polygon',
}

// @todo add other network details. Refer to https://chainlist.org/
export const NETWORK_DETAILS = {
    [ChainId.Arbitrum]: {
        chainId: '0x' + ChainId.Arbitrum.toString(16),
        chainName: 'Arbitrum',
        nativeCurrency: {
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://arb1.arbitrum.io/rpc'],
        blockExplorerUrls: ['https://arbiscan.io'],
    },
    [ChainId.Rinkarby]: {
        chainId: '0x' + ChainId.Rinkarby.toString(16),
        chainName: 'RinkArby',
        nativeCurrency: {
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://rinkeby.arbitrum.io/rpc'],
        blockExplorerUrls: ['https://rinkeby-explorer.arbitrum.io'],
    },
    [ChainId.xDai]: {
        chainId: '0x' + ChainId.xDai.toString(16),
        chainName: 'xDAI',
        nativeCurrency: {
            symbol: 'xDAI',
            decimals: 18,
        },
        rpcUrls: ['https://rpc.xdaichain.com'],
        blockExplorerUrls: ['https://blockscout.com/poa/xdai'],
    },
    [ChainId.Polygon]: {
        chainId: '0x' + ChainId.Polygon.toString(16),
        chainName: 'Polygon Mainnet',
        nativeCurrency: {
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: ['https://polygon-rpc.com/'],
        blockExplorerUrls: ['https://polygonscan.com/'],
    },
}

export const checkChainId = (chainId:number) => chainId in ChainId

export interface InjectedProvider extends providers.ExternalProvider {
    isMetaMask: boolean
    isConnected: () => boolean
    request: (request: {
        method: string
        params?: any[] | undefined
    }) => Promise<any>
    on: (event: string, callback: (param: any) => void) => void
}

export interface InjectedProviderRpcError extends Error {
    message: string
    code: number
    data?: unknown
}

export class Injected {
    static async check(): Promise<boolean> {
        // @todo try catch
        const provider = await detectEthereumProvider()
        return !!provider
    }

    static async connect() {
        const provider = (await detectEthereumProvider()) as InjectedProvider

        // await provider.request({
        //   method: 'wallet_requestPermissions',
        //   params: [{ eth_accounts: {} }],
        // })
        await provider.request({
            method: 'eth_requestAccounts',
            params: [{ eth_accounts: {} }],
        })

        return provider
    }

    static async switchChain(provider: InjectedProvider, chainId: number) {
        try {
            await provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x' + chainId.toString(16) }], // chainId must be in hexadecimal numbers
            })
        } catch (err: any) {
            try {
                if (err.code === 4902 && checkChainId(chainId)) {
                    await Injected.addChain(
                        provider,
                        NETWORK_DETAILS[chainId as keyof typeof NETWORK_DETAILS],
                    )
                    return
                }
            } catch (err: any) {
                throw new Error(`Failed to add new chain: ${err.message}`)
            }
            throw new Error(`Failed to switch chain: ${err.message}`)
        }
    }

    static async addChain(
        provider: InjectedProvider,
        networkDetails: AddEthereumChainParameter,
    ) {
        return provider.request({
            method: 'wallet_addEthereumChain',
            params: [networkDetails], // chainId must be in hexadecimal numbers
        })
    }
}

// Refer to https://docs.metamask.io/guide/rpc-api.html#other-rpc-methods
export interface AddEthereumChainParameter {
    chainId: string // A 0x-prefixed hexadecimal string
    chainName: string
    nativeCurrency: {
        name?: string
        symbol: string // 2-6 characters long
        decimals: number
    }
    rpcUrls: string[]
    blockExplorerUrls?: string[]
    iconUrls?: string[] // Currently ignored.
}