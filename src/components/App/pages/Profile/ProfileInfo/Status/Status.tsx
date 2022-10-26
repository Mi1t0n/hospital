import style from './Status.module.scss';
import {IOwnerProfile} from "interfaces/IComponents/IProfile";
import {FC} from "react";

type IStatus = Pick<IOwnerProfile, 'textStatus'>

const Status: FC<IStatus> = ({textStatus}) =>
    (<div className={style.status}>
        {textStatus}
    </div>)


export default Status;
