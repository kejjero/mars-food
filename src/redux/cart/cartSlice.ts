import {createSlice} from "@reduxjs/toolkit"
import {getCartFromLS} from "../../utils/getCartFromLS";
import {getTargetItem} from "../../utils/getTargetItem";
import {initialStateCart} from "./types"
import {checkCartPrice} from "../../utils/checkCartPrice";
import {checkCountPrice} from "../../utils/checkCountPrice";

const { items } = getCartFromLS();

const initialState: initialStateCart = {
    cartCount: checkCountPrice(items),
    cartPrice: checkCartPrice(items),
    cartItems: items,
    persons: 1,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemForCart(state, action) {
            state.cartCount += 1
            state.cartPrice += action.payload.price
            const findItem = getTargetItem(state.cartItems, action.payload)
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
                const findItem: any = getTargetItem(state.cartItems, action.payload)
                if (findItem && action.payload.count > 1) {
                    findItem.count = findItem.count - 1
                    state.cartCount = state.cartCount - 1
                    state.cartPrice = state.cartPrice - action.payload.price
                }
            }
        },
        deleteCartItem(state, action) {
            state.cartItems.splice(action.payload.index, 1)
            const fullPriceItem = action.payload.price * action.payload.count
            state.cartCount = state.cartCount - action.payload.count
            state.cartPrice = state.cartPrice - fullPriceItem
        },
        addPerson(state) {
            state.persons = state.persons + 1
        },
        deletePerson(state) {
            if (state.persons > 1) {
                state.persons = state.persons - 1
            }
        }
    }
})

export const {addItemForCart, clearCart, minusCartItem, deleteCartItem, addPerson, deletePerson} = cartSlice.actions;
export default cartSlice.reducer;