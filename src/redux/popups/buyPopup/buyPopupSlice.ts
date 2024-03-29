import {createSlice} from "@reduxjs/toolkit"
import {RootState} from "../../store";
import {initialStateBuyPopup} from "./types"

const initialState: initialStateBuyPopup = {
    totalPrice: 0,
    countTypePrice: 0,
    countSizePrice: 0,
    type: 'Классический',
    size: 'M',
    activeType: 0,
    activeSize: 0,
    data: {
        id: 0,
        title: '',
        description: '',
        imageUrl: '',
        rating: 0,
        price: 0,
        property: {
            custom: [
                {name: "", value: 0},
            ],
            size: [
                {name: "", value: 0},
            ]
        }
    },
}

export const buyPopupSlice = createSlice({
    name: 'buyPopup',
    initialState,
    reducers: {
        loadDataForPopup(state, action) {
            state.data = action.payload;
            state.totalPrice = action.payload.price;
        },
        resetActiveCategory(state) {
            state.activeType = 0;
            state.activeSize = 0;
            state.type = 'Классический';
            state.size = 'M'
        },
        setCountTypePrice(state, action) {
            state.activeType = action.payload.id;
            state.countTypePrice = action.payload.price;
            state.type = action.payload.name;
            state.totalPrice = state.countTypePrice + state.countSizePrice + state.data.price
        },
        setCountSizePrice(state, action) {
            state.activeSize = action.payload.id;
            state.countSizePrice = action.payload.price;
            state.size = action.payload.name;
            state.totalPrice = state.countTypePrice + state.countSizePrice + state.data.price
        }
    }
})

export const {
    loadDataForPopup,
    resetActiveCategory,
    setCountTypePrice,
    setCountSizePrice
} = buyPopupSlice.actions;

export const selectBuyPopupData = (state: RootState) => state.buyPopupReducer.data;
export const selectBuyPopup = (state: RootState) => state.buyPopupReducer;

export default buyPopupSlice.reducer;