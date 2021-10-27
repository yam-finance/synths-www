import { reactive, toRefs } from "vue"
import { web3 } from "@/plugins/web3"

const globalState = reactive({
    //Block NUmber
    blockNumber: 0,

    //Notifications
    isNotificationOpen: false,
    notifications: [
        {
            style: 0,
            link: "https://github.com/yam-finance/synths-www/issues/75",
            title: "Title",
            content: "Transaction sent. Minting 8 Long & 8 Short with 4 ETH",
        },
        {
            style: 1,
            link: "https://github.com/yam-finance/synths-www/issues/75",
            title: "Title",
            content: "Transaction sent. Minting 8 Long & 8 Short with 4 ETH",
        },
    ],
})

export default () => {
    //Block NUmber
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

    //Notifications
    const toggleNotificationOpen = () => {
        globalState.isNotificationOpen = !globalState.isNotificationOpen
    }

    return {
        state: toRefs(globalState),

        //Block NUmber
        setBlockNumber,
        loadBlockNumber,

        //Notifications
        toggleNotificationOpen,
    }
}
