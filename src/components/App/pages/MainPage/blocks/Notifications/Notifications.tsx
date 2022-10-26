import style from './Notifications.module.scss';
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import Notification from "./Notification/Notification";
import BlockTitle from "components/shared/BlockTitle/BlockTitle";
import {getRecentNotifications} from "redux/slices/blocksData/recentNotificationsSlice/recentNotificationsThunk";
import Loader from "components/shared/Loader/Loader";
import {useEffect} from "react";


const Notifications = () => {
    const {notifications, error, loading} = useAppSelector(state => state.recentNotifications)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getRecentNotifications())
    }, []);

    if (loading) return <Loader/>
    if (error) return <div>{error}</div>
    if (!notifications) return <div>Cant load</div>


    const blocks = notifications?.map(notification => <Notification {...notification} key={notification.postDate}/>)
    return (
        <div className={style.block}>
            <BlockTitle title={'Recent Notifications'}/>
            <ul>
                {blocks}
            </ul>
        </div>
    );
}

export default Notifications;
