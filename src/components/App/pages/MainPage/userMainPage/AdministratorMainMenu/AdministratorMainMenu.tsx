import style from './AdministratorMainMenu.module.scss';
import LastActivity from "../../blocks/LastActivity/LastActivity";
import ProfitChart from "../../blocks/ProfitСhart/ProfitСhart";
import ReportСhart from "../../blocks/ReportСhart/ReportСhart";
import Notifications from "../../blocks/Notifications/Notifications";


const AdministratorMainMenu = () =>
    (<div className={style.mainPage}>
        <ProfitChart/>
        <LastActivity/>
        <Notifications/>
        <ReportСhart/>
    </div>)

export default AdministratorMainMenu;
