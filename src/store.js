import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slice/loginSlice";
import productsSlice from "./slice/productsSlice";
import cartSlice from "./slice/cartSlice";
import pricelistSlice from "./slice/pricelistSlice";

export default configureStore({
    reducer: {
        login: loginReducer,
        products: productsSlice,
        cart: cartSlice,
        pricelist: pricelistSlice
    }
})