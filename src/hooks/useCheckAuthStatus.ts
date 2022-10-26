import {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {readData} from "../utils/firebaseDB";
import {useAppDispatch} from "./reduxHooks";
import {setSerialNumber} from "../redux/slices/userSlice/userSlice";

const useCheckAuthStatus = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useAppDispatch()
    useEffect(() => {
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, async user => {
            if (user) {
                const {serialNumber} = await readData(`users/${user.uid}`)
                dispatch(setSerialNumber(serialNumber))
            }
            setLoading(false)
        });
        return () => unsubscribe();
    }, [])

    return [loading]
}
export default useCheckAuthStatus