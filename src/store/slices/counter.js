import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    showCounter: true
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // Here you CAN mutate the state
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, { payload }) {
            state.counter = state.counter + payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        },
        reset(state) {
            return initialState
        }
    }
})

export const counterActions = counterSlice.actions