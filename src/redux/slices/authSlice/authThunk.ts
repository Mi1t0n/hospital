import {createAsyncThunk} from "@reduxjs/toolkit";
import delay from "utils/delay";
import {AuthError, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {removeUser} from "../userSlice/userSlice";
import userTypes from "interfaces/enums/userTypes";
import notification from "utils/notification";
import {writeData} from "utils/firebaseDB";
import {faker} from "@faker-js/faker";
import {IlogIn, IsingUp} from "interfaces/Islices/IauthThunk";

const logIn = createAsyncThunk('auth/logIn',
    async ({email, password}: IlogIn, {rejectWithValue}) => {
        notification.loading('Please wait loading  :/')
        try {
            await delay(3000);
            await signInWithEmailAndPassword(getAuth(), email, password);
            notification.success('Welcome back :]')

        } catch (_error) {
            const error = (_error as AuthError);
            notification.error(error.code.slice(5))
            return rejectWithValue(error)

        }
    })

const singUp = createAsyncThunk('auth/singUp',
    async ({email, password, fullName}: IsingUp, {rejectWithValue}) => {
        notification.loading('Please wait \n Creating your brand new account :/ ')
        try {
            await delay(3000);
            const {user} = await createUserWithEmailAndPassword(getAuth(), email, password);

            const serialNumber = faker.random.alphaNumeric(10).toUpperCase()
            writeData(`users/${user.uid}`, {serialNumber});

            await fetch('https://6336b69865d1e8ef2671a820.mockapi.io/users', {
                method : 'POST',
                headers: {'Content-Type': 'application/json'},
                body   : JSON.stringify({
                    userType   : userTypes.Patient,
                    serialNumber,
                    userProfile: {
                        fullName,
                        avatar    : null,
                        textStatus: null,
                        details   : []
                    }
                })
            })
            notification.success(`Welcome ${fullName}:]`)
        } catch (_error) {
            const error = (_error as AuthError);
            notification.error(error.code.slice(5))
            return rejectWithValue(error)
        }
    })

const signOut = createAsyncThunk('auth/signOut',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            notification.loading('Please wait \n Signing Out :/ ')

            await delay(3000);
            await getAuth().signOut();
            dispatch(removeUser())

            notification.success('Goodbye :]')
        } catch (_error) {

            const error = (_error as AuthError);
            notification.error(error.code.slice(5))
            return rejectWithValue(error)
        }

    })

export {signOut, singUp, logIn}