import {createAsyncThunk} from "@reduxjs/toolkit";

import hospitalSurveyFetchLink from "mockData/hospitalSurveyMockData";

const getHospitalSurvey = createAsyncThunk(
    'hospitalSurvey/fetchData',
    async (_, {rejectWithValue}) => {
        try {
            return await hospitalSurveyFetchLink()
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export {getHospitalSurvey}