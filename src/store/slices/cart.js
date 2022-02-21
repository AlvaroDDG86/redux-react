import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    showCart: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, { payload }) {
            const index = state.items.findIndex(item => item.title === payload.title)
            const current = state.items[index]
            if (index > -1) {
                current.quantity++
                current.total = current.quantity * current.price
                state.items[index] = current
            } else {
                state.items.push({
                   ...payload,
                   quantity: 1,
                   total: payload.price
                })
            }
        },
        removeItem(state, { payload }) {
            const index = state.items.findIndex(item => item.title === payload.title)
            const current = state.items[index]
            if (current.quantity === 1) {
                state.items.splice(index, 1)
            } else {
                current.quantity--
                current.total = current.quantity * current.price
                state.items[index] = current
            }
        },
        toggleCart(state) {
            state.showCart = !state.showCart
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer