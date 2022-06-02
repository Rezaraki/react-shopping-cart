import { createSlice } from '@reduxjs/toolkit'
import { products } from '../data'
const initialState = products

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increment: (state) => {

            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productsSlice.actions

export default productsSlice.reducer