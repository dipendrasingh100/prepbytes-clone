import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItem: null
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItem = action.payload
        },
        removeFromCart: (state, action) => {

        }
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions