import {createSlice} from "@reduxjs/toolkit";
import {IwithLoading} from "interfaces/Islices/IwithLoading";
import {logIn, signOut, singUp} from './authThunk'

const initialState: IwithLoading = {
    loading: false,
    error  : null
};

const authSlice = createSlice({
    name         : 'auth',
    initialState,
    reducers     : {},
    extraReducers: (builder) => {
        builder.addCase(logIn.pending, state => {
            state.loading = true
            state.error = null
        })
        builder.addCase(logIn.fulfilled, state => {
            state.loading = false
        })
        builder.addCase(logIn.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(singUp.pending, state => {
            state.loading = true
            state.error = null
        })
        builder.addCase(singUp.fulfilled, state => {
            state.loading = false
        })
        builder.addCase(singUp.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})


export {signOut, logIn, singUp}
export default authSlice.reducer;