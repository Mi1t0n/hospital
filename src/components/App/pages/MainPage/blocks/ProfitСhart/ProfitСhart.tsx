import style from './ProfitСhart.module.scss';
import MoneyRow from './MoneyRow/MoneyRow';
import MoneyСhart from './Сhart/MoneyСhart';
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {useLayoutEffect} from "react";
import {getHospitalSurvey} from "redux/slices/blocksData/hospitalSurveySlice/hospitalSurveyThunk";
import BlockTitle from "components/shared/BlockTitle/BlockTitle";
import Loader from "components/shared/Loader/Loader";


const ProfitChart = () => {
    const {moneyLine, coloredGraph, error, loading} = useAppSelector(state => state.hospitalSurvey)
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        dispatch(getHospitalSurvey())
    }, []);

    if (loading) return <Loader/>
    if (error) return <div>{error}</div>
    if (!coloredGraph || !moneyLine) return <div>Cant load</div>

    return (
        <div className={style.block}>
            <BlockTitle title={'Hospital Survey'}/>
            <MoneyRow data={moneyLine}/>
            <MoneyСhart data={coloredGraph}/>
        </div>
    );
};

export default ProfitChart;
