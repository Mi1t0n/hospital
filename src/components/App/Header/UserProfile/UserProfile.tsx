import style from './UserProfile.module.scss';
import NotificationButton from './NotificationButton/NotificationButton';
import UserInfo from './UserProfileInfo/UserInfo';
import bell from 'assets/bell.svg'
import message from 'assets/message.svg'

const UserProfile = () =>
    (<div className={style.profile}>
        <NotificationButton icon={bell} routePath={'/notifications'}/>
        <NotificationButton icon={message} routePath={'/messages'}/>
        <UserInfo/>
    </div>)

export default UserProfile;
