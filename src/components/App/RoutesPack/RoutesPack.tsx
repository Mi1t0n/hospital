import style from './RoutesPack.module.scss';
import {useAppSelector} from "hooks/reduxHooks";
import PatientRoutes from "./userRoutes/PatientRoutes";
import AdministratorRoutes from "./userRoutes/AdministratorRoutes";
import DoctorRoutes from "./userRoutes/DoctorRoutes";
import {IuserRoutes} from "interfaces/IComponents/IRoutesPack";
import {useGetCurrentUserQuery} from "redux/hospitalApi";

const userRoutes: IuserRoutes = {
    Patient      : PatientRoutes,
    Doctor       : DoctorRoutes,
    Administrator: AdministratorRoutes
}

const RoutesPack = () => {
    const serialNumber = useAppSelector(state => state.user.serialNumber)
    const {data: currentUser} = useGetCurrentUserQuery(serialNumber)
    if (!currentUser) return null
    const TargetedRoutes = userRoutes[currentUser[0].userType]

    return (
        <main className={style.main}>
            <TargetedRoutes/>
        </main>
    )
}


export default RoutesPack
