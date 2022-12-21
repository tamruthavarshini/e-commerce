import { configureStore, ConfigureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slidebarSlice";

const store = configureStore ({
    reducer :{
        sidebar: sidebarReducer,
    }
            
}
);
export default store;