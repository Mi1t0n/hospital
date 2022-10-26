import userTypes from "../enums/userTypes";


type IuserRoutes = {
    [key in userTypes]: () => JSX.Element
}

export type {IuserRoutes}