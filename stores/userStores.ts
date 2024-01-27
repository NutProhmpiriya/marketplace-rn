import { create } from 'zustand'

export interface User {
    phoneNumber: string | null
    displayName: string | null
    uuid: string | null
    email: string | null
    photoURL: string | null
}

interface UserStore {
    user: null | User
    setUser: (user: User) => void
    clearUser: () => void
}

const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
    clearUser: () => set({ user: null })
}))

export default useUserStore
