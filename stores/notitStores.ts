import { updateNotificationReaded } from '@/services/notification.services'
import { create } from 'zustand'

export interface Notification {
    id: string
    notification: {
        title: string
        body: string
    }
    isReaded: boolean
    customerId: string
    createAt: {
        seconds: number
        nanoseconds: number
    }
    updateAt: {
        seconds: number
        nanoseconds: number
    }
}

interface NotiStore {
    notiList: [] | Notification[]
    addNoti: (noti: Notification) => void
    updateNoti: (noti: Notification) => void
    clearNoti: () => void
    setNotiList: (notiList: Notification[]) => void
}

const useNotiStore = create<NotiStore>((set) => ({
    notiList: [],
    addNoti: (noti) => set((state) => ({ notiList: [...state.notiList, noti] })),
    updateNoti: (noti) =>
        set((state) => {
            const notiIndex = state.notiList.findIndex((item) => item.id === noti.id)
            if (notiIndex !== -1) {
                state.notiList[notiIndex].isReaded = true
                return { notiList: [...state.notiList] }
            }
            return { notiList: [...state.notiList] }
        }),
    clearNoti: () => set({ notiList: [] }), 
    setNotiList: (notiList) => set({ notiList }),
}))

export default useNotiStore
