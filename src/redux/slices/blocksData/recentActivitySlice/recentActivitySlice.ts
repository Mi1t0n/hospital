import {IrecentActivitySlice} from "interfaces/Islices/IrecentActivitySlice";
import {IwithLoading} from "interfaces/Islices/IwithLoading";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getRecentActivity} from "./recentActivityThunk";

const initialState: IrecentActivitySlice & IwithLoading = {
    loading    : true,
    error      : null,
    blocksValue: null
}

const recentActivitySlice = createSlice({
    name         : 'recentActivity',
    initialState,
    reducers     : {},
    extraReducers: (builder) => {
        builder.addCase(getRecentActivity.pending, (state) => {
            state.error = null
            state.loading = true
        })
        builder.addCase(getRecentActivity.fulfilled, (state, action: PayloadAction<IrecentActivitySlice>) => {
            state.loading = false
            state.blocksValue = action.payload.blocksValue
        })
        builder.addCase(getRecentActivity.rejected, (state, action: PayloadAction<unknown>) => {
            state.loading = false
            state.error = action.payload
        })
    }
});

export default recentActivitySlice.reducer;