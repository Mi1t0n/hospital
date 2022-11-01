import {useGetReportsQuery} from "redux/hospitalApi";
import ReportBlock from "./ReportBlock/ReportBlock";
import style from "./Reports.module.scss";
import Loader from "../../../shared/Loader/Loader";


const Reports = () => {
    const {data,isLoading} = useGetReportsQuery()

    if(isLoading) return <Loader/>
    if(Array.isArray(data) && !data.length) return <div>No Reports</div>
    if(!data) return <div>Cant Load</div>

    return (
        <div className={style.reports}>
            {
                data.map(report => <ReportBlock {...report} key={report.reportSerialNumber}/>
            )}
        </div>
    );
}

export default Reports;
