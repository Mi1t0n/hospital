import {ItotalReportSlice} from "interfaces/Islices/ItotalReportSlice";
import {IwithLoading} from "interfaces/Islices/IwithLoading";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getTotalReport} from "./totalReportThunk";

const initialState: ItotalReportSlice & IwithLoading = {
    loading: true,
    error  : null,
    death  : null,
    recover: null
}

const totalReportSlice = createSlice({
    name         : 'totalReport',
    initialState,
    reducers     : {},
    extraReducers: (builder) => {
        builder.addCase(getTotalReport.pending, (state) => {
            state.error = null
            state.loading = true
        })
        builder.addCase(getTotalReport.fulfilled, (state, action: PayloadAction<ItotalReportSlice>) => {
            state.loading = false
            state.recover = action.payload.recover
            state.death = action.payload.death
        })
        builder.addCase(getTotalReport.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
});

export default totalReportSlice.reducer;