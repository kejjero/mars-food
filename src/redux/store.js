import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import buyPopupReducer from './slices/buyPopupSlice'
import popupWithFormReducer from './slices/popupWithFormSlice'
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        filterReducer,
        buyPopupReducer,
        popupWithFormReducer,
        cartReducer,
    },
})