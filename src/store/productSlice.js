import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {STATUS} from '../utils/status';
import {BASE_URL} from '../utils/apiURL';

const initialState ={
    products:[],
    productsStatus: STATUS.IDLE,
    productSingle:[],
    productSingleStatus:STATUS.IDLE
    
  }
  const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        imageChangeHandler: (state,action) =>
        {
          const x= action.payload;
          const a= state.productSingle.images[x];
          state.productSingle.images[x] =  state.productSingle.images[0];
          state.productSingle.images[0] = a;
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchAsyncProducts.pending,(state,action) =>{
            state.productsStatus = STATUS.LOADING;
        })
        .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
            state.productsStatus = STATUS.SUCCEEDED;
            state.products = action.payload
        })
        .addCase(fetchAsyncProducts.rejected,(state,action) =>{
            state.productsStatus = STATUS.FAILED;
        })
        .addCase(fetchAsyncProductSingle.pending, (state, action) => {
            state.productSingleStatus = STATUS.LOADING;
        })

        .addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {
            state.productSingle = action.payload;
            state.productSingleStatus = STATUS.SUCCEEDED;
        })

        .addCase(fetchAsyncProductSingle.rejected, (state, action) => {
            state.productSingleStatus = STATUS.FAILED;
        })
        
    }

  });

  // for getting the products list with limited numbers
export const fetchAsyncProducts = createAsyncThunk('products/fetch', async(limit) => {
    const response = await fetch(`${BASE_URL}products?limit=${limit}`);
    const data = await response.json();
    return data.products;
});

// getting the single product data also
export const fetchAsyncProductSingle = createAsyncThunk('product-single/fetch', async(id) => {
    const response = await fetch(`${BASE_URL}products/${id}`);
    const data = await response.json();
    return data;
});


export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;
export const getProductSingle = (state) => state.product.productSingle;
export const getSingleProductStatus = (state) => state.product.productSingleStatus;
export default productSlice.reducer;
export const {imageChangeHandler} = productSlice.actions;