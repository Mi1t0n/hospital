import style from './Header.module.scss';
import Input from '../../shared/InputWithLoupe/Input';
import UserProfile from './UserProfile/UserProfile';

const Header = () =>
    (<header className={style.header}>
        <Input valueOnClick={() => {}}/>
        <UserProfile/>
    </header>);


export default Header;
