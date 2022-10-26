import style from './PatientMainPage.module.scss';
import LastActivity from "../../blocks/LastActivity/LastActivity";
import HospitalStaff from "../../blocks/OurDoctors/OurDoctors";
import Notifications from "../../blocks/Notifications/Notifications";
import RecentActivity from "../../blocks/RecentActivity/RecentActivity";


const PatientMainPage = () =>
    (<div className={style.mainPage}>
        <LastActivity/>
        <HospitalStaff/>
        <Notifications/>
        <RecentActivity/>
    </div>)

export default PatientMainPage;
