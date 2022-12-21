import { configureStore, ConfigureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slidebarSlice";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";

const store = configureStore ({
    reducer :{
        sidebar: sidebarReducer,
        category: categoryReducer,
        product:productReducer
    }
            
}
);
export default store;