import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    status: 'not-auth',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialStatus,
    reducers: {
        login: (state, { payload }) => {
            state.status = 'auth'
            state.uid = payload.uid
            state.email = payload.email
            state.displayName = payload.displayName
            state.photoURL = payload.photoURL
            state.errorMessage = null
        },
        logout: (state, { payload }) => {
            state.status = 'not-auth'
            state.uid = null
            state.email = null
            state.displayName = null
            state.photoURL = null
            state.errorMessage = null
        },
        renew: (state) => {
            state.status = 'checking';
        }
    }
})

export const { login, logout, renew, register } = authSlice.actions;
export default authSlice.reducer