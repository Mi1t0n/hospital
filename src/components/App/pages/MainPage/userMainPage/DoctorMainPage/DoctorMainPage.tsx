import style from './DoctorMainPage.module.scss';
import Notifications from "../../blocks/Notifications/Notifications";
import RecentActivity from "../../blocks/RecentActivity/RecentActivity";
import PatientsTable from "../../blocks/PatientsTable/PatientsTable";
import ReportСhart from "../../blocks/ReportСhart/ReportСhart";


const DoctorMainPage = () =>
    (<div className={style.mainPage}>
        <PatientsTable/>
        <ReportСhart/>
        <Notifications/>
        <RecentActivity/>
    </div>)

export default DoctorMainPage;
