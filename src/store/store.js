import { configureStore, ConfigureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slidebarSlice";
import categoryReducer from "./categorySlice";

const store = configureStore ({
    reducer :{
        sidebar: sidebarReducer,
        category: categoryReducer
    }
            
}
);
export default store;