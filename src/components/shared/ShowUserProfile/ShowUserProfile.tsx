import style from './ShowUserProfile.module.scss';
import {useNavigate} from "react-router-dom";
import defaultAvatar from "assets/defaultAvatar.svg";
import {FC} from "react";
import {IShowUserProfile} from "interfaces/IComponents/IShowUserProfile";


const ShowUserProfile:FC<IShowUserProfile> = ({ avatar, fullName, serialNumber}) => {
    const navigate = useNavigate()
    const openUserProfile = () => navigate(`/profile/${serialNumber}`)

    return (
        <div className={style.profile} onClick={openUserProfile}>
            <img src={avatar || defaultAvatar} loading="lazy" alt={'user avatar'}/>
            <h4>{fullName}</h4>
        </div>
    )
}

export default ShowUserProfile;
