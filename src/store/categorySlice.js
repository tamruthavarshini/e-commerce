import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {STATUS} from '../utils/status';
import {BASE_URL} from '../utils/apiURL';


  const initialState ={
    categories:[],
    categoriesStatus: STATUS.IDLE,
    categoryProducts:[],
    categoryProductsStatus:STATUS.IDLE
  }
  const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(fetchAsyncCategories.pending,(state,action) =>{
            state.categoriesStatus = STATUS.LOADING;
        })
        .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
            state.categoriesStatus = STATUS.SUCCEEDED;
            state.categories = action.payload
        })
        .addCase(fetchAsyncCategories.rejected,(state,action) =>{
            state.categoriesStatus = STATUS.FAILED;
        })
        
    }

  });

  export const fetchAsyncCategories =createAsyncThunk('categories/fetch',async() =>{
          const response = await fetch(`${BASE_URL}products/categories`);
          const data = await response.json();
          return data;
  });
  export const getAllCategories = (state) => state.category.categories;
  export default categorySlice.reducer;