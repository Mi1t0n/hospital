import {IlastActivitySlice} from "interfaces/Islices/IlastActivitySlice";
import {IwithLoading} from "interfaces/Islices/IwithLoading";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getLastActivity} from "./lastActivityThunk";

const initialState: IlastActivitySlice & IwithLoading  = {
    loading: true,
    error  : null,
    blocksValue: null
}

const lastActivitySlice = createSlice({
    name         : 'lastActivity',
    initialState,
    reducers     : {},
    extraReducers: (builder) => {
        builder.addCase(getLastActivity.pending, (state) => {
            state.error = null
            state.loading = true
        })
        builder.addCase(getLastActivity.fulfilled, (state, action: PayloadAction<IlastActivitySlice>) => {
            state.loading = false
            state.blocksValue = action.payload.blocksValue
        })
        builder.addCase(getLastActivity.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
});

export default lastActivitySlice.reducer;