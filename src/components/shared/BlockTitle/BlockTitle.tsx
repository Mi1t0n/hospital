import style from './BlockTitle.module.scss';
import {IBlockTitle} from "interfaces/IComponents/IBlockTitle";
import {FC} from "react";


const BlockTitle: FC<IBlockTitle> = ({title}) =>
    (<header className={style.header}>
        <h3>{title}</h3>
    </header>)


export default BlockTitle;
