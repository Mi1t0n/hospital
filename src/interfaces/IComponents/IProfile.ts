import userTypes from "../enums/userTypes";

interface IDetail {
    field: string
    value: string
}

interface IOwnerProfile {
    fullName: string
    avatar: string | null
    textStatus: string | null
    details: IDetail[] | null
}

interface IProfile {
    serialNumber: string
    id: string,
    userType: userTypes,
    userProfile: IOwnerProfile
}

export type {IProfile, IOwnerProfile, IDetail}