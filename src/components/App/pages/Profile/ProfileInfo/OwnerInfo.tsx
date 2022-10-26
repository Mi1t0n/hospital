import style from './OwnerInfo.module.scss';
import Status from "./Status/Status";
import OwnerDetails from "./OwnerDetails/OwnerDetails";
import {IOwnerProfile} from "interfaces/IComponents/IProfile";
import {FC} from "react";

type IOwnerInfo = Omit<IOwnerProfile, 'fullName' | 'avatar'>

const OwnerInfo: FC<IOwnerInfo> = ({textStatus, details}) =>
    (<div className={style.info}>
        <Status textStatus={textStatus}/>
        <OwnerDetails details={details}/>
    </div>);


export default OwnerInfo;
