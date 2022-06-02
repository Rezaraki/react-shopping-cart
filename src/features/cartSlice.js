import { createSlice } from '@reduxjs/toolkit'

const initialState = []
// const CartObjGen = function (prodId) { this.productId = prodId; this.quantity = 1 }
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            // check to see if the product was added before
            const indexOfNewProd = state.findIndex(cartObj => cartObj.productId === action.payload)
            if (indexOfNewProd < 0) {
                // add the product to cart
                state.push({ productId: action.payload, quantity: 1 })
                // state.push(new CartObjGen(action.payload))
            } else {
                // add to quantity
                state[indexOfNewProd].quantity++
            }



        }
    }
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer