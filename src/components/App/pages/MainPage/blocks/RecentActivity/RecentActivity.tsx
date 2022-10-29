import style from './RecentActivity.module.scss';
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import RecentActivityBlock from "./RecentActivityBlock/RecentActivityBlock";
import BlockTitle from "components/shared/BlockTitle/BlockTitle";
import {getRecentActivity} from "redux/slices/blocksData/recentActivitySlice/recentActivityThunk";
import Loader from "components/shared/Loader/Loader";
import {useEffect} from "react";


const RecentActivity = () => {
    const dispatch = useAppDispatch()
    const {loading, error, blocksValue} = useAppSelector(state => state.recentActivity)

    useEffect(() => {
        dispatch(getRecentActivity())
    }, []);

    if (loading) return <Loader/>
    if (error) return <div>{error}</div>
    if (!blocksValue) return <div>Cant load</div>

    const blocks = blocksValue.map((blockValue,index) => <RecentActivityBlock {...blockValue} key={index}/>)

    return (
        <div className={style.block}>
            <BlockTitle title={'Recent Activity'}/>
            <ul>
                {blocks}
            </ul>
        </div>
    );
}

export default RecentActivity;
