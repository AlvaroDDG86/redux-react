import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/counter'
import auth from './slices/auth'
import cart from './slices/cart'

const store = configureStore({
    reducer: {
        counter,
        auth,
        cart
    }
})

export default store