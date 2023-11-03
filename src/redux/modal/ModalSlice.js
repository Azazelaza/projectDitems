import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: '',
}

const ModalSlice = createSlice({
    name: 'ModalSlice',
    initialState,
    reducers: {
        showModal: (state, { payload }) => {
            state.show = payload.name;
        },
        hiddenModal: (state) => {
            state.show = '';
        },
    },
})

export const {
    showModal,
    hiddenModal,
} = ModalSlice.actions
export default ModalSlice.reducer