import {createAsyncThunk} from "@reduxjs/toolkit";
import recentActivityMockData from "mockData/recentActivityMockData";
const getRecentActivity = createAsyncThunk(
    'recentActivity/fetchData',
    async (_, {rejectWithValue}) => {
        try {
            return await recentActivityMockData()
        } catch (error) {
            return rejectWithValue(error)
        }

    }
)
export {getRecentActivity}