import style from './PatientsTable.module.scss';
import Table from './Table/Table';
import BlockTitle from "components/shared/BlockTitle/BlockTitle";
import Loader from "components/shared/Loader/Loader";
import {useGetMyPatientsQuery} from "redux/hospitalApi";
import {useAppSelector} from "hooks/reduxHooks";


const PatientsTable = () => {
    const doctorSerialNumber = useAppSelector(state => state.user.serialNumber)
    if (!doctorSerialNumber) return null
    const {data: meeting, isLoading, isError} = useGetMyPatientsQuery(doctorSerialNumber)
    if (!meeting) return null
    const {patients} = meeting[0]
    if (isLoading) return <Loader/>
    if (isError) return <div>error</div>
    if (!patients) return <div>Cant load</div>

    return (
        <div className={style.table}>
            <BlockTitle title={'Patients'}/>
            <Table patients={patients}/>
        </div>
    );
};

export default PatientsTable;
