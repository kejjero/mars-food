import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

export const fetchItems = createAsyncThunk('itemsData/fetchItemsStatus', async (filterRequest) => {
    const {data} = await axios.get(`https://6291e4289d159855f081d72e.mockapi.io/items?${filterRequest}`)
    return data
})

export const fetchCategoryItems = createAsyncThunk('itemsCategory/fetchCategoryItems', async (index) => {
    const {data} = await axios.get(`https://6291e4289d159855f081d72e.mockapi.io/items?category=${index}`)
    return data
})

const initialState = {
    itemsData: [],
    itemsCategory: [],
    statusItems: 'loading', // loading | success | error

}

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers: {
        [fetchItems.pending]: (state) => {
            state.itemsData = [];
            state.statusItems = 'loading';
        },
        [fetchItems.fulfilled]: (state, action) => {
            state.itemsData = action.payload;
            state.statusItems = 'success'
        },
        [fetchItems.rejected]: (state) => {
            state.itemsData = [];
            state.statusItems = 'error'
        },
        [fetchCategoryItems.pending]: (state) => {
            state.itemsCategory = []
        },
        [fetchCategoryItems.fulfilled]: (state, action) => {
            state.itemsCategory = action.payload
        },
        [fetchCategoryItems.rejected]: (state) => {
            state.itemsCategory = []
        },
    }
})

export default itemSlice.reducer;
export const selectItems = (state) => state.itemsReducer
export const selectItemsCategory = (state) => state.itemsReducer.itemsCategory