import {IOwnerProfile, IProfile} from "./IProfile";

type IDoctor = Pick<IOwnerProfile, 'avatar' | 'fullName'> & Pick<IProfile, 'serialNumber'>

export type {IDoctor}