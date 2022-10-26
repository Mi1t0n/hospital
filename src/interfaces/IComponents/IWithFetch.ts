import {ReactNode} from "react";

interface IWithFetch {
    children: ReactNode
    error: any
    loading: boolean
}

export type {IWithFetch}