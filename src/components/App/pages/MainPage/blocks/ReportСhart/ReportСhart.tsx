import style from './ReportСhart.module.scss';
import Chart from './Сhart/Сhart';
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {getTotalReport} from "redux/slices/blocksData/totalReportSlice/totalReportThunk";
import Loader from "components/shared/Loader/Loader";
import {useEffect} from "react";

const ReportСhart = () => {
    const {loading, error, death, recover} = useAppSelector(state => state.totalReport)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTotalReport())
    }, []);

    if (loading) return <Loader/>
    if (error) return <div>{error}</div>
    if (!recover || !death) return <div>Cant load</div>

    return (
        <div className={style.totalReport}>
            <Chart {...recover}/>
            <Chart {...death}/>
        </div>
    );
};

export default ReportСhart;
