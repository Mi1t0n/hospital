import style from './Doctor.module.scss';
import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {IDoctor} from "interfaces/IComponents/IDoctor";
import defaultAvatar from "assets/defaultAvatar.svg";


const Doctor: FC<IDoctor> = ({ avatar, fullName, serialNumber}) => {
    const navigate = useNavigate()
    const openUserProfile = () => navigate(`/profile/${serialNumber}`)

    return (
        <div className={style.profile} onClick={openUserProfile}>
            <img data-src={avatar || defaultAvatar} className="swiper-lazy" alt={'doctor Avatar'}/>
            <h4>{fullName}</h4>
        </div>
    )
}
export default Doctor;