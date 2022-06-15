import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    totalPrice: 0,
    countTypeValue: 0,
    countSizeValue: 0,
    activeType: 0,
    activeSize: 0,
    data: {},
}

export const fetchItemId = createAsyncThunk('itemId/fetchItemId', async (id) => {
    const {data} = await axios.get(`https://6291e4289d159855f081d72e.mockapi.io/items?id=${id}`)
    return data.shift(data)
})

export const buyPopupSlice = createSlice({
    name: 'buyPopup',
    initialState,
    reducers: {
        resetActiveCategory(state) {
            state.activeType = 0;
            state.activeSize = 0;
        },
        setCountTypePrice(state, action) {
            state.activeType = action.payload.id;
            state.countTypeValue = action.payload.value;
            state.type = action.payload.name;
            state.totalPrice = state.countTypeValue + state.countSizeValue + state.data.price
        },
        setCountSizePrice(state, action) {
            state.activeSize = action.payload.id;
            state.countSizeValue = action.payload.value;
            state.size = action.payload.name;
            state.totalPrice = state.countTypeValue + state.countSizeValue + state.data.price
        }
    },
    extraReducers: {
        [fetchItemId.pending]: (state) => {
            state.data = {};
            state.statusItems = 'loading';
        },
        [fetchItemId.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.statusItems = 'success';
            state.totalPrice = action.payload.price
        },
        [fetchItemId.rejected]: (state) => {
            state.data = {};
            state.statusItems = 'error'
        }
    }
})

export const {
    loadDataForPopup,
    resetActiveCategory,
    setCountTypePrice,
    setCountSizePrice
} = buyPopupSlice.actions;

export const selectBuyPopupData = (state) => state.buyPopupReducer.data;
export const selectBuyPopup = state => state.buyPopupReducer;

export default buyPopupSlice.reducer;