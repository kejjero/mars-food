import {createSlice} from "@reduxjs/toolkit"
import type { RootState } from '../store'

type SortType = {
    sortId: number;
    property: string;
    type: string;
}

interface filterTypes {
    categoryId: number;
    searchValue: string;
    sort: SortType;
    currentPage: number;
    pageCount: number;
}


const initialState:filterTypes = {
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
        setPageCount(state, count) {
            state.pageCount = count.payload
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

export const {setCategoryId, setSort, setCurrentPage, setPageCount, setFilters, setSearchValue} = filterSlice.actions;
export const selectCategoryId = (state: RootState) => state.filterReducer.categoryId;
export const selectFilter = (state: RootState) => state.filterReducer;
export const selectSearchValue = (state: RootState) => state.filterReducer.searchValue;
export default filterSlice.reducer;