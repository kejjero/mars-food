import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import buyPopupReducer from './slices/buyPopupSlice'
import popupWithFormReducer from './slices/popupWithFormSlice'
import cartReducer from "./slices/cartSlice";
import itemsReducer from "./slices/itemSlice";

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