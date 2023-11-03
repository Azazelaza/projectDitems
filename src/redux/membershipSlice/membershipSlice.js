import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    data: [],
}

export const MembershipSlice = createSlice({
    name: 'MembershipSlice',
    initialState: initialStatus,
    reducers: {
        setMembership: (state, { payload }) => {
            state.data = payload
        },
    }
})

export const { setMembership } = MembershipSlice.actions;
export default MembershipSlice.reducer