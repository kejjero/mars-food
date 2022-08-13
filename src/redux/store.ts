import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filter/filterSlice'
import buyPopupReducer from './popups/buyPopup/buyPopupSlice'
import popupWithFormReducer from './popups/popupWithForm/popupWithFormSlice'
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
export type AppDispatch = typeof store.dispatch