import {createSlice} from "@reduxjs/toolkit"
import {RootState} from "../store";
import {initialStateFavorite} from "./types"

const initialState: initialStateFavorite = {
    itemsFavorite: [],

}

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavorites(state: any, action: any) {
            state.itemsFavorite = action.payload;
        },
    },
});

export default favoriteSlice.reducer;
export const selectFavorites = (state: RootState) => state.favoriteReducer