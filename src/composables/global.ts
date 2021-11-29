import { reactive, toRefs } from "vue"
import { web3 } from "@/plugins/web3"

let newNotificationTimer

const globalState = reactive({
    //Block NUmber
    blockNumber: 0 as number,

    //Notifications
    isNotificationOpen: false as boolean,
    notifications: [] as object[],
    newNotifications: [] as object[],
})

export function globalStore() {
    //Block NUmber
    const setBlockNumber = (payload: number) => {
        console.log("setBlockNumber", payload)
        globalState.blockNumber = payload
    }

    const loadBlockNumber = () => {
        web3.getBlockNumber().then((res: number) => {
            setBlockNumber(res)
        })
        setInterval(() => {
            web3.getBlockNumber().then((res: number) => {
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

    const addNewNotifications = (payload: object, saveGlobally = true) => {
        globalState.newNotifications.push(payload)
        newNotificationTimer = setTimeout(() => {
            if (saveGlobally) globalState.notifications.push(payload)
            globalState.newNotifications.shift()
        }, 3000)
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
