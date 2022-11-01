import style from './OwnerCover.module.scss';
import defaultAvatar from 'assets/defaultAvatar.svg'
import {FC, lazy, Suspense} from "react";
import {IOwnerCover} from "interfaces/IComponents/IOwnerCover";

const ChangePhotoButton = lazy(() => import("./ChangePhotoButton/ChangePhotoButton"))


const OwnerCover: FC<IOwnerCover> = ({avatar, fullName, isOwner}) =>
    (<div className={style.ownerCover}>
        <img src={avatar || defaultAvatar} alt={'avatar'}/>
        <h3>{fullName}</h3>
        {
            isOwner &&
            <Suspense fallback={<div>Loading . . .</div>}>
                <ChangePhotoButton/>
            </Suspense>
        }
    </div>);


export default OwnerCover;
