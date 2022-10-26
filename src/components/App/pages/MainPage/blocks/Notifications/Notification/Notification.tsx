import style from './Notification.module.scss';
import {FC} from "react";
import {INotification} from "interfaces/Islices/IrecentNotificationsSlice";


const Notification: FC<INotification> = ({content, postDate}) => {
    return (
        <li className={style.notification}>
            <div className={style.dot}/>
            <h3>{postDate}</h3>
            <p>{content + content} </p>
        </li>
    );
}

export default Notification;
