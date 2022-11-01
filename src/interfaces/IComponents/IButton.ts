import {ButtonHTMLAttributes} from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    myClassName?: string
    text?: string
}

export type {IButton}