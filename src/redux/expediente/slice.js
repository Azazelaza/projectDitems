import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    data: {},
    device: "",
    images: []
}

export const ExpedienteSlice = createSlice({
    name: 'ExpedienteSlice',
    initialState: initialStatus,
    reducers: {
        setExpediente: (state, { payload }) => {
            state.data = payload.data
            state.device = payload.device
        },
        setImages: (state, { payload }) => {
            state.images.push(payload)
        },
        clearImages: (state) => {
            state.images = [];
        }
    }
})

export const { setExpediente, setImages,clearImages } = ExpedienteSlice.actions;
export default ExpedienteSlice.reducer