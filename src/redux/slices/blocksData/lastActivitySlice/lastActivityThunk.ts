import {createAsyncThunk} from "@reduxjs/toolkit";
import LastActivityMockData from "mockData/lastActivityMockData";

const getLastActivity = createAsyncThunk(
    'lastActivity/fetchData',
    async (_, {rejectWithValue}) => {
        try {
            return await LastActivityMockData()
        } catch (error) {
            return rejectWithValue(error)
        }

    }
)
export {getLastActivity}