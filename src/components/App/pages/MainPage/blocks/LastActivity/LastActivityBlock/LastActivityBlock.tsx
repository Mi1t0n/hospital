import style from './LastActivityTemplate.module.scss';
import {FC} from "react";
import {ILastActivityBlock} from "interfaces/Islices/IlastActivitySlice";


const LastActivityBlock: FC<ILastActivityBlock> = ({logo, count, title}) =>
    (
        <div className={style.block}>
            <img src={logo} className={style.logo} alt={'logo'}/>
            <div>
                <h3 className={style.count}>{count}</h3>
                <p className={style.title}>{title}</p>
            </div>
        </div>
    )

export default LastActivityBlock;
