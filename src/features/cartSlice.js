import { createSlice } from '@reduxjs/toolkit'

const initialState = []
// [{productId, quantity}]
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

            console.log(state, action)


        },
        addCount: (state, action) => {
            const indexOfNewProd = state.findIndex(cartObj => cartObj.productId === action.payload)
            state[indexOfNewProd].quantity++
        },
        decount: (state, action) => {
            const indexOfNewProd = state.findIndex(cartObj => cartObj.productId === action.payload)

            if (state[indexOfNewProd].quantity <= 1) state.splice(indexOfNewProd, 1); else state[indexOfNewProd].quantity--
        },
        deleteItem: (state, action) => {
            const indexOfNewProd = state.findIndex(cartObj => cartObj.productId === action.payload)
            state.splice(indexOfNewProd, 1)

        }

    }
})

// Action creators are generated for each case reducer function
export const { addToCart, addCount, decount, deleteItem } = cartSlice.actions

export default cartSlice.reducer