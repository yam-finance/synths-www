import { computed, reactive, toRefs } from "vue"
import { web3 } from "@/plugins/web3"

let newNotificationTimer

const globalState = reactive({
    //Screen width
    screenWidth: 0 as number,

    //Block NUmber
    blockNumber: 0 as number,

    //Notifications
    isNotificationOpen: false as boolean,
    notifications: [] as object[],
    newNotifications: [] as object[],
})

export function globalStore() {
    //Screen width
    const setScreenWidth = (payload: number) => {
        globalState.screenWidth = payload
    }

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

        //Screen Width
        setScreenWidth,
        isXl: computed(() => globalState.screenWidth >= 1280),
        isLg: computed(() => globalState.screenWidth >= 1024),
        isMd: computed(() => globalState.screenWidth >= 768),

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
