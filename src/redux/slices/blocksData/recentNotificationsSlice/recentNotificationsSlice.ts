import {IrecentNotificationsSlice} from "interfaces/Islices/IrecentNotificationsSlice";
import {IwithLoading} from "interfaces/Islices/IwithLoading";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getRecentNotifications} from "./recentNotificationsThunk";

const initialState:IrecentNotificationsSlice & IwithLoading = {
    loading: true,
    error  : null,
    notifications:null
}

const recentNotificationsSlice = createSlice({
    name         : 'recentNotifications',
    initialState,
    reducers     : {},
    extraReducers: (builder) => {
        builder.addCase(getRecentNotifications.pending, (state) => {
            state.error = null
            state.loading = true
        })
        builder.addCase(getRecentNotifications.fulfilled, (state, action: PayloadAction<IrecentNotificationsSlice>) => {
            state.loading = false
            state.notifications = action.payload.notifications
        })
        builder.addCase(getRecentNotifications.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
});


export default recentNotificationsSlice.reducer;