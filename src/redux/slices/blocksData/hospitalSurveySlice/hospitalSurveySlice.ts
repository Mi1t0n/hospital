import {IhospitalSurveySlice} from "interfaces/Islices/IhospitalSurveySlice";
import {IwithLoading} from "interfaces/Islices/IwithLoading";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getHospitalSurvey} from "./hospitalSurveyThunk";

const initialState: IhospitalSurveySlice & IwithLoading = {
    loading     : true,
    error       : null,
    coloredGraph: null,
    moneyLine   : null
}

const hospitalSurveySlice = createSlice({
    name         : 'hospitalSurvey',
    initialState,
    reducers     : {},
    extraReducers: (builder) => {
        builder.addCase(getHospitalSurvey.pending, (state) => {
            state.error = null
            state.loading = true
        })
        builder.addCase(getHospitalSurvey.fulfilled, (state, action: PayloadAction<IhospitalSurveySlice>) => {
            state.loading = false
            state.moneyLine = action.payload.moneyLine
            state.coloredGraph = action.payload.coloredGraph
        })
        builder.addCase(getHospitalSurvey.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
});


export default hospitalSurveySlice.reducer;