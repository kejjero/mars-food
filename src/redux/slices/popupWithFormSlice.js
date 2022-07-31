import { createSlice } from "@reduxjs/toolkit"

const initialState = {
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
export const selectPopupWithForm = (state) => state.popupWithFormReducer

export default popupWithFormSlice.reducer;