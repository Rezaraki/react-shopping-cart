import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user',
    initialState: false,
    reducers: {

        logUserIn: (state, action) => {
            return state = action.payload

        },
        logUserOut(state) { return state = false }
    },
})


export const { logUserIn, logUserOut } = userSlice.actions

export default userSlice.reducer