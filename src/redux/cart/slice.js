import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    cart: [],
    show: true,
}

export const CartSlice = createSlice({
    name: 'CartSlice',
    initialState: initialStatus,
    reducers: {
        setCart: (state, { payload }) => {
            state.cart = payload;
            localStorage.setItem('cart', JSON.stringify(payload))
        },
        showCart: (state, { payload }) => {
            state.show = payload
        },
        cleanCart: (state) => {
            state.cart = []
        },
    }
})

export const { setCart, cleanCart, showCart } = CartSlice.actions;
export default CartSlice.reducer