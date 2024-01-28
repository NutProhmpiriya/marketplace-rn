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
    totalprice: () => number
}

const useCartStore = create<CartStore>((set, get) => ({
    cart: [],
    addCartItem: (cartItem) => set((state) => {
        const cartItemIndex = state.cart.findIndex((item) => item.id === cartItem.id)
        if (cartItemIndex !== -1) {
            state.cart[cartItemIndex].quantity += 1
            return { cart: [...state.cart] }
        }
        return { cart: [ ...state.cart, cartItem ] }
    }),
    deleteCartItem: (cartItem) => set((state) => {
        const cartItemIndex = state.cart.findIndex((item) => item.id === cartItem.id)
        if (cartItemIndex !== -1) {
            state.cart[cartItemIndex].quantity -= 1
            if (state.cart[cartItemIndex].quantity === 0) {
                state.cart.splice(cartItemIndex, 1)
            }
            return { cart: [...state.cart] }
        }
        return { cart: [...state.cart] }
    }),
    clearCart: () => set({ cart: [] }),
    totalprice: () => get().cart.reduce((total, item) => total + item.price * item.quantity, 0)
}))

export default useCartStore

