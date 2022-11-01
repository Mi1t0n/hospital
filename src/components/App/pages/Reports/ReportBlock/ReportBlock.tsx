import {FC, useState} from "react";
import {Ireport} from "interfaces/IhospitalAPI";
import {useGetProfileQuery} from "redux/hospitalApi";
import Loader from "components/shared/Loader/Loader";
import style from "./ReportBlock.module.scss";
import Modal from "components/shared/Modal/Modal";

const ReportBlock: FC<Ireport> = ({doctorSerialNumber, content}) => {
    const [modalStatus, toggleModal] = useState(false)
    const {data: doctor, isLoading: loadingDoctor} = useGetProfileQuery(doctorSerialNumber)
    const {data: patient, isLoading: loadingPatient} = useGetProfileQuery(content.patientSerialNumber)

    if (loadingDoctor || loadingPatient) return <Loader/>
    if (!doctor || !patient) return <div>Cant load</div>

    const doctorName = doctor[0].userProfile.fullName
    const patientName = patient[0].userProfile.fullName
    const diagnosis = content.diagnosis
    const comment = content.comment

    return (
        <>
            <div className={style.reportData} onClick={() => toggleModal(true)}>
                <b>{doctorName}</b> diagnosed <b>{patientName}</b>
            </div>
            <Modal closeModal={() => toggleModal(false)} isOpen={modalStatus}>
                <section className={style.section}>
                    <span>Diagnosis : </span>
                    <p>{diagnosis}</p>
                </section>
                <section className={style.section}>
                    <span>Comment : </span>
                    <p>{comment}</p>
                </section>
            </Modal>
        </>
    );
}

export default ReportBlock;
