import { configureStore } from "@reduxjs/toolkit";
import {shopReducer} from "./reducers/shopReducers"


const store = configureStore({
    reducer: {shop: shopReducer},
})

export default store