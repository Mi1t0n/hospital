import {InputHTMLAttributes} from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    register?: any
    options?: {}
    errors?:any
    withLabel?:boolean
    myClassName?:string
}

export type {IInput}