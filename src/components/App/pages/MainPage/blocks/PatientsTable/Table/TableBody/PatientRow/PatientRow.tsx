import style from './PatientRow.module.scss';
import defaultAvatar from 'assets/defaultAvatar.svg';
import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {IPatientRow} from "interfaces/IComponents/IPatientRow";
import toLocal from "utils/toLocal";

const PatientRow: FC<IPatientRow> = ({fullName, avatar, amount, appointmentDate, department, serialNumber}) => {
    const navigate = useNavigate()
    const openProfile = () => navigate(`/profile/${serialNumber}`)
    return (
        <tr className={style.row}>
            <td className={style.user} onClick={openProfile}>
                <img src={avatar || defaultAvatar}/>
                <p>{fullName}</p>
            </td>
            <td>{department}</td>
            <td>{new Date(appointmentDate).toLocaleDateString()}</td>
            <td>{serialNumber}</td>
            <td>{toLocal(amount)}</td>
        </tr>
    )
}

export default PatientRow;