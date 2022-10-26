import {createAsyncThunk} from "@reduxjs/toolkit";
import recentNotificationsMockData from "mockData/recentNotificationsMockData";
const getRecentNotifications = createAsyncThunk(
    'recentNotifications/fetchData',
    async (_, {rejectWithValue}) => {
        try {
            return await  recentNotificationsMockData()
        } catch (error) {
            return rejectWithValue(error)
        }

    }
)
export {getRecentNotifications}