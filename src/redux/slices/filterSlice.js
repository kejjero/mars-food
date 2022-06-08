import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoryId: 0,
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
        setCategoryId(state, activeId) {
            state.categoryId = activeId.payload;
        },
        setSort(state, obj) {
            state.sort = obj.payload
        },
        setCurrentPage(state, currentPage) {
            state.currentPage = currentPage.payload + 1
        },
        setPageCount(state, count) {
            state.pageCount = count.payload
        },
        setFilters(state, obj) {
            state.categoryId = Number(obj.payload.category)
            state.sort.sortId = Number(obj.payload.sortId)
            state.sort.property = obj.payload.property
            state.sort.type = obj.payload.order
            state.currentPage = Number(obj.payload.page)
        }
    }
})

export const { setCategoryId, setSort, setCurrentPage, setPageCount, setFilters } = filterSlice.actions;

export default filterSlice.reducer;