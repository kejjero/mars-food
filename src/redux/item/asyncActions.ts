import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems:any = createAsyncThunk<any>('itemsData/fetchItemsStatus', async (filterRequest) => {
    const {data} = await axios.get<any>(`https://6291e4289d159855f081d72e.mockapi.io/items?${filterRequest}`)
    return data
})

export const fetchCategoryItems:any = createAsyncThunk<any>('itemsCategory/fetchCategoryItems', async (index) => {
    const {data} = await axios.get<any>(`https://6291e4289d159855f081d72e.mockapi.io/items?category=${index}`)
    return data
})
