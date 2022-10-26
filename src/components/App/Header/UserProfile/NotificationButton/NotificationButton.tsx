import style from './NotificationButton.module.scss';
import {NavLink} from 'react-router-dom';
import {FC} from "react";
import {INotificationButton} from "interfaces/IComponents/INotificationButton";

const NotificationButton: FC<INotificationButton> = ({icon, routePath}) =>
    (<NavLink className={style.button} to={routePath}>
        <img src={icon} alt={'icon'}/>
    </NavLink>);


export default NotificationButton;
