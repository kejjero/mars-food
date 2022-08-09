import {createSlice} from "@reduxjs/toolkit"

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
            state.cartCount += 1
            state.countItem += 1
            state.cartPrice += action.payload.price
            const findItem = state.cartItems.find((obj) => {
                return (
                    obj.id === action.payload.id &&
                    obj.type === action.payload.type &&
                    obj.size === action.payload.size &&
                    obj.title === action.payload.title
                )
            })
            if (findItem) {
                findItem.count++
            } else {
                state.cartItems.push({
                    ...action.payload, count: 1
                })
            }
        },
        clearCart(state) {
            state.cartCount = 0;
            state.cartPrice = 0;
            state.cartItems = [];
        },
        minusCartItem(state, action) {
            if (state.cartCount > 0) {
                state.countItem -= 1
                const findItem = state.cartItems.find((obj) => {
                    return (
                        obj.id === action.payload.id &&
                        obj.type === action.payload.type &&
                        obj.size === action.payload.size &&
                        obj.title === action.payload.title
                    )
                })
                if (findItem && action.payload.count > 1) {
                    findItem.count = findItem.count - 1
                    state.cartCount = state.cartCount - 1
                    state.cartPrice = state.cartPrice - action.payload.price
                }
            }
        },
        deleteCartItem(state, action) {
            const findIndex = state.cartItems.find((item, index) => index === action.payload.index)
            if (findIndex !== -1) {
                state.cartItems.splice(action.payload.index, 1)
                const fullPriceItem = action.payload.price * action.payload.count
                state.cartCount = state.cartCount - action.payload.count
                state.cartPrice = state.cartPrice - fullPriceItem
            }
        }
    }
})


export const cartSelector = (state) => state.cartReducer
export const {addItemForCart, clearCart, minusCartItem, deleteCartItem, getCountItems} = cartSlice.actions;
export const selectCartItems = (state) => state.cartReducer.cartItems
export const selectCart = (state) => state.cartReducer
export default cartSlice.reducer;