import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        product: {},
        status: 'idle',
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductsAsync.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
        builder.addCase(fetchProductsAsync.rejected, (state) => {
            state.status = 'rejected'
        })
        builder.addCase(getProductByID.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getProductByID.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.product = action.payload
        })
        builder.addCase(getProductByID.rejected, (state) => {
            state.status = 'rejected'
        })

    }
})

export const { fetchProducts, productByID } = productsSlice.actions
export default productsSlice.reducer


export const fetchProductsAsync = createAsyncThunk(
    'products/get',
    async () => {
        let response = await fetch('http://localhost:1337/api/products')
        let { data } = await response.json()
        return data
    }
)

export const getProductByID = createAsyncThunk(
    'products/getById',
    async (id) => {
        let response = await fetch(`https://dummyjson.com/products/${id}`)
        let data = await response.json();
        return data
    }
)



