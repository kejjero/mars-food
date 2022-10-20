import {RootState} from "../store";

export const selectCartItems = (state: RootState) => state.cartReducer.cartItems
export const selectCart = (state: RootState) => state.cartReducer
export const cartSelector = (state: RootState) => state.cartReducer
export const personsSelector = (state: RootState) => state.cartReducer.persons