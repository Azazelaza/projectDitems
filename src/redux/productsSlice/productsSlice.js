import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    data: [],
    product: {},
}

export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: initialStatus,
    reducers: {
        setProducts: (state, { payload }) => {
            state.data = payload
        },
        setProduct: (state, { payload }) => {
            state.product = payload
        }
    }
})

export const { setProducts, setProduct } = productsSlice.actions;
export default productsSlice.reducer