import style from './Header.module.scss';
import UserProfile from './UserProfile/UserProfile';
import HeaderInput from "./HeaderInput/HeaderInput";

const Header = () =>
    <header className={style.header}>
        <HeaderInput/>
        <UserProfile/>
    </header>


export default Header;
