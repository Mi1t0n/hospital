import style from './LastActivity.module.scss';
import LastActivityBlock from './LastActivityBlock/LastActivityBlock';
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {getLastActivity} from "redux/slices/blocksData/lastActivitySlice/lastActivityThunk";
import Loader from "components/shared/Loader/Loader";


const LastActivity = () => {
    const dispatch = useAppDispatch()
    const {loading, error, blocksValue} = useAppSelector(state => state.lastActivity)

    useEffect(() => {
        dispatch(getLastActivity())
    }, []);

    if (loading) return <Loader/>
    if (error) return <div>{error}</div>
    if (!blocksValue) return <div>Cant load</div>

    const blocks = blocksValue?.map(blockValue => <LastActivityBlock {...blockValue} key={blockValue.title}/>)

    return (
        <div className={style.block}>
            {blocks}
        </div>
    )
};

export default LastActivity;
