import PatientRow from './PatientRow/PatientRow';
import {ITable} from "interfaces/IComponents/ITable";
import {FC} from "react";


const TableBody: FC<ITable> = ({patients}) =>
    (<tbody>
    {
        patients.map(patient => <PatientRow {...patient} key={patient.serialNumber}/>)
    }
    </tbody>)

export default TableBody;
