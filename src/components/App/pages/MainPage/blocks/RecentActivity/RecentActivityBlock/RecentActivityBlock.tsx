import style from './RecentActivityBlock.module.scss';
import {FC} from "react";
import {IrecentActivityBlock} from "interfaces/Islices/IrecentActivitySlice";


const RecentActivityBlock: FC<IrecentActivityBlock> = ({title, value}) =>
    (<li className={style.block}>
        <h4>{title}</h4>
        <progress max={100} value={value} data-color={'#ffffff'}/>
    </li>)
export default RecentActivityBlock;
