import md5 from 'md5';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const pricelistSlice = createSlice({
    name: 'pricelist',
    initialState: {
        data: [],
        pricelist: [],
        status: 'idle',
    },
    extraReducers: (builder) => {

        builder.addCase(getProductByOperator.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getProductByOperator.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
        builder.addCase(getProductByOperator.rejected, (state) => {
            state.status = 'rejected'
        })
        builder.addCase(getProductPricelist.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getProductPricelist.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.pricelist = action.payload
        })
        builder.addCase(getProductPricelist.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})

export const { productGetByCategory } = pricelistSlice.actions
export default pricelistSlice.reducer


export const getProductByOperator = createAsyncThunk(
    'product/getProductByOperator',
    async (type) => {
        let req = await fetch(`${process.env.REACT_APP_IAK_API_DEV}/api/pricelist/${type}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": process.env.REACT_APP_IAK_USERNAME,
                "sign": md5(process.env.REACT_APP_IAK_MD5 + 'pl'),
                "status": "active"
            })
        })
        const { data } = await req.json();
        return data.pricelist
    }
);

export const getProductPricelist = createAsyncThunk(
    'product/getProductPricelist',
    async (pr) => {
        let req = await fetch(`${process.env.REACT_APP_IAK_API_DEV}/api/pricelist/${pr.type}/${pr.op}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": process.env.REACT_APP_IAK_USERNAME,
                "sign": md5(process.env.REACT_APP_IAK_MD5 + 'pl'),
                "status": "active"
            })
        })
        const { data } = await req.json();
        return data.pricelist
    }
)



