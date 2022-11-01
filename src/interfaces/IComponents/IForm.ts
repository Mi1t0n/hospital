import {ReactNode} from "react";

interface IForm {
    defaultValues?: any
    children?: ReactNode
    onSubmit?: any
    myClassName?: string
}

export type {IForm}