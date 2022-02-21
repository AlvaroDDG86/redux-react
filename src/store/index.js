import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
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

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

export const counterActions = counterSlice.actions

export default store