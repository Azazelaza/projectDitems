import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    language: 'ES',
    data: [],
}

export const PageContentSlice = createSlice({
    name: 'PageContentSlice',
    initialState: initialStatus,
    reducers: {
        setDataPageContent: (state, { payload }) => {
            state.data = payload
        },
    }
})

export const { setDataPageContent } = PageContentSlice.actions;
export default PageContentSlice.reducer