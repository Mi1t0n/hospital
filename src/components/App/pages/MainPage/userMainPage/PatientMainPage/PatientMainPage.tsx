import style from './PatientMainPage.module.scss';
import {lazy, Suspense} from 'react'


const LastActivity = lazy(() => import("../../blocks/LastActivity/LastActivity"))
const HospitalStaff = lazy(() => import("../../blocks/OurDoctors/OurDoctors"))
const Notifications = lazy(() => import("../../blocks/Notifications/Notifications"))
const RecentActivity = lazy(() => import("../../blocks/RecentActivity/RecentActivity"))


const PatientMainPage = () =>
    (<div className={style.mainPage}>
        <Suspense fallback={<div>Loading . . . </div>}>
            <LastActivity/>
            <HospitalStaff/>
            <Notifications/>
            <RecentActivity/>
        </Suspense>
    </div>)

export default PatientMainPage;
