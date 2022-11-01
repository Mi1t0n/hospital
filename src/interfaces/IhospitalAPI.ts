import {IPatientRow} from "./IComponents/IPatientRow";

interface Imeeting {
    id: string
    doctorSerialNumber: string
    meetingSerialNumber: string
    patients: IPatientRow[]
}

interface Ireport {
    doctorSerialNumber: string
    reportSerialNumber: string
    content: {
        patientSerialNumber: string
        diagnosis: string
        comment: string
    }
}

export type {Imeeting,Ireport}