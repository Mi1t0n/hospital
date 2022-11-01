import {TextareaHTMLAttributes} from "react";

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string
    register?: any
    options?: {}
    errors?: any
    withLabel?: boolean
    myClassName?: string
}

export type {ITextArea}