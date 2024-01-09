import { create } from 'zustand'

export interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
    image: string

}

interface CartStore {
    cart: CartItem[]
    addCartItem: (cartItem: CartItem) => void
    deleteCartItem: (cartItem: CartItem) => void
    clearCart: () => void
}

const useCartStore = create<CartStore>((set) => ({
    cart: [],
    addCartItem: (cartItem) => set((state) => ({ cart: [...state.cart, cartItem] })),
    deleteCartItem: (cartItem) => set((state) => ({ cart: state.cart.filter((cartItem) => cartItem.id !== cartItem.id) })),
    clearCart: () => set({ cart: [] }),
}))

export default useCartStore

