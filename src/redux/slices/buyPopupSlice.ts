import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {RootState} from "../store";
import axios from "axios";

interface dataType {
    id: number,
    title: string,
    price: number,
    imageUrl: string,
    description: string,
    property: propertyType
}

type propertyType = {
    custom: [];
    size: [];
}

interface buyPopupTypes {
    totalPrice: number;
    countTypeValue: number;
    countSizeValue: number;
    activeType: number;
    activeSize: number;
    type: string;
    size: string;
    data: dataType;
}

const initialState: buyPopupTypes = {
    totalPrice: 0,
    countTypeValue: 0,
    countSizeValue: 0,
    activeType: 0,
    activeSize: 0,
    type: '',
    size: '',
    data: {
        property: {
            custom: [],
            size: [],
        },
        id: 0,
        title: '',
        price: 0,
        description: '',
        imageUrl: '',
    },
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
})

export const {
    resetActiveCategory,
    setCountTypePrice,
    setCountSizePrice
} = buyPopupSlice.actions;

export const selectBuyPopupData = (state: RootState) => state.buyPopupReducer.data;
export const selectBuyPopup = (state: RootState) => state.buyPopupReducer;

export default buyPopupSlice.reducer;