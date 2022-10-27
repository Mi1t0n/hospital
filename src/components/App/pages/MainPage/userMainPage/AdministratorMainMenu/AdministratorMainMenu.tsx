import style from './AdministratorMainMenu.module.scss';
import {lazy, Suspense} from 'react'


const LastActivity = lazy(() => import("../../blocks/LastActivity/LastActivity"))
const ProfitChart = lazy(() => import("../../blocks/ProfitСhart/ProfitСhart"))
const ReportСhart = lazy(() => import("../../blocks/ReportСhart/ReportСhart"))
const Notifications = lazy(() => import("../../blocks/Notifications/Notifications"))


const AdministratorMainMenu = () =>
    (<div className={style.mainPage}>
        <Suspense fallback={<div>Loading . . . </div>}>
            <ProfitChart/>
            <LastActivity/>
            <ReportСhart/>
            <Notifications/>
        </Suspense>
    </div>)

export default AdministratorMainMenu;
