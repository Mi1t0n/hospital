interface IlogIn {
    email:string
    password:string
}
interface IsingUp extends  IlogIn{
    fullName:string
}
export type {IsingUp,IlogIn}