import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IuserSlice} from "interfaces/Islices/IuserSlice";

const initialState: IuserSlice = {
    serialNumber: null
};

const userSlice = createSlice({
    name    : 'user',
    initialState,
    reducers: {
        setSerialNumber(state, action: PayloadAction<string>) {
            state.serialNumber = action.payload
        },
        removeUser(state) {
            state.serialNumber = null
        },
    }
});

export const {removeUser, setSerialNumber} = userSlice.actions;
export default userSlice.reducer;