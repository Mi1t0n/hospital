import style from './UserInfo.module.scss';
import {useAppSelector} from 'hooks/reduxHooks';
import ProfileNav from './ProfileNav/ProfileNav';
import defaultAvatar from 'assets/defaultAvatar.svg';
import {useGetCurrentUserQuery} from "../../../../../redux/hospitalApi";

const UserInfo = () => {
    const serialNumber = useAppSelector(state => state.user.serialNumber)
    const {data: currentUser} = useGetCurrentUserQuery(serialNumber)
    if (!currentUser) return null
    const {userProfile, userType} = currentUser[0]
    return (
        <div className={style.profile}>
            <img src={userProfile?.avatar || defaultAvatar} alt={'avatar'}/>
            <div className={style.userProfile}>
                <p>{userType}</p>
                <h5>{userProfile?.fullName}</h5>
                <ProfileNav/>
            </div>
        </div>
    );
};

export default UserInfo;
