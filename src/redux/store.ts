import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filter/filterSlice'
import buyPopupReducer from './popups/buyPopup/buyPopupSlice'
import popupWithFormReducer from './popups/popupWithForm/popupWithFormSlice'
import cartReducer from "./cart/cartSlice";
import itemsReducer from "./item/itemSlice";
import favoriteReducer from "./favorite/FavoriteSlice"

export const store = configureStore({
    reducer: {
        filterReducer,
        buyPopupReducer,
        popupWithFormReducer,
        cartReducer,
        itemsReducer,
        favoriteReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch