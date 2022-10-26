import {useAppSelector} from "hooks/reduxHooks";
import PatientMainPage from "./userMainPage/PatientMainPage/PatientMainPage";
import DoctorMainPage from "./userMainPage/DoctorMainPage/DoctorMainPage";
import AdministratorMainMenu from "./userMainPage/AdministratorMainMenu/AdministratorMainMenu";
import {IuserMainPage} from "interfaces/IComponents/IMainPage";
import {useGetCurrentUserQuery} from "../../../../redux/hospitalApi";

const userMainPage: IuserMainPage = {
    Patient      : PatientMainPage,
    Doctor       : DoctorMainPage,
    Administrator: AdministratorMainMenu,
}

const MainPage = () => {
    const serialNumber = useAppSelector(state => state.user.serialNumber)
    const {data: currentUser} = useGetCurrentUserQuery(serialNumber)
    if (!currentUser) return null

    const TargetedComponent = userMainPage[currentUser[0].userType]

    return <TargetedComponent/>
}
export default MainPage
