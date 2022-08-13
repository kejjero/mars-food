import {createSlice} from "@reduxjs/toolkit"
import {initialStateFilter} from "./types";

const initialState: initialStateFilter = {
    categoryId: 0,
    searchValue: '',
    sort: {
        sortId: 0,
        property: 'rating',
        type: 'desc',
    },
    currentPage: 1,
    pageCount: 3
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload + 1
        },
        setFilters(state, action) {
            state.categoryId = Number(action.payload.category)
            state.sort.sortId = Number(action.payload.sortId)
            state.sort.property = action.payload.property
            state.sort.type = action.payload.order
            state.currentPage = Number(action.payload.page)
        }
    }
})

export const {setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions;
export default filterSlice.reducer;