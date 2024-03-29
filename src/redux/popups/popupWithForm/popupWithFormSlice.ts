import { createSlice } from "@reduxjs/toolkit"
import {RootState} from "../../store";
import {initialStatePopupWP} from "./types"

const initialState: initialStatePopupWP = {
    isOpen: false,
    name: '',
}

export const popupWithFormSlice = createSlice({
    name: 'popupWithForm',
    initialState,
    reducers: {
        openBuyPopup(state, action) {
            state.isOpen = true
            state.name = action.payload;
        },
        closeAllPopups(state) {
          state.isOpen = false;
          state.name = '';
        }
    }
})

export const { closeAllPopups, openBuyPopup } =popupWithFormSlice.actions;
export const selectPopupWithForm = (state: RootState) => state.popupWithFormReducer

export default popupWithFormSlice.reducer;