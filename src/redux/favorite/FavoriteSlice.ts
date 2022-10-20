import {createSlice} from "@reduxjs/toolkit"
import {RootState} from "../store";
import {initialStateFavorite} from "./types"
import {getFavoriteFromLS} from "../../utils/getFavoriteFromLS";

const { favorites } = getFavoriteFromLS();

const initialState: initialStateFavorite = {
    favoriteData: favorites,
}

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state: any, action: any) {
            state.favoriteData = [...state.favoriteData, action.payload]
        },
        deleteFavoriteItem(state, action) {
            state.favoriteData = action.payload
        }
    },
});

export const selectFavoriteData = (state: RootState) => state.favoriteReducer.favoriteData;
export const { addFavorite, deleteFavoriteItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;