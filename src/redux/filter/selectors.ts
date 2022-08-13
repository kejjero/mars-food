import {RootState} from "../store";

export const selectCategoryId = (state: RootState) => state.filterReducer.categoryId;
export const selectFilter = (state: RootState) => state.filterReducer;
export const selectSearchValue = (state: RootState) => state.filterReducer.searchValue;