import style from './Profile.module.scss';
import {useParams} from "react-router-dom";
import {useGetCurrentUserQuery, useGetProfileQuery} from "redux/hospitalApi";
import OwnerCover from "./OwnerCover/OwnerCover";
import OwnerInfo from "./ProfileInfo/OwnerInfo";
import {useAppSelector} from "hooks/reduxHooks";
import Loader from "../../../shared/Loader/Loader";


const Profile = () => {
    const {serialNumber} = useParams()
    if (!serialNumber) return null

    const currentUserNumber = useAppSelector(state => state.user.serialNumber)
    const isOwner = serialNumber === currentUserNumber

    const {data: ownerProfile, isLoading: loadingOwner} = useGetCurrentUserQuery(currentUserNumber, {skip: !isOwner})
    const {data: userProfile, isLoading: loadingUser} = useGetProfileQuery(serialNumber, {skip: isOwner})

    if (loadingUser || loadingOwner) return <Loader/>

    const profile = isOwner ? ownerProfile : userProfile

    if(!profile) return <div>Error</div>

    const {avatar, fullName, ...info} = profile[0].userProfile

    return (
        <div className={style.profile}>
            <OwnerCover avatar={avatar} fullName={fullName} isOwner={isOwner}/>
            <OwnerInfo {...info}/>
        </div>
    );
};

export default Profile;
