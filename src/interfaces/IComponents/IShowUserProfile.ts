import {IOwnerProfile, IProfile} from "./IProfile";

type IShowUserProfile = Pick<IOwnerProfile, 'avatar' | 'fullName'> & Pick<IProfile, 'serialNumber'>

export type {IShowUserProfile}