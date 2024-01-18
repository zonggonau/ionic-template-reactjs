/**
 * Creates a Redux slice for managing cart state.
 * Exports the slice reducer, actions, and action creators.
 */
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0
    },
    reducers: {

        add: (state, action) => {
            state.items.push(action.payload)
        },
        remove: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer