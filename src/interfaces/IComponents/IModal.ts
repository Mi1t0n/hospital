import {ReactNode} from "react";

interface IModal {
    isOpen: boolean
    closeModal: () => void
    children: ReactNode
}
export type {IModal}