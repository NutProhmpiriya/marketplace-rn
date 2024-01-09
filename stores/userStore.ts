import { create } from 'zustand'

const userStore = create((set) => ({
    user: null,
    setUser: (user: any) => set({ user }),
    removeUser: () => set({ user: null }),
}))