import { configureStore, ConfigureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slidebarSlice";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import searchreducer from './searchSlice';


const store = configureStore ({
    reducer :{
        sidebar: sidebarReducer,
        category: categoryReducer,
        product:productReducer,
        cart: cartReducer,
        search :searchreducer
    }
            
}
);
export default store;