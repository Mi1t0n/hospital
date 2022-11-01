import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice/userSlice';
import lastActivityReducer from './slices/blocksData/lastActivitySlice/lastActivitySlice';
import totalReportReducer from './slices/blocksData/totalReportSlice/totalReportSlice';
import hospitalSurveyReducer from './slices/blocksData/hospitalSurveySlice/hospitalSurveySlice';
import recentNotificationsReducer from './slices/blocksData/recentNotificationsSlice/recentNotificationsSlice';
import recentActivityReducer from './slices/blocksData/recentActivitySlice/recentActivitySlice';
import authReducer from './slices/authSlice/authSlice';
import hospitalApi from "./hospitalApi";

export const store = configureStore({
    reducer: {
        user               : userReducer,
        auth               : authReducer,
        totalReport        : totalReportReducer,
        hospitalSurvey     : hospitalSurveyReducer,
        recentNotifications: recentNotificationsReducer,
        recentActivity     : recentActivityReducer,
        lastActivity       : lastActivityReducer,
        [hospitalApi.reducerPath]:hospitalApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(hospitalApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
