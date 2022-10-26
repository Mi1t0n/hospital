import {createAsyncThunk} from "@reduxjs/toolkit";
import TotalReportFetchLink from "mockData/totalReportMockData";
const getTotalReport = createAsyncThunk(
    'totalReport/fetchData',
    async (_, {rejectWithValue}) => {
        try {
            return await TotalReportFetchLink()
        } catch (error) {
            return rejectWithValue(error)
        }

    }
)
export {getTotalReport}