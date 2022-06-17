import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import productsSlice from '../features/productsSlice'
import userSlice from '../features/userSlice'
import { apiSlice } from '../features/api/apiSlice'

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        logedUser: userSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),

})