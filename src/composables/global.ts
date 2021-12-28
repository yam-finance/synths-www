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
    /**
     * @notice Set ETH block number globally.
     */
    const setBlockNumber = (payload: number) => {
        console.log("setBlockNumber", payload)
        globalState.blockNumber = payload
    }

    /**
     * @notice Loads ETH block number
     */
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

    /**
     * @notice Toggles Notification Layout.
     */
    const toggleNotificationOpen = () => {
        globalState.isNotificationOpen = !globalState.isNotificationOpen
    }

    /**
     * @notice Delete notification from Layout.
     */
    const deleteNotification = (index: number) => {
        globalState.notifications.splice(index, 1)
    }

    /**
     * @notice Delete notification from global view and put it to Layout.
     */
    const deleteNewNotification = (index: number) => {
        clearTimeout(newNotificationTimer)
        globalState.notifications.push(globalState.newNotifications[index])
        globalState.newNotifications.splice(index, 1)
    }

    /**
     * @notice Add global notifications.
     *
     * @param payload: Object Notification Data
     * @param payload.style: Number  0 - information style, 1 - success style, 2 - error style
     * @param payload.link: String  Third-party link
     * @param payload.title String  Notification Title
     * @param payload.content String  Notification text content
     * @param saveGlobally: Boolean Saved notification to side bar by default
     */
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
