import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StatusCode from '../utils/StatusCode';

const initialState = {
    data: [],
    loading: false,
    error: null
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json()
    return result
})

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json()
//         dispatch(fetchProducts(result))
//     }
// }