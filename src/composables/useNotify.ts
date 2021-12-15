import { ref, readonly } from "vue"

export const NotificationStyles = {
    withoutLink: 0,
    withLink: 1,
} as const

type NotificationStyle = typeof NotificationStyles[keyof typeof NotificationStyles]
type NotificationBase = {
    title: string
    content: string
}
interface  NotificationWithoutLink extends NotificationBase {
    link: null
    style: typeof NotificationStyles.withoutLink
}
interface NotificationWithLink extends NotificationBase {
    link: string
    style: typeof NotificationStyles.withLink
}

type Notification<T= NotificationStyle> = T extends typeof NotificationStyles.withoutLink
    ? NotificationWithoutLink
    : T extends typeof NotificationStyles.withLink
        ? NotificationWithLink
        : never

type NotificationStorable = Notification & { id: number }
type NotificationTimerQueue = [NotificationStorable["id"], ReturnType<typeof setTimeout>][]


// Reactive constants
const notificationCount = ref(0)
const recentNotifications = ref<NotificationStorable[]>([])
const storedNotifications = ref<NotificationStorable[]>([])
const queuedNotifications = ref<NotificationTimerQueue>([])
const isNotificationOpen = ref<boolean>(false)

export type { Notification, NotificationWithLink, NotificationWithoutLink }

export function useNotify() {
    const removeNotification = (id:number) =>{
        // search stored notifications for matching id.
        const index = storedNotifications.value.findIndex(n => n.id === id)
        // If the notification is not found, it means it has already been removed
        if (index !== -1) {
            // Remove from stored notifications
            storedNotifications.value.splice(index, 1)
        }
    }
    const clearNotification = (id: number) => {
        // find notification in queue
        const index = queuedNotifications.value.findIndex(([notificationId]) => notificationId === id)
        // clear timer if exists
        if (index > -1) {
            const notificationTimer = queuedNotifications.value[index][1]
            // clear timer
            clearTimeout(notificationTimer)
            // remove from queue
            queuedNotifications.value.splice(index, 1)
        }
        // remove from recent notifications
        recentNotifications.value = recentNotifications.value.filter((notification) => notification.id !== id)
    }
    const toggleNotification = () => {
        isNotificationOpen.value = !isNotificationOpen.value
    }
    const notifyUser = (notification: Notification, storeNotification = true, timeOut = 3000) => {
        //assign a new id to notification
        const id = notificationCount.value
        const newNotification: NotificationStorable = Object.assign({ id }, notification)
        // define handler to store or clear notification after the timeout.
        const afterTimeOut = () => {
            // store notification if applicable
            if (storeNotification) storedNotifications.value.push(newNotification)
            clearNotification(id)
        }
        // increment notification count
        notificationCount.value++
        // store notification as a recent notification
        recentNotifications.value.push(newNotification)
        // store notifications that have yet to timeout
        queuedNotifications.value.push([newNotification.id, setTimeout(afterTimeOut, timeOut)])
    }
    return {
        // methods
        notifyUser,
        clearNotification,
        removeNotification,
        toggleNotification,
        // state
        isNotificationOpen: readonly(isNotificationOpen),
        recentNotifications: readonly(recentNotifications),
        storedNotifications: readonly(storedNotifications),
        queuedNotifications: readonly(queuedNotifications),
    }
}
