import {createSlice} from "@reduxjs/toolkit"
import {RootState} from "../store";
import {fetchItems} from "./asyncActions"


type itemTypes = {
    itemsData: [],
    itemsCategory: [],
    statusItems: 'loading' | 'success' | 'error'
}

const initialState: itemTypes = {
    itemsData: [],
    itemsCategory: [],
    statusItems: 'loading', // loading | success | error
}

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems(state: any, action: any) {
            state.itemsData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, (state: any) => {
            state.itemsData = [];
            state.statusItems = 'loading';
        });

        builder.addCase(fetchItems.fulfilled, (state: any, action: any) => {
            state.itemsData = action.payload;
            state.statusItems = 'success'
        });

        builder.addCase(fetchItems.rejected, (state: any) => {
            state.statusItems = 'error'
            state.itemsData = [];
        });
    },
});

export default itemSlice.reducer;
export const selectItems = (state: RootState) => state.itemsReducer