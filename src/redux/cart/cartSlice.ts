import {createSlice} from "@reduxjs/toolkit"
import {RootState} from "../store";
import {getCartFromLS} from "../../utils/getCartFromLS";
import {getTargetItem} from "../../utils/getTargetItem";

interface objectItem {
    count: number;
    id: number;
    imageUrl: string;
    price: number;
    size: string;
    title: string;
    type: string;
}

interface initialStateSlice {
    cartCount: number;
    cartPrice: number;
    cartItems: objectItem[];
}

const { items } = getCartFromLS();

const initialState: initialStateSlice = {
    cartCount: 0,
    cartPrice: 0,
    cartItems: items,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemForCart(state, action) {
            state.cartCount += 1
            state.cartPrice += action.payload.price
            const findItem: any = getTargetItem(state.cartItems, action.payload)
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
            // const findIndex = state.cartItems.find((item, index) => index === action.payload.index)
            state.cartItems.splice(action.payload.index, 1)
            const fullPriceItem = action.payload.price * action.payload.count
            state.cartCount = state.cartCount - action.payload.count
            state.cartPrice = state.cartPrice - fullPriceItem

        }
    }
})


export const cartSelector = (state: RootState) => state.cartReducer
export const {addItemForCart, clearCart, minusCartItem, deleteCartItem} = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cartReducer.cartItems
export const selectCart = (state: RootState) => state.cartReducer
export default cartSlice.reducer;