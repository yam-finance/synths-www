// @ts-ignore
import { web3 } from "@/plugins/web3.ts";

// @ts-ignore
export default  {
    state: () => ({
        blockNumber: null
    }),
    getters: {
        getBlockNumber: (state:any) => state.blockNumber
    },
    mutations: {
        setBlockNumber(state: any, payload: number) {
            state.blockNumber = payload
        }
    },
    actions: {
        loadBlockNumber({commit}:any) {
          web3.getBlockNumber()
               .then((res:number) => {
                   commit('setBlockNumber', res)
               })
        }
    }
}