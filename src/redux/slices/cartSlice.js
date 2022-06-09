import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartCount: 0,
    cartPrice: 0,
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemForCart(state, action) {
            const findItem = state.cartItems.find((obj) => obj.id === action.payload.id);
            if (findItem) {
                findItem.count++
            } else {
               state.cartItems.push({
                   ...action.payload, count: 1
               })
            }
        },

    }
})

export const { addItemForCart } = cartSlice.actions;

export default cartSlice.reducer;