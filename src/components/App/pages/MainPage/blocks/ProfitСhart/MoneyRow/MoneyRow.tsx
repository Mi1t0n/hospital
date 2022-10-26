import style from './MoneyRow.module.scss';
import MoneyBlock from './MoneyBlock/MoneyBlock';
import {FC} from "react";
import {IMoneyRow} from "interfaces/Islices/IhospitalSurveySlice";

const MoneyRow: FC<{ data: IMoneyRow[] }> = ({data}) =>
    (
        <header className={style.row}>
            {
                data.map(blockValue => <MoneyBlock {...blockValue} key={blockValue.title}/>)
            }
        </header>
    )

export default MoneyRow;
