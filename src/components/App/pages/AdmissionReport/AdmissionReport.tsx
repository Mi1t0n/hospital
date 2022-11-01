import {useAppSelector} from "hooks/reduxHooks";
import {useCloseReportMutation, useGetMyPatientsQuery, useSetPatientsMutation} from "redux/hospitalApi";
import Loader from "components/shared/Loader/Loader";
import Form from "components/shared/Forms/Form/Form";
import Select from "components/shared/Forms/Select/Select";
import style from "./AdmissionReport.module.scss";
import Input from "components/shared/Forms/Input/Input";
import TextArea from "components/shared/Forms/TextArea/TextArea";
import Button from "components/shared/Forms/Button/Button";
import {faker} from "@faker-js/faker";
import notification from "utils/notification";
import {IadmissionReportInputs} from "interfaces/IComponents/IadmissionReportInputs";

const AdmissionReport = () => {
    const serialNumber = useAppSelector(state => state.user.serialNumber)
    if (!serialNumber) return null

    const {data: meeting, isLoading} = useGetMyPatientsQuery(serialNumber)
    const [postReport] = useCloseReportMutation()
    const [deletePatientFromRow] = useSetPatientsMutation()

    if (isLoading) return <Loader/>
    if (!meeting) return <div>Cant load</div>

    const patients = meeting[0].patients.map(
        ({serialNumber, fullName}) => ({value: serialNumber, text: fullName})
    )

    const sendReport = (content: IadmissionReportInputs) => {
        notification.loading('Sending ')
        deletePatientFromRow({
            id      : meeting[0].id,
            patients: meeting[0].patients.filter(
                ({serialNumber}) => serialNumber !== content.patientSerialNumber
            )
        })
            .unwrap()
            .then(() => {
                postReport({
                    doctorSerialNumber: serialNumber,
                    reportSerialNumber: faker.random.alphaNumeric(10).toUpperCase(),
                    content
                })
            })
            .then(() => notification.success('Ready'))
            .catch(({error}) => notification.error(error))

    }


    return (
        <div className={style.admissionReport}>
            <Form onSubmit={sendReport} myClassName={style.form}>
                <Select name={'patientSerialNumber'} options={patients}/>
                <Input name={'diagnosis'} options={{required: true}}/>
                <TextArea name={'comment'} options={{required: true}}/>
                <Button/>
            </Form>
        </div>
    );
}

export default AdmissionReport;
