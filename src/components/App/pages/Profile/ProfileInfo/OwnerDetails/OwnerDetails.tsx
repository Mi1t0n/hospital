import style from './OwnerDetails.module.scss';
import {IOwnerProfile} from "interfaces/IComponents/IProfile";
import {FC} from "react";
import Detail from "./Section/Detail";

type IOwnerDetails = Pick<IOwnerProfile, 'details'>
const OwnerDetails: FC<IOwnerDetails> = ({details}) =>
    (<div className={style.details}>
        {
            details?.map(detail => <Detail {...detail} key={detail.field}/>)
        }
    </div>)


export default OwnerDetails;
