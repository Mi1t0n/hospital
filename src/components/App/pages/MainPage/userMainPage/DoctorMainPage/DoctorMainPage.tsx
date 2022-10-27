import style from './DoctorMainPage.module.scss';
import {lazy, Suspense} from 'react'


const Notifications = lazy(() => import("../../blocks/Notifications/Notifications"))
const RecentActivity = lazy(() => import("../../blocks/RecentActivity/RecentActivity"))
const PatientsTable = lazy(() => import("../../blocks/PatientsTable/PatientsTable"))
const ReportСhart = lazy(() => import("../../blocks/ReportСhart/ReportСhart"))

const DoctorMainPage = () =>
    (<div className={style.mainPage}>
        <Suspense fallback={<div>Loading . . .</div>}>
            <PatientsTable/>
            <ReportСhart/>
            <Notifications/>
            <RecentActivity/>
        </Suspense>
    </div>)

export default DoctorMainPage;
