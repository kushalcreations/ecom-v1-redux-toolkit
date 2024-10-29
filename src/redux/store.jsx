import { configureStore } from "@reduxjs/toolkit";

import cartSlice from './cartSlice';
import productSlice from './productSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice
    },
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in non-production environments
});

export default store;