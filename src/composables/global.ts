import { reactive, toRefs } from "vue"
import { web3 } from "@/plugins/web3"

let newNotificationTimer

const globalState = reactive({
    //Block NUmber
    blockNumber: 0 as number,

    //Notifications
    isNotificationOpen: false as boolean,
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
            title: "Title2",
            content: "Transaction sent. Minting 8 Long & 8 Short with 4 ETH",
        },
    ] as object[],
    newNotifications: [] as object[],
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

    const deleteNotification = (index: number) => {
        globalState.notifications.splice(index, 1)
    }

    const deleteNewNotification = (index: number) => {
        clearTimeout(newNotificationTimer)
        globalState.notifications.push(globalState.newNotifications[index])
        globalState.newNotifications.splice(index, 1)
    }

    const addNewNotifications = (payload: object) => {
        globalState.newNotifications.push(payload)
        newNotificationTimer = setTimeout(() => {
            globalState.notifications.push(payload)
            globalState.newNotifications.shift()
        }, 10000)
    }

    return {
        state: toRefs(globalState),

        //Block NUmber
        setBlockNumber,
        loadBlockNumber,

        //Notifications
        toggleNotificationOpen,
        deleteNotification,
        deleteNewNotification,
        addNewNotifications,
    }
}
