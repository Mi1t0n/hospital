import style from './MoneyBlock.module.scss';
import {FC} from "react";
import {IMoneyRow} from "../../../../../../../../interfaces/Islices/IhospitalSurveySlice";


const MoneyBlock: FC<IMoneyRow> = ({count, title}) =>
    (
        <div className={style.moneyBlock}>
            <p className={style.count}>$ {count}</p>
            <p className={style.title}>{title}</p>
        </div>
    )


export default MoneyBlock;
