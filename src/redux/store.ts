import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filter/filterSlice'
import buyPopupReducer from './popup/buyPopupSlice'
import popupWithFormReducer from './popup/popupWithFormSlice'
import cartReducer from "./cart/cartSlice";
import itemsReducer from "./item/itemSlice";

export const store = configureStore({
    reducer: {
        filterReducer,
        buyPopupReducer,
        popupWithFormReducer,
        cartReducer,
        itemsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>