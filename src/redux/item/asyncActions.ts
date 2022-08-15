import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {itemData} from "../../@types/types"

export const fetchItems:any = createAsyncThunk('itemsData/fetchItemsStatus', async (filterRequest) => {
    const {data} = await axios.get<itemData>(`https://6291e4289d159855f081d72e.mockapi.io/items?${filterRequest}`)
    return data
})

export const fetchCategoryItems:any = createAsyncThunk('itemsCategory/fetchCategoryItems', async (index) => {
    const {data} = await axios.get<itemData>(`https://6291e4289d159855f081d72e.mockapi.io/items?category=${index}`)
    return data
})
