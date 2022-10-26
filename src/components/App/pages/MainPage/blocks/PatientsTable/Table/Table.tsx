import style from './Table.module.scss';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';
import {FC} from "react";
import {ITable} from "interfaces/IComponents/ITable";

const Table: FC<ITable> = ({patients}) =>
    (<table className={style.fullTable}>
        <TableHeader/>
        <TableBody patients={patients}/>
    </table>);


export default Table;
