import { create } from 'zustand'

export interface DialogMessage {
    message: string | null
}

const useDialogStores = create<DialogMessage>((set) => ({
    message: null,
    setMessage: (message: string) => set({ message }),
    clearMessage: () => set({ message: null })
}))

export default useDialogStores
