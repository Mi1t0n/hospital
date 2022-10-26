import style from './Section.module.scss';
import {FC} from "react";
import {IDetail} from "interfaces/IComponents/IProfile";


const Detail: FC<IDetail> = ({field, value}) => {

    if (new Date(value).getTime()) value = new Date(value).toLocaleDateString()

    return (
        <section className={style.section}>
            <span>{field} : {value}</span>
        </section>
    )
}


export default Detail;
