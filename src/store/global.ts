import { reactive, toRefs } from "vue"
import { web3 } from "@/plugins/web3"

const globalState = reactive({
    blockNumber: 0,
})

export default () => {
    const setBlockNumber = (payload: number) => {
        globalState.blockNumber = payload
    }

    const loadBlockNumber = () => {
        web3.getBlockNumber().then((res: number) => {
            setBlockNumber(res)
        })
        setInterval(() => {
            web3.getBlockNumber().then((res: number) => {
                console.log(res)
                setBlockNumber(res)
            })
        }, 40000)
    }

    return {
        setBlockNumber,
        loadBlockNumber,
        state: toRefs(globalState),
    }
}
