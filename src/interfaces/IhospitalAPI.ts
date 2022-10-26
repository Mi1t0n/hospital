import {IPatientRow} from "./IComponents/IPatientRow";

interface Imeeting{
    id:string
    doctorSerialNumber:string
    meetingSerialNumber:string
    patients:IPatientRow[]
}
export type {Imeeting}