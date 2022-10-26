import userTypes from "../enums/userTypes";

type IuserMainPage ={
    [key in userTypes]: () => JSX.Element
}
export type {IuserMainPage}