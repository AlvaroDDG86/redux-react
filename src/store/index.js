import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/counter'
import auth from './slices/auth'
import cart from './slices/cart'
import ui from './slices/ui'

const store = configureStore({
    reducer: {
        counter,
        auth,
        cart,
        ui
    }
})

export default store