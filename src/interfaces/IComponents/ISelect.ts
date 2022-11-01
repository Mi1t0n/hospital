interface ISelect {
    name: string
    errors?:any
    register?: any
    options?: {
        value: string
        text: string
    }[]
    myClassName?:string
    withLabel?:boolean
}

export type {ISelect}