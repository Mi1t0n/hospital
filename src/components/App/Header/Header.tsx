import style from './Header.module.scss';
import Input from 'components/shared/Input/Input';
import UserProfile from './UserProfile/UserProfile';

const Header = () =>
    (<header className={style.header}>
        <Input valueOnClick={() => {}}/>
        <UserProfile/>
    </header>);


export default Header;
