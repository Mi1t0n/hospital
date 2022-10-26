import {IOwnerProfile} from "./IProfile";

interface IOwnerCover extends Pick<IOwnerProfile, 'fullName' | 'avatar'> {
    isOwner: boolean
}

export type { IOwnerCover}